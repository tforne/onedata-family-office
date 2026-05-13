# Documentación extensa: análisis de una petición de incidencia

## 1. Objetivo del proceso

El proceso de análisis de una petición de incidencia tiene como finalidad evaluar una solicitud enviada por un inquilino y determinar, con ayuda de IA, si:

- debe convertirse en una incidencia operativa real;
- debe rechazarse como solicitud de incidencia;
- quién parece ser la parte responsable del problema;
- quién debería asumir el coste de la actuación;
- qué acciones operativas conviene ejecutar a continuación;
- qué respuesta se puede preparar para el inquilino.

Este flujo está implementado principalmente en el codeunit [`Codeunit 97301 - OD AI Incident Request Mgt.al`](</c:/Users/Tomas Forne Martinez/Documents/AL/OneData Family Office/.vscode/RoleCenter/Codeunits/Codeunit 97301 - OD AI Incident Request Mgt.al>) y se apoya en páginas de revisión para mostrar el resultado al usuario.

## 2. Punto de entrada del análisis

El punto de entrada es el procedimiento:

- `AnalyzeIncidentRequest(Incident: Record "OD Tenant Incident Request"): Integer`

Su comportamiento es muy directo:

1. Genera una respuesta IA a partir de la solicitud recibida.
2. Guarda el análisis en la tabla de revisiones.
3. Devuelve el `Entry No.` de la revisión creada.

En términos funcionales, esto significa que el sistema no se limita a pedir una opinión a la IA, sino que deja trazabilidad persistente del análisis para consulta posterior.

## 3. Visión general del flujo completo

El flujo completo puede resumirse así:

1. Se recibe una solicitud del inquilino (`OD Tenant Incident Request`).
2. Se construye un contexto amplio con datos de la solicitud, activo, equipamiento, seguros, contrato y documentos del contrato.
3. Se envía ese contexto a la IA con un `system prompt` muy estricto.
4. La IA devuelve un JSON con decisión, responsables, explicación y acciones.
5. El sistema interpreta ese JSON y lo guarda en una revisión (`OD AI Incident Request Review`).
6. Se generan acciones operativas en `OD AI Action`.
7. El usuario puede consultar la revisión en una ficha y, si existe incidencia creada, abrir el correo al inquilino.

## 4. Qué información se analiza

El análisis no se basa solo en el texto libre de la petición. El sistema compone un contexto enriquecido con varias capas de información.

### 4.1. Datos principales de la solicitud

La sección `BuildMainIncidentContext` aporta:

- número de entrada;
- identificador de solicitud;
- fecha de incidencia;
- título;
- descripción;
- tipo de caso;
- prioridad;
- estado;
- origen;
- contrato;
- activo relacionado;
- descripción de referencia;
- datos de contacto;
- email del usuario del portal.

Esta es la base del análisis porque contiene el motivo declarado por el inquilino y el metadato de clasificación inicial.

### 4.2. Datos del activo

La sección `BuildAssetContext` intenta localizar el inmueble (`Fixed Real Estate`) y añade:

- número de activo;
- descripción;
- dirección;
- dirección 2;
- ciudad;
- código postal.

Esto ayuda a contextualizar físicamente el problema y a confirmar si la solicitud está correctamente vinculada a un activo.

### 4.3. Equipamiento del activo

La sección `BuildAssetEquipmentContext` analiza los equipos asociados al activo (`FRE Equipment`) y añade, hasta 10 elementos:

- descripción;
- cantidad;
- número de serie;
- modelo;
- fecha de adquisición;
- coste de adquisición;
- periodo de garantía;
- necesidad de mantenimiento;
- contrato de mantenimiento.

Además, informa del número total de elementos de equipamiento. Esto es especialmente útil para averías sobre aparatos, instalaciones o elementos técnicos cuyo mantenimiento pueda estar cubierto por garantía o proveedor.

### 4.4. Seguros del activo

La sección `BuildAssetInsuranceContext` añade pólizas vinculadas al activo (`RE Insurance Policy Asset`):

- número de póliza;
- descripción;
- aseguradora;
- si está activa;
- vencimiento.

Esta capa es clave para valorar si el coste o la gestión pueden derivarse a la aseguradora.

