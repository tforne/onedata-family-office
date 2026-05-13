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
    title: 'Analisis IA de Activos y de Incidencias',
    description:
      'Una capa de IA que aprovecha la informacion que ya existe en Business Central para ayudarte a entender mejor cada activo y gestionar incidencias con mas criterio, mas rapidez y mas trazabilidad.',
    bullets: [
      'Analiza cada activo para detectar riesgos, entender su rentabilidad y dar mas visibilidad sobre la calidad del dato.',
      'Revisa peticiones de incidencia con el contexto del activo, el contrato, los seguros, el equipamiento y la documentacion disponible.',
      'Propone decisiones, acciones de seguimiento y respuestas orientativas, dejando todo guardado en Business Central para su trazabilidad.',
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
];

const roadmap = [
  {
    phase: 'Ahora',
    description: 'Capacidades con foco en control visible e impacto temprano sobre el gobierno patrimonial.',
    items: [
      'Consolidacion financiera global.',
      'Flujos de gobierno mas avanzados.',
    ],
  },
  {
    phase: 'Siguiente',
    description: 'Capas de analisis y orquestacion para ampliar la toma de decisiones basada en datos.',
    items: [
      'Dashboards avanzados en Power BI.',
      'Mas inteligencia documental y de compliance asistida por IA.',
      'Orquestacion mas profunda de stakeholders entre companias.',
    ],
  },
  {
    phase: 'Mas adelante',
    description: 'Escenarios de madurez orientados a simulacion, autonomia y experiencia extendida.',
    items: [
      'Simulacion de escenarios.',
      'Self-service mas rico para el portal del inquilino.',
    ],
  },
];

const staticLinks = [
  {
    title: 'OneData Property Management',
    href: '/solutions/property-management/index.html',
    description: 'Vista base de Property Management servida desde la solucion estatica actual.',
    label: 'Base actual',
  },
  {
    title: 'OneData Base',
    href: '/solutions/base',
    description: 'Landing complementaria con foco en gestion fiscal e integracion con Business Central.',
    label: 'Vista relacionada',
  },
];

const sectionEyebrowClass =
  'text-sm font-semibold uppercase tracking-[0.22em] text-sky-700';
const sectionTitleClass =
  'mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl';
