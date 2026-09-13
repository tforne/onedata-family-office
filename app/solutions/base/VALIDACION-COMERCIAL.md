# OneData Base: cierre de pendientes

Fecha de revisión: 13 de septiembre de 2026.

Documento interno de trabajo. No se enlaza desde la página pública. Las conclusiones distinguen requisitos declarados, inspección de implementación y pruebas funcionales ejecutadas.

## Resultado

Se confirman los requisitos del manifiesto y se ejecutan los controles estáticos disponibles del QR. No existe evidencia suficiente para declarar validados los circuitos fiscales completos, los documentos en Business Central o los automatismos multiempresa. No se han localizado condiciones comerciales aprobadas en las fuentes revisadas.

No se ha modificado código AL, instalado una extensión, registrado documentos, enviado declaraciones ni desplegado la web.

## Compatibilidad: requisitos confirmados

Fuente: manifiesto local de OneData, versión 5.1.26256.201.

| Componente | Versión declarada |
| --- | --- |
| Plataforma | 28.0.0.0 |
| Aplicación Business Central | 28.5.0.0 |
| Runtime AL | 15.2 |
| Microsoft E-Document Core | 28.5.0.0 |
| Microsoft Document Registration in Spain | 28.5.0.0 |
| Microsoft Withholding Tax | 28.3.52162.52273 |
| Microsoft Subscription Billing | 28.3.52162.53239 |

Son requisitos del paquete inspeccionado, no una matriz de versiones probadas ni garantía de funcionamiento con cualquier actualización posterior. Falta contrastar las aplicaciones efectivamente instaladas y ejecutar los escenarios acordados en el entorno de destino.

## Cobertura por modelo

| Modelo | Evidencia identificada | Qué impide cerrar |
| --- | --- | --- |
| 111 | Estructuras, páginas e informe de preparación de contenido, con archivo en el expediente. | Ejecución de cálculo, correspondencia de importes, diseño de registro aplicable al ejercicio, fichero, permisos y flujo completo sin prueba acreditada. |
| 190 | Estructuras, páginas e informe que construye contenido y lo archiva en el expediente. | Mismos requisitos de validación funcional y normativa; la presencia del informe no demuestra una exportación correcta. |
| 115 / 180 | Referencias genéricas de catálogo; no se acredita un circuito específico completo. | Confirmar qué aporta OneData, qué aporta el estándar instalado y los escenarios realmente soportados. |
| 303 | Prevalidación parcial y generación desde valores del formato de transferencia estándar. | Suite AL documentada como no ejecutada. El único suscriptor localizado que suministra el resultado de liquidación está en pruebas; no se ha identificado un proveedor productivo. |
| 347 | Referencia comercial anterior, insuficiente para acreditar una aportación propia completa. | Identificar circuito y origen estándar/OneData, versión y resultado real. |

El informe histórico titulado «Sprint 1 Validado» corresponde a otra versión y contiene diagnóstico y propuestas. Su título no constituye evidencia de ejecución de los circuitos actuales.

## Documentos y QR: comprobaciones ejecutadas

Comando existente, ejecutado sin modificar fuentes:

`python -B tests/VerifactuQR/check_layout.py`

Resultado: 4 comprobaciones correctas y 2 omitidas por falta de baseline; ninguna comprobación fallida.

Comprobaciones correctas:

- El RDLC consume la imagen del dataset estándar Microsoft.
- No existe una política adicional OneData de visibilidad QR en el ámbito comprobado.
- El bloque QR no se solapa en las coordenadas estáticas de diseño comprobadas.
- El informe inspeccionado no genera ni persiste un QR propio.

Las dos comparaciones de preservación de layout y cálculos IRPF no se ejecutaron: falta la copia histórica requerida. No se ha creado una referencia desde el estado actual para simular esa validación.

Estos controles no renderizan informes, no prueban Word, no decodifican un QR real y no ejecutan procesos en Business Central. Los casos funcionales de los runbooks siguen sin resultados acreditados.

## Pruebas necesarias para el cierre funcional

Todas requieren identificar primero sandbox, empresa, paquete instalado, permisos y datos de demostración. No deben realizar envíos reales a AEAT.

