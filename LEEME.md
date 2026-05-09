# 🏛️ OneData Family Office

![Business Central](https://img.shields.io/badge/Microsoft-Dynamics%20365%20Business%20Central-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Status](https://img.shields.io/badge/status-Active%20Development-orange)
![License](https://img.shields.io/badge/license-Private-red)
![Architecture](https://img.shields.io/badge/architecture-Family%20Office%20Layer-purple)

---

## 🎯 ¿Qué es OneData Family Office?

**OneData Family Office** es una extensión para Microsoft Dynamics 365 Business Central que incorpora una **capa global de gobierno, control patrimonial y ownership**.

Complementa a **OneData Property Management** transformando la información operativa en **control estratégico del patrimonio**.

---

## 🧠 Concepto Base

> Property Management ejecuta la operativa  
> Family Office controla la propiedad y la toma de decisiones  

---

## 🧱 Arquitectura

```
┌────────────────────────────────────┐
│        FAMILY OFFICE               │
│  Gobierno • Ownership • Control    │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│   PROPERTY MANAGEMENT              │
│   Contratos • Incidencias • Ledger │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│           ACTIVOS                  │
│     Core de Inmuebles y Patrimonio │
└────────────────────────────────────┘
```

---

## 🚀 Funcionalidades Principales

### 👨‍👩‍👧‍👦 Estructura Familiar
- Familias y miembros
- Estructuras multigeneracionales
- Mapeo de relaciones
- Modelo de gobierno centrado en la familia sobre activos y entidades

### 🏢 Entidades Legales
- Sociedades, holdings, CB y otras estructuras jurídicas
- Personas físicas
- Vinculación con compañías de Business Central
- Maestro global de entidades legales

### 📊 Gestión del Ownership
- Porcentaje de participación sobre activos
- Ownership multi-entidad
- Trazabilidad histórica
- Visión de árbol societario y UBO

### 🔗 Modelo Activo–Compañía
- Compañía operativa
- Compañía contable
- Separación clara de responsabilidades
- Visión patrimonial transversal entre compañías

### 🧭 Gobierno y Responsabilidades
- Roles como decisor, gestor o beneficiario
- Asignación de responsabilidades
- Base para flujos de decisión
- Accountability global sobre stakeholders

### 👥 Maestro Global de Stakeholders
- Registro unificado de stakeholders para personas y entidades
- Gestión de dirección, contacto, VAT y forma jurídica
- Registro global compartido entre compañías (`DataPerCompany = false`)
- Enlaces a registros de origen y compañías de procedencia
- Navegación al árbol de ownership y al cálculo de UBO desde la ficha
- Creación o actualización de clientes en compañías configuradas desde el stakeholder

### 🧾 Gestión Documental y Compliance
- Repositorio documental global para el family office
- Tipos documentales, categorías, confidencialidad y nivel de riesgo
- Documentos vinculados a entidades legales, activos y contratos
- Fichero principal por documento mediante adjunto o URL externa
- Gestión de revisiones, renovaciones y vencimientos
- Versionado documental con control de versión vigente
- Etiquetas, logs y trazabilidad de actividad documental
- Reglas de cumplimiento mediante requisitos documentales por tipo de registro
- Detección de documentos obligatorios faltantes con buffers y listas de trabajo
- Cues en Role Center para vencidos, pendientes, riesgosos o incompletos
- FactBoxes en entidades, activos, familias y contratos
- Conversión de adjuntos estándar de Business Central a documentos FO
- Publicación de documentos seleccionados en el portal del inquilino

### 🤖 Copilot de IA para Activos
- Experiencia Copilot integrada en Business Central para analizar activos
- Prompts guiados para riesgos, rentabilidad, revisión contractual y datos faltantes
- Contexto generado a partir de activos, contratos, incidencias, valoraciones, seguros, contactos y documentos pendientes
- Respuesta estructurada con resumen ejecutivo, riesgos, recomendación y scores
- Persistencia de scores de riesgo, rentabilidad y calidad del dato
- Generación automática de acciones priorizadas a partir de la respuesta
- Configuración basada en Azure OpenAI con endpoint, deployment y API key
- KPIs en dashboard para activos de alto riesgo, baja calidad del dato y acciones abiertas

### 🌐 Portal del Inquilino
- Capa API orientada al inquilino para perfil, contratos, facturas, incidencias y documentos
- Registro de usuarios de portal vinculado a clientes de Business Central
- Controles de habilitación y autorización del portal
- Exposición filtrada de datos según cliente, contrato y activo relacionado
- Alta de incidencias desde el portal y tratamiento posterior en la operativa
- Publicación de documentos visibles en portal con ventanas de visibilidad, descarga y aceptación
- Flujo de solicitudes de subida de documentos por parte del inquilino
- Trazabilidad de accesos y aceptaciones sobre la actividad del portal

### 📈 KPIs Ejecutivos
- Completitud de ownership
- Activos sin compañía asignada
- Visión global de cartera
- Salud documental y exposición de compliance
- Señales operativas y de riesgo asistidas por IA

---

## 🖥️ Capturas

### 🏠 Ficha de Activo (Capa Family Office)
![Asset Card](docs/images/asset-card.png)

### 📊 Dashboard de Family Office
![Dashboard](docs/images/dashboard.png)

### 🧾 Estructura de Ownership
![Ownership](docs/images/ownership.png)

---

## 🧩 Integración con Property Management

La extensión se integra directamente con:

- Fixed Real Estate
- Lease Contracts
- Incidents
- Información financiera (`ledger`)
- Contactos, clientes y proveedores
- Adjuntos estándar de Business Central
- Azure OpenAI para escenarios Copilot
- APIs orientadas a consumo externo desde el portal del inquilino

✔ Sin duplicidad de datos  
✔ Añade una capa superior de control patrimonial  

---

## 🧰 Módulos Funcionales

### 1. Gobierno y Ownership

Esta capa modela la estructura patrimonial por encima de la operativa diaria:

- Familias y miembros
- Entidades legales y participaciones
- Relaciones de ownership sobre activos
- Roles y asignaciones de gobierno
- Árbol societario y análisis UBO

Está pensada para responder preguntas como:

- ¿Quién es el propietario último de este activo?
- ¿A través de qué compañía o rama familiar se ejerce el control?
- ¿Qué stakeholders actúan como decisores, gestores o beneficiarios?

### 2. Hub de Stakeholders

El módulo de stakeholders introduce un registro maestro global capaz de representar:

- Personas físicas
- Compañías
- Proveedores
- Clientes
- Contactos

Capacidades principales:

- Ficha global con datos de dirección y comunicación
- Registro de enlaces para rastrear en qué compañías existe cada stakeholder
- Soporte de deduplicación mediante VAT cuando esté disponible
- Creación o vinculación automática desde orígenes como cliente, proveedor o contacto
- Sincronización de clientes a compañías destino usando configuraciones de sync

Esto convierte al stakeholder en el punto de unión entre estructura legal, partes operativas y análisis de ownership.

### 3. Capa de Control Documental

El módulo documental no es solo una lista de archivos. Aporta un marco de control y cumplimiento para la operativa del family office:

- `OD FO Document`: registro documental central
- `OD FO Document Type`: tipificación y valores por defecto
- `OD FO Document Requirement`: política de obligatoriedad documental
- `OD FO Document Link`: relación entre documentos y registros de negocio
- `OD FO Document Version`: histórico de versiones y control de la vigente
- `OD FO Missing Document Buffer`: backlog generado de documentos obligatorios faltantes

Escenarios soportados:

- Seguimiento de documentos legales, contractuales, aseguradores, técnicos o societarios
- Vinculación documental a activos, entidades legales y contratos de arrendamiento
- Detección de documentos vencidos o próximos a vencer
- Detección de documentos pendientes de revisión
- Detección de responsables no informados o datos obligatorios incompletos
- Detección de requisitos documentales incumplidos por tipo de entidad
- Creación de documentos FO a partir de adjuntos ya existentes en Business Central

### 4. Análisis IA de Activos

El módulo Copilot incorpora un flujo de análisis asistido por IA centrado en activos inmobiliarios.

Escenarios predefinidos:

- Análisis de riesgos
- Redacción de descripción comercial
- Revisión de situación contractual
- Análisis de rentabilidad
- Detección de datos faltantes
- Propuesta de acciones de gestión

El asistente trabaja sobre datos ya existentes en Business Central y combina:

- Datos maestros del activo
- Información descriptiva y de superficies
- Contexto contractual
- Contexto financiero
- Contexto de valoración
- Historial de incidencias
- Información de seguros
- Información de equipamiento
- Contactos
- Documentos pendientes

La respuesta se almacena como evidencia analítica y se transforma en:

- Resumen ejecutivo
- Evaluación de riesgos
- Recomendación
- Score de riesgo
- Score de rentabilidad
- Score de calidad del dato
- Acciones priorizadas generadas por IA

### 5. Portal del Inquilino y Acceso Externo

La solución incluye también una capa de integración para portal del inquilino que expone datos controlados de Business Central a experiencias externas.

Capacidades principales:

- Configuración y autorización de usuarios del portal
- Configuración general de portal y activación/desactivación
- APIs de lectura para perfil, contratos, facturas, incidencias y documentos
- APIs adicionales para activos, atributos, equipamiento y notices
- Entrada de solicitudes de incidencias desde el lado del inquilino
- Modelo de publicación documental para exponer documentos FO seleccionados
- Gestión de solicitudes de subida de documentos por parte del inquilino
- Registro de aceptaciones y log de accesos para documentos publicados

Esta capa está diseñada para que cada inquilino solo vea la información relacionada con su cliente, sus contratos y sus activos asociados.

---

## 🧱 Modelo de Datos

| Tabla | Descripción |
|------|------------|
| OD FO Family | Estructura familiar |
| OD FO Family Member | Miembros |
| OD FO Legal Entity | Entidades legales |
| OD FO Entity Member | Participaciones |
| OD FO Asset Ownership | Ownership |
| OD FO Asset Company Link | Relación activo–compañía |
| OD FO Governance Role | Roles de gobierno |
| OD FO Governance Assignment | Asignaciones |
| OD FO Stakeholder | Registro global de stakeholders |
| OD FO Stakeholder Link | Mapeo de origen del stakeholder entre compañías |
| OD FO Document | Registro documental central |
| OD FO Document Link | Relación documento–registro |
| OD FO Document Type | Maestro de tipos documentales |
| OD FO Document Requirement | Política de obligatoriedad documental |
| OD FO Document Version | Versionado y vigencia |
| OD FO Document Cue | KPIs documentales en Role Center |
| OD Tenant Portal User | Registro de usuarios de portal |
| OD Tenant Incident Request | Incidencias enviadas por inquilinos |
| OD FO Portal Document | Publicación portal de documentos FO |
| OD FO Portal Upload Request | Solicitudes de subida desde portal |
| OD FO Portal Acceptance Entry | Evidencia de aceptación documental |
| OD FO Portal Access Log | Auditoría de accesos de portal |
| OD AI Copilot Setup | Configuración de Azure OpenAI |
| OD AI Analysis Entry | Resultado persistido del análisis IA |
| OD AI Action | Acciones de gestión generadas por IA |

---

## 🌍 Arquitectura Global

Las tablas globales de Family Office utilizan:

```al
DataPerCompany = false;
```

Esto permite centralizar la visión patrimonial y documental por encima de la segmentación habitual por compañía en Business Central.

---

## ⚙️ Requisitos

- Microsoft Dynamics 365 Business Central
- OneData Property Management
- Capacidad de adjuntos estándar de Business Central
- Configuración de Azure OpenAI para las funcionalidades Copilot
- Front-end o aplicación consumidora para las APIs del portal del inquilino

---

## 📦 Instalación

1. Publicar la extensión
2. Asignar el permiso `OD FO ADMIN`
3. Configurar el setup de Family Office y las series
4. Configurar familias, entidades y ownership
5. Configurar setup documental, tipos documentales y requisitos
6. Configurar los sync setups si los stakeholders deben propagarse como clientes
7. Configurar endpoint, deployment y API key de Copilot si se usarán las funciones IA
8. Configurar usuarios de portal, URL/base del portal y reglas de publicación si el portal está habilitado

---

## 🧪 Puesta en Marcha Rápida

1. Crear una familia  
2. Añadir miembros  
3. Crear entidades legales  
4. Vincular activos  
5. Definir ownership  
6. Crear stakeholders y relacionarlos con registros operativos  
7. Definir tipos documentales y reglas de obligatoriedad  
8. Adjuntar y clasificar documentos clave para entidades, activos y contratos  
9. Revisar cues documentales para vencimientos y faltas de compliance  
10. Ejecutar análisis Copilot desde un activo para generar insights y acciones  
11. Publicar documentos seleccionados y exponer información al portal cuando aplique  

---

## 📂 Detalle del Módulo Documental

### Ciclo de vida y control
- Estados activos, archivados y vencidos
- Lógica de revisión y próxima revisión
- Recalculo automático de nivel de riesgo según vigencia y calidad del dato
- Objetos de mantenimiento y soporte para procesos programados

### Operaciones de compliance
- Bandeja de documentos obligatorios faltantes
- Comprobación de cobertura de requisitos para entidades, activos y contratos
- Listas de vencidos y próximos a vencer
- Listas de pendientes de revisión y pendientes por calidad

### Gestión de ficheros
- Adjunto principal sobre el documento FO
- Soporte para URL externa
- Conversión/importación desde `Document Attachment`
- Versiones múltiples con selección de versión vigente
- Extensión desde la ficha documental para publicar en portal

---

## 🤖 Detalle del Módulo Copilot

### Experiencia de uso
- Diálogo de prompt embebido en Business Central
- Pregunta manual y acciones guiadas
- Modos de análisis: `Standard`, `Risk`, `Ownership`, `Executive`

### Inteligencia persistida
- Entradas de análisis guardadas con respuesta y contexto
- Scoring de riesgo, rentabilidad y calidad del dato
- Creación automática de acciones de seguimiento con prioridad y estado
- Visibilidad del workload IA y de la exposición al riesgo en dashboard

---

## 🌐 Detalle del Portal del Inquilino

### Modelo de acceso
- Usuarios de portal vinculados a clientes
- Acceso gobernado por estado habilitado y bloqueo
- Filtrado por cliente, contrato y activo relacionado

### APIs disponibles
- Perfil del inquilino
- Contratos del inquilino
- Facturas del inquilino
- Incidencias del inquilino
- Documentos del inquilino
- Usuarios de portal
- Solicitudes de incidencias
- APIs de activos, atributos, equipamiento y notices

### Interacción documental
- Tabla de publicación para documentos visibles en portal
- Fechas de visibilidad, permisos de descarga y aceptación obligatoria
- Flujo de solicitudes de subida documental
- Log de accesos y evidencias de aceptación para auditoría

---

## 👥 Detalle del Módulo Stakeholder

- Diseñado como registro global de partes relacionadas entre compañías
- Vinculado a orígenes de cliente, proveedor y contacto
- Identificación por VAT cuando exista
- Creación o actualización de clientes entre compañías configuradas
- Navegación directa al árbol de ownership y al análisis UBO
- Punto de control útil para contrapartes, propietarios y partes relacionadas

---

## 🚀 Roadmap

- Consolidación financiera global
- Dashboards avanzados en Power BI
- Flujos de gobierno más avanzados
- Simulación de escenarios
- Más inteligencia documental y de compliance asistida por IA
- Orquestación más profunda de stakeholders entre compañías
- Self-service más rico para el portal del inquilino