const sectionBodyClass = 'mt-4 text-lg leading-8 text-slate-700';
const whiteCardClass =
  'rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] shadow-[0_18px_50px_rgba(15,23,42,0.05)]';

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
    <div className="flex h-12 w-12 flex-none items-start justify-center pt-1 text-slate-950">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        {icons[title]}
      </svg>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe_0%,_#f8fbff_26%,_#ffffff_54%,_#e2e8f0_100%)] text-slate-950">
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <header className="animate-fade-up sticky top-0 z-30 mb-8 rounded-[30px] border border-white/80 bg-white/88 px-6 py-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#1d4ed8_100%)] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.22)]">
                OF
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  OneData Family Office
                </p>
                <h1 className="text-xl font-semibold tracking-tight text-slate-950">
                  Documentacion funcional integrada en la landing
                </h1>
              </div>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <a href="#vision" className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-200 hover:bg-white hover:text-slate-950">
                Vision
              </a>
              <a href="#capabilities" className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-200 hover:bg-white hover:text-slate-950">
                Capacidades
              </a>
              <a href="#modules" className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-200 hover:bg-white hover:text-slate-950">
                Modulos
              </a>
              <a href="#setup" className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-200 hover:bg-white hover:text-slate-950">
                Puesta en marcha
              </a>
            </nav>
          </div>
        </header>

        <section
          id="vision"
          className="animate-fade-up relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,_#020617_0%,_#0f172a_60%,_#111c33_100%)] px-8 py-14 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] [animation-delay:80ms]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_26%)]" />
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative">
              <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Concepto base
              </p>
              <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
                OneData Family Office aporta gobierno patrimonial, ownership global y control para una mejor toma de
                decisiones.
              </h2>
              <p className="mt-6 max-w-3xl text-[1.08rem] leading-8 text-slate-300">
                OneData Family Office es una extension para Microsoft Dynamics 365 Business Central que incorpora una
                capa global de gobierno, control patrimonial y ownership. Complementa a OneData Property Management
                transformando la informacion operativa en control estrategico del patrimonio.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {corePillars.map((pillar) => (
                  <article key={pillar} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm">
                    <div className="mb-4 h-1 w-12 rounded-full bg-cyan-300" />
                    <p className="leading-7 text-slate-200">{pillar}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Arquitectura</p>
              <div className="mt-6 rounded-3xl border border-white/5 bg-[linear-gradient(180deg,_rgba(17,24,39,0.9)_0%,_rgba(15,23,42,0.95)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="mb-5 flex items-center justify-between gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                    Capa de control
                  </span>
                  <span className="hidden sm:inline">Gobierno sobre la operativa</span>
                </div>
                <div className="mx-auto flex max-w-md flex-col items-center font-mono text-[1.05rem] text-slate-200">
                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[0_18px_40px_rgba(2,6,23,0.22),inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(2,6,23,0.28),inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[1.2rem] font-semibold tracking-[0.14em] text-white">FAMILY OFFICE</p>
                    <p className="mt-3 text-[1.08rem] leading-7 text-slate-300">Gobierno • Ownership • Control</p>
                  </div>

                  <div className="flex h-14 flex-col items-center justify-center">
                    <div className="h-8 w-px bg-gradient-to-b from-cyan-200 to-slate-200" />
                    <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-slate-200" />
                  </div>

                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[0_18px_40px_rgba(2,6,23,0.22),inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(2,6,23,0.28),inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[1.2rem] font-semibold tracking-[0.11em] text-white">PROPERTY MANAGEMENT</p>
                    <p className="mt-3 text-[1.08rem] leading-7 text-slate-300">Contratos • Incidencias • Ledger</p>
                  </div>

                  <div className="flex h-14 flex-col items-center justify-center">
                    <div className="h-8 w-px bg-gradient-to-b from-cyan-200 to-slate-200" />
                    <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-slate-200" />
                  </div>

                  <div className="w-full rounded-[20px] border border-slate-200 px-6 py-5 text-center shadow-[0_18px_40px_rgba(2,6,23,0.22),inset_0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(2,6,23,0.28),inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <p className="text-[1.2rem] font-semibold tracking-[0.08em] text-white">MICROSOFT BUSINESS CENTRAL</p>
                    <p className="mt-3 text-[1.08rem] leading-7 text-slate-300">Base operativa y financiera de la solucion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-up py-16 [animation-delay:120ms]" id="capabilities">
          <div className="max-w-3xl">
            <p className={sectionEyebrowClass}>Funcionalidades principales</p>
            <h2 className={sectionTitleClass}>
              Toda la vision funcional de Family Office, integrada en una sola pagina de soluciones
            </h2>
            <p className={sectionBodyClass}>
              Esta vista resume la capa funcional completa: estructura familiar, entidades legales, compliance
              documental, Copilot y portal del inquilino.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className={`group p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${whiteCardClass}`}
              >
                <div className="flex items-start gap-4">
                  <CapabilityIcon title={capability.title} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{capability.title}</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-950/80 transition group-hover:bg-sky-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up rounded-[34px] border border-white/70 bg-gradient-to-br from-sky-50 via-white to-slate-100 px-8 py-16 shadow-[0_20px_70px_rgba(15,23,42,0.05)] [animation-delay:160ms]" id="modules">
          <div className="max-w-3xl">
            <p className={sectionEyebrowClass}>Modulos funcionales</p>
            <h2 className={sectionTitleClass}>
              Cinco bloques para gobierno, operativa extendida y acceso externo
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {modules.map((module, index) => (
              <article
                key={module.title}
                className={`p-7 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${whiteCardClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Bloque {index + 1}
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{module.title}</h3>
                <p className="mt-4 leading-8 text-slate-700">{module.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up py-16 [animation-delay:200ms]">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[28px] bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Integracion</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Conectada con Property Management y Business Central</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                La capa Family Office aprovecha la base operativa existente y anade control patrimonial sin duplicar
                procesos ni dispersar la informacion.
              </p>
              <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
                {integrations.map((integration) => (
                  <li key={integration} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {integration}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                Sin duplicidad de datos y con una capa superior de control patrimonial para escenarios reales de Family
                Office.
              </p>
            </article>

            <article className={`p-8 ${whiteCardClass}`}>
              <p className={sectionEyebrowClass}>Accesos relacionados</p>
              <h2 className={sectionTitleClass}>Landings y vistas disponibles</h2>
              <div className="mt-6 grid gap-4">
                {staticLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] p-5 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-2 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                          {link.label}
                        </div>
                        <div className="text-lg font-semibold text-slate-950">{link.title}</div>
                      </div>
                      <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-700">→</span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{link.description}</p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="animate-fade-up rounded-[32px] bg-slate-950 px-8 py-16 text-white [animation-delay:240ms]" id="setup">
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

        <section className="animate-fade-up py-16 [animation-delay:280ms]">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className={sectionEyebrowClass}>Roadmap</p>
                <h2 className={sectionTitleClass}>
                  Evolucion prevista del producto
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-700">
                  La evolucion del producto se organiza por horizontes para visualizar mejor que capacidades priorizan
                  impacto inmediato, expansion analitica y madurez futura.
                </p>

                <div className="mt-8 rounded-[28px] border border-sky-100 bg-sky-50/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Direccion del producto</p>
                  <p className="mt-3 leading-7 text-slate-700">
                    El roadmap prioriza consolidacion, mejor gobierno y una capa de analisis cada vez mas accionable
                    para Family Office.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-3">
                {roadmap.map((group) => (
                  <article
                    key={group.phase}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">
                        {group.phase}
                      </div>
                      <div className="h-px flex-1 bg-slate-200" />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{group.description}</p>
                    <div className="mt-5 space-y-3">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-up pb-8 pt-4 [animation-delay:320ms]" id="contacto">
          <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#020617_100%)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.1),_transparent_26%)]" />
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100/90">Solicitar demo</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Solicita una demo centrada en el gobierno real de tu patrimonio.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-sky-50/90">
                  Podemos orientar la demostracion a ownership, entidades legales, compliance documental, control
                  global de stakeholders y analisis asistido para toma de decisiones.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-sky-100/90">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Ownership</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Compliance</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">IA aplicada</span>
                </div>
              </div>

              <form
                action="mailto:contacto@onedata.one"
                method="post"
                encType="text/plain"
                className="relative rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:-translate-y-0.5 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Empresa"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:-translate-y-0.5 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:-translate-y-0.5 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <div className="mt-3 sm:col-span-3">
                  <textarea
                    name="necesidad"
                    placeholder="Cuentanos brevemente que necesitas"
                    rows={5}
                    className="min-h-[150px] w-full rounded-[24px] border border-white/20 bg-white px-4 py-4 text-slate-950 outline-none transition placeholder:text-slate-500 focus:-translate-y-0.5 focus:border-white focus:ring-2 focus:ring-white/30"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="submit"
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-slate-950 bg-white px-6 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Enviar solicitud
                  </button>
                  <a
                    href="#capabilities"
                    className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/40 bg-transparent px-6 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
