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
    title: 'OneData Property Management',
    href: '/solutions/property-management/index.html',
    description: 'Version estatica original servida desde `public/solutions/property-management`.',
  },
  {
    title: 'OneData Base',
    href: '/solutions/base',
    description: 'Acceso a la landing de OneData Base con foco en gestion fiscal e integracion en Business Central.',
  },
];

function CapabilityIcon({ title }: { title: string }) {
  const icons: Record<string, JSX.Element> = {
    'Estructura familiar': (
      <path
        d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4.5 18.5c.6-2.1 2.3-3.5 4.5-3.5s3.9 1.4 4.5 3.5M12.5 18.5c.5-1.6 1.9-2.7 3.5-2.7 1.6 0 3 1.1 3.5 2.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Entidades legales': (
      <path
        d="M5.5 19.5h13M7 19.5V9.5m5 10V9.5m5 10V9.5M4.5 9.5h15L12 5 4.5 9.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    Ownership: (
      <path
        d="M12 5.5 6.5 8.5v4.2c0 3.2 2.2 5.5 5.5 6.8 3.3-1.3 5.5-3.6 5.5-6.8V8.5L12 5.5Zm0 4v4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Modelo activo-compania': (
      <path
        d="M7 7.5h4v4H7Zm6 5h4v4h-4Zm-6 1h4m2-4h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Gobierno y responsabilidades': (
      <path
        d="M12 5.5v4m0 0 4 2m-4-2-4 2m-1 6h10M8.5 17.5V15m7 2.5V15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Stakeholders globales': (
      <path
        d="M12 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-5 10c.6-1.8 2.5-3 5-3s4.4 1.2 5 3M5 9.5h1.5M17.5 9.5H19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Compliance documental': (
      <path
        d="M8 5.5h6l3 3v10H8v-13Zm6 0v3h3M10 13l1.4 1.4 3.6-3.6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Copilot de activos': (
      <path
        d="M12 5.5 13.5 9l3.5.3-2.7 2.4.8 3.5-3.1-1.9-3.1 1.9.8-3.5-2.7-2.4 3.5-.3L12 5.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
    'Portal del inquilino': (
      <path
        d="M7.5 7.5h9a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm2 10h5m-2.5-3.5V11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    ),
  };

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        {icons[title]}
      </svg>
    </div>
  );
}

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
                OneData Family Office aporta gobierno patrimonial, ownership global y control para una mejor toma de
                decisiones.
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
              <div className="mt-6 rounded-3xl bg-slate-900 p-6">
                <div className="mx-auto flex max-w-md flex-col items-center font-mono text-base text-slate-200">
                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-lg font-semibold tracking-[0.14em] text-white">FAMILY OFFICE</p>
                    <p className="mt-3 text-[1.02rem] leading-7 text-slate-300">Gobierno • Ownership • Control</p>
                  </div>

                  <div className="flex h-14 flex-col items-center justify-center">
                    <div className="h-8 w-px bg-slate-200" />
                    <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-slate-200" />
                  </div>

                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-lg font-semibold tracking-[0.11em] text-white">PROPERTY MANAGEMENT</p>
                    <p className="mt-3 text-[1.02rem] leading-7 text-slate-300">Contratos • Incidencias • Ledger</p>
                  </div>

                  <div className="flex h-14 flex-col items-center justify-center">
                    <div className="h-8 w-px bg-slate-200" />
                    <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-slate-200" />
                  </div>

                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-lg font-semibold tracking-[0.14em] text-white">ACTIVOS</p>
                    <p className="mt-3 text-[1.02rem] leading-7 text-slate-300">Core de Inmuebles y Patrimonio</p>
                  </div>
                </div>
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
                <div className="flex items-start gap-4">
                  <CapabilityIcon title={capability.title} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{capability.title}</h3>
                  </div>
                </div>
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
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Instalacion</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Requisitos y puesta en marcha rapida
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                La implantacion se apoya en un stack conocido y en una capa funcional preparada para gobernar
                estructuras patrimoniales complejas sin romper la operativa existente.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Base operativa</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Business Central y Property Management como plataforma de trabajo sobre la que se eleva Family
                    Office.
                  </p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Capas adicionales</p>
                  <p className="mt-3 leading-7 text-slate-300">
                    Documentacion, IA y portal externo para reforzar control, analisis y colaboracion con terceros.
                  </p>
                </article>
              </div>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                <p className="text-lg font-semibold text-white">Requisitos</p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                  <li className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                    Microsoft Dynamics 365 Business Central.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                    OneData Property Management.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                    Capacidad de adjuntos estandar.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                    Configuracion de Azure OpenAI para Copilot.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                    Front-end o app consumidora para las APIs del portal.
                  </li>
                </ul>
              </article>

              <article className="rounded-[28px] border border-cyan-400/20 bg-cyan-400/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Enfoque recomendado</p>
                <p className="mt-3 leading-7 text-cyan-50">
                  Empezar por ownership, entidades legales y compliance permite desplegar una primera capa de control
                  con impacto visible desde el inicio.
                </p>
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

        <section className="pb-8 pt-4" id="contacto">
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#020617_100%)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100/90">Solicitar demo</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Solicita una demo centrada en el gobierno real de tu patrimonio.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50/90">
                  Podemos orientar la demostracion a ownership, entidades legales, compliance documental, control
                  global de stakeholders y analisis asistido para toma de decisiones.
                </p>
              </div>

              <form
                action="mailto:contacto@onedata.one"
                method="post"
                encType="text/plain"
                className="grid gap-4"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <textarea
                  name="necesidad"
                  placeholder="Cuentanos brevemente que necesitas"
                  rows={5}
                  className="min-h-[150px] rounded-[24px] border border-white/20 bg-white px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-white focus:ring-2 focus:ring-white/30"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="submit"
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-slate-950 bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                  >
                    Enviar solicitud
                  </button>
                  <a
                    href="#capabilities"
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/40 bg-transparent px-6 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Revisar funcionalidades
                  </a>
                </div>
              </form>
            </div>
          </div>

          <p className="px-2 pt-8 text-center text-sm text-slate-500">
            © 2026 OneData · Family Office para Microsoft Dynamics 365 Business Central
          </p>
        </section>
      </main>
    </div>
  );
}