### 4.5. Datos del contrato

La sección `BuildContractContext` localiza el contrato de arrendamiento (`Lease Contract`) y añade:

- número de contrato;
- cliente;
- contacto;
- fecha de inicio;
- fecha de vencimiento;
- importe anual;
- importe por periodo.

Aunque estos datos no resuelven por sí solos la responsabilidad, sí ayudan a situar la relación contractual y la vigencia del arrendamiento.

### 4.6. Documentos del contrato

La sección `BuildContractDocumentsContext` recupera documentos asociados al contrato desde `OD FO Document`. Para un máximo de 5 documentos, se añade:

- número de documento;
- tipo documental;
- descripción;
- estado;
- estado de revisión;
- nivel de riesgo;
- fecha de emisión;
- fecha de vencimiento;
- si tiene adjunto;
- nombre del fichero, si existe;
- un extracto del documento.

También se informa del número total de documentos asociados.

Esta parte es una de las más importantes del proceso porque intenta extraer evidencia contractual o documental para decidir:

- si el caso debe convertirse en incidencia;
- si existe base contractual para atribuir el coste al propietario, al inquilino o a un tercero.

## 5. Cómo se obtiene el extracto documental

El sistema no siempre lee directamente el documento completo tal como está adjunto. Sigue una estrategia escalonada:

1. Intenta asegurar que el documento tenga un resumen IA (`AI Summary`).
2. Si ya existe, lo usa.
3. Si no existe, intenta generarlo a partir del OCR (`OCR Text`).
4. Si el OCR existe, pide a la IA un resumen documental.
5. Si no hay resumen IA, usa el OCR bruto.
6. En ambos casos recorta el texto a 600 caracteres para incorporarlo al contexto del análisis de incidencia.

### 5.1. Generación del resumen documental

Cuando no hay `AI Summary`, el procedimiento `EnsureDocumentAISummary` intenta crearlo. La lógica:

- verifica si el blob `AI Summary` ya tiene valor;
- si no lo tiene, lee el `OCR Text`;
- si tampoco hay OCR, no hace nada;
- si hay OCR, invoca `TryGenerateDocumentAISummary`.

### 5.2. Enfoque del resumen documental

El prompt usado para resumir documentos está especializado en property management y contratos. Ordena expresamente a la IA:

- no inventar contenido;
- responder en español;
- priorizar cláusulas de responsabilidad, mantenimiento, reparaciones, seguros, vigencia, obligaciones y riesgos;
- buscar cláusulas que eximan al propietario o asignen coste al inquilino;
- indicar explícitamente si esas cláusulas existen o no.

Este detalle es muy relevante porque condiciona la calidad del análisis posterior. La revisión de la incidencia no analiza el contrato “desde cero”, sino que se apoya en una primera reducción semántica centrada en responsabilidades.

### 5.3. Recorte del OCR

Si el OCR supera 8.000 caracteres, el sistema no manda todo el contenido. Usa:

- los primeros 4.000 caracteres;
- los últimos 4.000 caracteres.

La intención es capturar el inicio y el cierre del documento, que normalmente contienen identificación, objeto, cláusulas relevantes y firmas o condiciones finales.

## 6. Qué instrucciones recibe la IA para decidir

La pieza central del proceso es `GetIncidentRequestSystemPrompt()`. Este prompt define el comportamiento esperado de la IA de forma muy estricta.

### 6.1. Principios generales

La IA recibe estas reglas de alto nivel:

- solo puede analizar datos proporcionados desde Business Central;
- debe recomendar si la solicitud debe convertirse en incidencia o rechazarse;
- siempre debe analizar quién debe asumir el coste, incluso si la solicitud se rechaza;
- debe devolver una única decisión final;
- debe responder exclusivamente en JSON válido.

### 6.2. Regla prioritaria: el Tipo caso

El campo más importante para la decisión es `Tipo caso`.

La lógica instruida a la IA es:

- Si `Tipo caso = Problem`, debe tratarse como avería o problema y devolver `CreateIncident`.
- Si `Tipo caso = Question`, debe tratarse como consulta y no convertirse en incidencia, salvo que el contenido describa claramente una avería o un riesgo operativo.
- Si `Tipo caso = Request`, debe evaluarse el contenido y solo devolver `CreateIncident` si realmente describe una incidencia de mantenimiento, conservación, seguridad, suministro o reparación.

Esto significa que el `Case Type` es un clasificador dominante, pero no totalmente absoluto en todos los escenarios.

### 6.3. Casos que deben crear incidencia

El prompt obliga a devolver `CreateIncident` si el caso afecta a:

- habitabilidad;
- seguridad;
- conservación del inmueble;
- avería técnica;
- suministro;
- filtración;
- humedad;
- instalación;
- elemento esencial.

Además, si existe duda razonable, la instrucción es clara: crear incidencia para revisión técnica.

### 6.4. Casos que deben rechazarse

El prompt orienta a `RejectRequest` en situaciones como:

- mejora estética;
- preferencia personal;
- petición no relacionada con mantenimiento;
- uso indebido evidente.

### 6.5. Responsabilidad económica

La IA debe distinguir entre:

- decisión operativa: crear incidencia o rechazar;
- responsabilidad económica: quién debe responder y quién soporta el coste.

Para el reparto económico se le pide priorizar:

- cláusulas contractuales;
- uso indebido;
- mantenimiento ordinario;
- seguros;
- comunidad;
- proveedor externo.

Si no hay base suficiente:

- `responsibleParty` puede ser `Unknown`;
- `costBearer` puede ser `Unknown` o `Shared`.

## 7. Estructura exacta de la respuesta IA

La IA debe devolver un JSON con esta semántica:

- `decision`
- `responsibleParty`
- `costBearer`
- `confidence`
- `summary`
- `reasoning`
- `legalBasis`
- `contractBasis`
- `costReasoning`
- `recommendedAction`
- `tenantEmailSubject`
- `tenantEmailBody`
- `actions[]`

Cada acción debe contener:

- `priority`
- `action`

Este diseño no solo busca decidir, sino dejar preparada una salida operativa y una salida comunicativa.

## 8. Guardado del análisis

Una vez recibida la respuesta IA, el sistema llama a `SaveReview`.

### 8.1. Inicialización de la revisión

`InitReviewHeader` rellena:

- identificador de la solicitud;
- activo;
- contrato;
- fecha y hora de revisión;
- usuario que ejecutó el análisis.

### 8.2. Lectura del JSON y mapeo a campos

`ApplyJsonMetadataToReview` hace lo siguiente:

- parsea el JSON;
- convierte `decision` a opción interna;
- convierte `responsibleParty` a opción interna;
- convierte `costBearer` a opción interna;
- convierte `confidence` a opción interna;
- guarda el asunto propuesto del correo al inquilino.

### 8.3. Regla de seguridad adicional

Existe una regla técnica muy importante: `ShouldForceCreateIncident`.

Si `Incident."Case Type"` es `PROBLEM`, entonces el sistema fuerza internamente:

- `Review.Decision := CreateIncident`

aunque la IA hubiera devuelto otra cosa.

Esto es una salvaguarda de negocio muy relevante. En la práctica:

- el prompt ya pide a la IA crear incidencia para `Problem`;
- además, el backend lo refuerza y lo hace obligatorio al persistir.

Por tanto, `Problem` no es solo una orientación del modelo, sino también una regla de negocio ejecutada por código.

## 9. Qué se guarda exactamente en la revisión

Además de los campos de cabecera y clasificación, el sistema guarda varios textos largos en blobs:

- `Summary`
- `Reasoning`
- `Legal Basis`
- `Contract Basis`
- `Cost Reasoning`
- `Recommended Action`
- `Tenant Email Body`
- `Asset Details`
- `Raw Response`

Esto permite:

- revisar el razonamiento de la IA;
- ver la base contractual sugerida;
- conservar una copia completa de la respuesta cruda;
- reutilizar el cuerpo del email;
- dejar evidencia del contexto de activo usado.

## 10. Generación de acciones operativas

Si el JSON contiene `actions`, el sistema crea registros en `OD AI Action`.

Cada acción se guarda con:

- activo asociado;
- número de análisis;
- descripción;
- prioridad;
- estado inicial `Open`;
- fecha y hora de creación;
- usuario creador;
- origen `AI Incident Review`.

Esto transforma el análisis en trabajo ejecutable, no en una mera recomendación textual.

## 11. Construcción de la respuesta al inquilino

El campo `tenantEmailBody` que devuelve la IA no se guarda tal cual sin más. Antes, el sistema lo enriquece con información adicional.

### 11.1. Resumen de seguro

`BuildTenantInsuranceSummary` añade:

- hasta 2 pólizas activas vinculadas al activo;
- aseguradora;
- vencimiento;
- y el total si hay más de 2.

### 11.2. Resumen de contactos

`BuildTenantContactSummary` añade teléfonos y contactos de referencia desde:

- stakeholders vinculados al activo;
- servicio visible de mantenimiento del portal;
- servicio visible de seguros del portal.

Para cada contacto puede incluir:

- nombre;
- teléfono preferente;
- email preferente.

Esto mejora mucho la utilidad del correo, porque no se limita a explicar la decisión: también orienta al inquilino sobre a quién acudir.

## 12. Cómo ve el usuario el resultado

El resultado se consulta en:

- [`Page 97303 - OD AI Incident Review List.al`](</c:/Users/Tomas Forne Martinez/Documents/AL/OneData Family Office/.vscode/RoleCenter/Pages/Page 97303 - OD AI Incident Review List.al>)
- [`Page 97302 - OD AI Incident Review Card.al`](</c:/Users/Tomas Forne Martinez/Documents/AL/OneData Family Office/.vscode/RoleCenter/Pages/Page 97302 - OD AI Incident Review Card.al>)

### 12.1. Lista de revisiones

La lista muestra de forma resumida:

- número;
- fecha de revisión;
- decisión;
- parte responsable;
- responsable del coste;
- confianza;
- usuario;
- activo;
- contrato.

### 12.2. Ficha de revisión

La ficha muestra el detalle del análisis en bloques:

- resultado;
- resumen;
- razonamiento;
- descripción del activo;
- base contractual;
- responsabilidad del coste;
- acción recomendada;
- respuesta al inquilino.

Además, si la solicitud ya tiene una incidencia creada y existe email destinatario, habilita la acción:

- `Abrir correo al inquilino`

Esta acción usa `OD Tenant Incident Email Mgt.` para abrir el editor de correo vinculado a la incidencia creada.

## 13. Criterio funcional real del sistema

Si se quiere explicar el comportamiento “de negocio” de forma sencilla, el sistema aplica esta lógica:

1. Primero escucha lo que dice el inquilino.
2. Después revisa el contexto del activo y del contrato.
3. Si hay documentos, intenta extraer cláusulas útiles.
4. Evalúa si lo solicitado es una avería real o una simple petición/consulta.
5. Decide si merece abrir incidencia.
6. En paralelo, valora quién debería responder económicamente.
7. Propone acciones internas y una respuesta al inquilino.
8. Guarda todo para trazabilidad.

## 14. Casos prácticos de interpretación

### 14.1. Caso que debería crear incidencia

Ejemplo:

- `Tipo caso = Problem`
- descripción: “Hay una fuga de agua en el baño y está afectando a la pared”

Resultado esperado:

- `CreateIncident`
- alta probabilidad de responsabilidad del propietario, seguro o comunidad según origen del daño;
- acciones de revisión urgente.

Motivo:

- afecta a habitabilidad, conservación y posible filtración.

### 14.2. Caso que probablemente se rechaza

Ejemplo:

- `Tipo caso = Request`
- descripción: “Quiero cambiar el color de una pared porque no me gusta”

Resultado esperado:

- `RejectRequest`
- coste previsiblemente a cargo del inquilino si quisiera ejecutarlo;
- posible correo aclaratorio.

Motivo:

- no es mantenimiento ni avería;
- encaja como mejora estética o preferencia personal.

### 14.3. Caso gris

Ejemplo:

- `Tipo caso = Question`
- descripción: “El aire acondicionado hace ruido raro y enfría menos”

Resultado esperado:

- puede terminar en `CreateIncident` si el contenido evidencia avería;
- revisión apoyada en equipamiento, contrato de mantenimiento o garantía.

Motivo:

- aunque formalmente sea una consulta, el contenido apunta a posible fallo técnico.

## 15. Fortalezas del diseño actual

- Enriquece la petición con contexto real de negocio.
- Da prioridad al tipo de caso.
- Usa evidencia contractual y documental cuando existe.
- Conserva trazabilidad completa de la respuesta IA.
- Convierte recomendaciones en acciones operativas.
- Prepara una comunicación al inquilino reutilizable.
- Introduce una salvaguarda de negocio para `Problem`.

## 16. Limitaciones y consideraciones

### 16.1. Dependencia de la calidad del dato

Si faltan datos en:

- la solicitud;
- el activo;
- el contrato;
- los documentos;
- el OCR;

la calidad del análisis baja, aunque el sistema siga produciendo una respuesta.

### 16.2. Dependencia del OCR y del resumen documental

Si el documento está mal digitalizado o el OCR es pobre:

- la base contractual puede ser incompleta;
- la atribución del coste puede perder precisión.

### 16.3. Límite del número de elementos incluidos

Actualmente se limita el contexto:

- a 10 equipos;
- a 5 documentos;
- a 600 caracteres por extracto documental.

Esto controla el tamaño del prompt, pero puede dejar fuera información relevante en expedientes complejos.

### 16.4. La IA no ejecuta la creación de la incidencia

Este codeunit analiza y guarda una revisión. La creación efectiva de la incidencia operativa dependerá del flujo funcional que consuma esta decisión en otro punto del sistema.

### 16.5. Riesgo de respuesta no parseable

Si la IA no devolviera JSON válido, el sistema no podría mapear correctamente los campos estructurados. Aun así, la respuesta cruda se conserva en `Raw Response`, lo cual ayuda a depurar.

## 17. Resumen técnico por procedimientos

Mapa rápido de responsabilidades dentro del codeunit:

- `AnalyzeIncidentRequest`: orquesta análisis y guardado.
- `GenerateAIResponse`: construye prompt y llama a IA.
- `BuildIncidentRequestContext`: agrega todo el contexto.
- `BuildMainIncidentContext`: datos base de la solicitud.
- `BuildAssetContext`: datos maestros del activo.
- `BuildAssetEquipmentContext`: equipos del activo.
- `BuildAssetInsuranceContext`: seguros vinculados.
- `BuildContractContext`: cabecera del contrato.
- `BuildContractDocumentsContext`: documentos del contrato.
- `BuildSingleContractDocumentContext`: detalle de un documento.
- `ReadPreferredDocumentText`: decide entre resumen IA u OCR.
- `EnsureDocumentAISummary`: fuerza resumen documental si falta.
- `TryGenerateDocumentAISummary`: invoca IA para resumir documento.
- `GetIncidentRequestSystemPrompt`: define las reglas del modelo.
- `SaveReview`: crea la revisión persistida.
- `ApplyJsonMetadataToReview`: mapea JSON a campos.
- `SaveReviewBlobFields`: guarda textos largos.
- `SaveReviewActions`: crea acciones desde el JSON.
- `BuildTenantEmailBodyValue`: enriquece el correo al inquilino.
- `ShouldForceCreateIncident`: regla dura para `Problem`.

## 18. Conclusión

El análisis de una petición de incidencia en este desarrollo no es una clasificación simple basada en texto libre. Es un proceso de decisión asistido por IA con contexto documental y contractual, diseñado para responder tres preguntas a la vez:

- si hay incidencia real;
- quién es responsable;
- quién debería pagar.

La arquitectura actual está bien orientada a operación real porque combina:

- reglas de negocio;
- evidencia del activo y contrato;
- trazabilidad;
- accionabilidad;
- soporte a la comunicación con el inquilino.

Si se quiere evolucionar este flujo en el futuro, las mejoras más naturales serían:

- incorporar más documentos o priorizarlos por relevancia;
- añadir validaciones cuando el JSON no sea correcto;
- enlazar automáticamente la decisión `CreateIncident` con la apertura formal de la incidencia;
- registrar métricas de acierto o revisión humana posterior.
