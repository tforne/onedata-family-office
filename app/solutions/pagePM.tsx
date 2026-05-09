import Link from 'next/link';

const corePillars = [
  'Gobierno patrimonial y ownership global.',
  'Capa superior sobre Property Management para control y toma de decisiones.',
  'Vision transversal entre activos, companias, familias y stakeholders.',
];

const capabilities = [
  {
    title: 'Estructura familiar',
    points: [
      'Familias y miembros.',
      'Estructuras multigeneracionales.',
      'Mapeo de relaciones y modelo de gobierno.',
    ],
  },
  {
    title: 'Entidades legales',
    points: [
      'Sociedades, holdings, CB y otras estructuras.',
      'Personas fisicas y vinculacion con Business Central.',
      'Maestro global de entidades legales.',
    ],
  },
  {
    title: 'Ownership',
    points: [
      'Participacion sobre activos.',
      'Ownership multi-entidad.',
      'Trazabilidad historica y vision UBO.',
    ],
  },
  {
    title: 'Modelo activo-compania',
    points: [
      'Compania operativa.',
      'Compania contable.',
      'Separacion clara de responsabilidades.',
    ],
  },
  {
    title: 'Gobierno y responsabilidades',
    points: [
      'Roles como decisor, gestor o beneficiario.',
      'Asignacion de responsabilidades.',
      'Base para flujos de decision y accountability.',
    ],
  },
  {
    title: 'Stakeholders globales',
    points: [
      'Registro unificado entre companias.',
      'Datos de contacto, VAT y forma juridica.',
      'Creacion o actualizacion de clientes desde el stakeholder.',
    ],
  },
  {
    title: 'Compliance documental',
    points: [
      'Repositorio global y versionado.',
      'Requisitos documentales por tipo de registro.',
      'Cues y listas de trabajo para vencidos, riesgos y faltantes.',
    ],
  },
  {
    title: 'Copilot de activos',
    points: [
      'Analisis de riesgos, rentabilidad y calidad del dato.',
      'Respuesta estructurada con recomendacion y scores.',
      'Acciones priorizadas generadas por IA.',
    ],
  },
  {
    title: 'Portal del inquilino',
    points: [
      'APIs para perfil, contratos, facturas, incidencias y documentos.',
      'Publicacion documental y aceptaciones.',
      'Solicitudes de subida documental y trazabilidad de accesos.',
    ],
  },
];

const modules = [
  {
    title: 'Gobierno y Ownership',
    description:
      'Modela la estructura patrimonial por encima de la operativa diaria para responder quien controla cada activo, a traves de que entidad y con que rol.',
    bullets: [
      'Familias, miembros y entidades legales.',
      'Participaciones, arbol societario y analisis UBO.',
      'Asignaciones de gobierno y stakeholders decisores.',
    ],
  },
  {
    title: 'Hub de Stakeholders',
    description:
      'Introduce un registro maestro global capaz de representar personas, companias, proveedores, clientes y contactos.',
    bullets: [
      'Ficha global con direccion y comunicacion.',
      'Enlaces a registros de origen por compania.',
      'Deduplicacion por VAT y sincronizacion a companias destino.',
    ],
  },
  {
    title: 'Control Documental',
    description:
      'Aporta un marco de control y cumplimiento para entidades legales, activos y contratos, no solo una lista de archivos.',
    bullets: [
      'Tipos, requisitos, versiones y documento vigente.',
      'Buffers de documentos obligatorios faltantes.',
      'Deteccion de vencidos, pendientes de revision y calidad incompleta.',
    ],
  },
  {
    title: 'Analisis IA de Activos',
    description:
      'El Copilot trabaja sobre datos ya existentes en Business Central y convierte el analisis en evidencia persistida y acciones concretas.',
    bullets: [
      'Analisis de riesgos, descripcion comercial y rentabilidad.',
      'Contexto contractual, financiero, seguros, incidencias y documentos.',
      'Scores persistidos y acciones de seguimiento.',
    ],
  },
  {
    title: 'Portal del Inquilino',
    description:
      'Expone datos controlados de Business Central a experiencias externas con autorizacion, filtrado y trazabilidad.',
    bullets: [
      'Usuarios de portal vinculados a clientes.',
      'APIs de lectura y envio de incidencias.',
      'Publicacion documental con visibilidad, descarga y aceptacion.',
    ],
  },
];

const integrations = [
  'Fixed Real Estate.',
  'Lease Contracts.',
  'Incidents.',
  'Informacion financiera y ledger.',
  'Contactos, clientes y proveedores.',
  'Adjuntos estandar de Business Central.',
  'Azure OpenAI para escenarios Copilot.',
  'APIs para el portal del inquilino.',
];

const setupSteps = [
  'Publicar la extension.',
  'Asignar el permiso `OD FO ADMIN`.',
  'Configurar el setup de Family Office y las series.',
  'Configurar familias, entidades y ownership.',
  'Definir setup documental, tipos y requisitos.',
  'Configurar sync setups para stakeholders si aplica.',
  'Configurar endpoint, deployment y API key de Copilot si se usara IA.',
  'Configurar usuarios y reglas del portal si se habilita acceso externo.',
];