| Área | Casos mínimos | Evidencia de aceptación |
| --- | --- | --- |
| Expediente | Preparación, validación, rechazo por errores, aprobación, fichero, justificante, archivo y cierre. | Estados y auditoría reales, errores esperados, fichero correspondiente al mismo modelo/ejercicio/período y permisos efectivos. |
| 111 / 190 | Ejemplo con retenciones conocido, preparación, totales y fichero. | Importes contrastados con datos origen y diseño oficial del ejercicio; resultado por circuito y versión. |
| 303 | Ejecutar suite existente en un entorno de pruebas preparado; comprobar origen productivo del resultado. | Resultados por prueba, errores/avisos esperados y vínculo fiable entre liquidación, expediente y fichero. No basta un proveedor con valores ficticios. |
| Word / RDLC | Factura sin/con IRPF, abono, divisa, redondeo, varias retenciones, multipágina, preview y reimpresión. | Salidas reales comparadas con registros contables y totales; las variantes no soportadas quedan identificadas. |
| QR | Imagen presente/ausente, factura con IRPF y reimpresión. | Imagen y contenido decodificado coherentes con el documento y el estándar, sin nuevos envíos ni alteración del histórico por reimpresión. |
| Multiempresa manual | Alta/cambio en tablas autorizadas, destino deshabilitado, origen igual al destino, mapeo inválido y fallo parcial. | Registros en destinos y logs coherentes, campos excluidos respetados, dependencias y procedimiento de tratamiento de errores documentados. |
| Automatismo de clientes | Alta y modificación, permisos restringidos y fallo de destino. | Resultado observado y tratamiento de errores sin inferir reintentos, recuperación ni planificación general. |

El usuario ha facilitado como destino https://businesscentral.dynamics.com/FFO02?company=08170 y ha confirmado expresamente que FFO02 es un sandbox. Se registra 08170 como parámetro de empresa. La condición de sandbox está confirmada por el usuario; quedan pendientes la comprobación de la empresa efectiva y las versiones instaladas en el cliente.

No se han ejecutado estas pruebas. Tras confirmar el sandbox, se ha reintentado la conexión al navegador y vuelve a fallar antes de abrir Business Central. El bloqueo actual es disponer de una sesión operativa, no una autorización pendiente sobre el tipo de entorno. Antes de registrar documentos de prueba, debe comprobarse que sus automatismos no realicen envíos fiscales reales: que Business Central sea sandbox no demuestra por sí solo que los servicios externos apunten a pruebas.

## Condiciones comerciales por decidir

El manifiesto no incluye EULA ni declaración de privacidad. La explicación de protección del código en el README no define un contrato comercial.

Se necesita una propuesta o documento aprobado que concrete:

- Unidad de licencia: usuario, empresa, entorno u otra modalidad.
- Áreas incluidas y límites de uso.
- Servicios de implantación y formación incluidos o contratados aparte.
- Política de actualizaciones y versiones mantenidas.
- Canal, horario, alcance y condiciones de soporte; SLA únicamente si existe acuerdo.
- Condiciones contractuales y enlaces públicos aprobados.

Hasta recibir esa información, la página remite a la propuesta comercial y no publica precios ni condiciones inventadas.

## Fuentes examinadas

Repositorio de la extensión OneData, solo lectura:

- `app.json`.
- `docs/OneData-Base-Revision-Funcional-Web-2026-09-13.md`.
- `docs/guides/OneData_Fiscal_F01_Training_Readiness.md`.
- `docs/Auditoria/OneData_Fiscal_Sprint_1_Validado.md`.
- `docs/Verifactu/OneData_Verifactu_POC1_Test_Results.md`.
- `docs/Verifactu-QR-Test-Runbook.md`.
- `tests/PreAEAT303/README.md` y proveedor de prueba.
- `tests/VerifactuQR/README.md` y `check_layout.py`.
- Informes de preparación 111/190, workflow fiscal, prevalidación 303, motor multiempresa y suscriptores de clientes.

La documentación antigua no se usa para deducir versiones instaladas, soporte comercial actual ni resultados de pruebas que no se ejecutaron.