const quickStart = [
  'Crear una familia y anadir miembros.',
  'Crear entidades legales y vincular activos.',
  'Definir ownership y roles de gobierno.',
  'Crear stakeholders y relacionarlos con registros operativos.',
  'Definir tipos documentales y reglas de obligatoriedad.',
  'Adjuntar y clasificar documentos clave.',
  'Revisar cues de vencimientos y faltas de compliance.',
  'Ejecutar analisis Copilot para generar insights y acciones.',
  'Publicar documentos y exponer informacion al portal cuando aplique.',
];

const roadmap = [
  'Consolidacion financiera global.',
  'Dashboards avanzados en Power BI.',
  'Flujos de gobierno mas avanzados.',
  'Simulacion de escenarios.',
  'Mas inteligencia documental y de compliance asistida por IA.',
  'Orquestacion mas profunda de stakeholders entre companias.',
  'Self-service mas rico para el portal del inquilino.',
];

const staticLinks = [
  {
    title: 'Landing Property Management',
    href: '/solutions/property-management',
    description: 'Vista integrada dentro de Next.js para la landing de Property Management.',
  },
  {
    title: 'HTML estatico',
    href: '/solutions/property-management/index.html',
    description: 'Version estatica original servida desde `public/solutions/property-management`.',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#eff6ff,_#ffffff_40%,_#e2e8f0_100%)] text-slate-950">
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="sticky top-0 z-30 mb-8 rounded-[28px] border border-white/70 bg-white/85 px-6 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                OF
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  OneData Family Office
                </p>
                <h1 className="text-lg font-semibold text-slate-950">
                  Documentacion funcional integrada en la landing
                </h1>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <a href="#vision" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Vision
              </a>
              <a href="#capabilities" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Capacidades
              </a>
              <a href="#modules" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Modulos
              </a>
              <a href="#setup" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Puesta en marcha
              </a>
            </nav>
          </div>
        </header>

        <section
          id="vision"
          className="overflow-hidden rounded-[32px] bg-slate-950 px-8 py-14 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Concepto base
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Property Management ejecuta la operativa. Family Office controla la propiedad y la toma de decisiones.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                OneData Family Office es una extension para Microsoft Dynamics 365 Business Central que incorpora una
                capa global de gobierno, control patrimonial y ownership. Complementa a OneData Property Management
                transformando la informacion operativa en control estrategico del patrimonio.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {corePillars.map((pillar) => (
                  <article key={pillar} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="leading-7 text-slate-200">{pillar}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Arquitectura</p>
              <pre className="mt-6 overflow-x-auto rounded-3xl bg-slate-900 p-6 text-sm leading-7 text-slate-200">
                {`┌────────────────────────────────────┐
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
└────────────────────────────────────┘`}
              </pre>
              <div className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-50">
                Las tablas globales se apoyan en `DataPerCompany = false;` para centralizar la vision patrimonial y
                documental por encima de la segmentacion por compania.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="capabilities">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Funcionalidades principales</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Toda la vision funcional de Family Office, integrada en una sola pagina de soluciones
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Esta vista resume la capa funcional completa: estructura familiar, entidades legales, compliance
              documental, Copilot y portal del inquilino.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <h3 className="text-xl font-semibold text-slate-950">{capability.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {capability.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-gradient-to-br from-sky-50 via-white to-slate-100 px-8 py-16" id="modules">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Modulos funcionales</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Cinco bloques para gobierno, operativa extendida y acceso externo
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <article key={module.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">{module.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{module.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {module.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[28px] bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Integracion</p>
              <h2 className="mt-4 text-3xl font-semibold">Conectada con Property Management y Business Central</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {integrations.map((integration) => (
                  <li key={integration}>{integration}</li>
                ))}
              </ul>
              <p className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                Sin duplicidad de datos y con una capa superior de control patrimonial para escenarios reales de Family
                Office.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Accesos relacionados</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Landings y vistas disponibles</h2>
              <div className="mt-6 grid gap-4">
                {staticLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-3xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="text-lg font-semibold text-slate-950">{link.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{link.description}</p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-[32px] bg-slate-950 px-8 py-16 text-white" id="setup">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Instalacion</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Requisitos y puesta en marcha rapida
              </h2>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-white">Requisitos</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  <li>Microsoft Dynamics 365 Business Central.</li>
                  <li>OneData Property Management.</li>
                  <li>Capacidad de adjuntos estandar.</li>
                  <li>Configuracion de Azure OpenAI para Copilot.</li>
                  <li>Front-end o app consumidora para las APIs del portal.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Instalacion</p>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {setupSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Quick start</p>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {quickStart.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Roadmap</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Evolucion prevista del producto
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roadmap.map((item) => (
                <article key={item} className="rounded-3xl bg-slate-50 p-5">
                  <p className="leading-7 text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
