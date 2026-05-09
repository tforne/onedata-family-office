const coreCapabilities = [
  {
    title: 'Estructura familiar y gobierno',
    description:
      'Modela familias, miembros, ramas multigeneracionales y roles de decision para gobernar activos y entidades desde una sola capa.',
  },
  {
    title: 'Entidades legales y ownership',
    description:
      'Gestiona sociedades, holdings, personas fisicas y participaciones historicas con vision transversal del arbol societario y UBO.',
  },
  {
    title: 'Modelo activo-compania',
    description:
      'Relaciona compania operativa y compania contable para separar responsabilidades sin perder la vista patrimonial global.',
  },
  {
    title: 'Stakeholders globales',
    description:
      'Unifica personas y entidades en un maestro compartido entre companias con enlaces de origen, VAT y navegacion a ownership.',
  },
  {
    title: 'Control documental y compliance',
    description:
      'Centraliza documentos, requisitos, revisiones, vencimientos, versionado y listas de trabajo para detectar huecos de cumplimiento.',
  },
  {
    title: 'Copilot y portal del inquilino',
    description:
      'Analiza activos con IA, genera acciones priorizadas y expone contratos, incidencias y documentos al portal de forma controlada.',
  },
];

const moduleCards = [
  {
    eyebrow: 'Gobierno y ownership',
    title: 'Control sobre la propiedad real',
    points: [
      'Familias, miembros, entidades legales y participaciones.',
      'Roles como decisor, gestor o beneficiario.',
      'Arbol societario y analisis UBO.',
    ],
  },
  {
    eyebrow: 'Hub de stakeholders',
    title: 'Registro global compartido entre companias',
    points: [
      'Maestro unificado para clientes, proveedores, contactos y personas.',
      'Sincronizacion y deduplicacion por VAT cuando aplica.',
      'Punto comun entre estructura legal y operativa.',
    ],
  },
  {
    eyebrow: 'Capa documental',
    title: 'Compliance con trazabilidad real',
    points: [
      'Tipos documentales, confidencialidad, riesgo y vigencia.',
      'Deteccion de faltantes, vencidos y pendientes de revision.',
      'FactBoxes, cues y publicacion opcional al portal.',
    ],
  },
  {
    eyebrow: 'Analisis IA',
    title: 'Copilot para riesgos y rentabilidad',
    points: [
      'Prompts guiados sobre contratos, incidencias, seguros y valoraciones.',
      'Resumen ejecutivo, recomendacion y scoring persistido.',
      'Creacion automatica de acciones de seguimiento.',
    ],
  },
  {
    eyebrow: 'Portal del inquilino',
    title: 'Acceso externo con datos filtrados',
    points: [
      'Perfil, contratos, facturas, incidencias y documentos.',
      'Solicitudes de incidencias y subida documental.',
      'Trazabilidad de accesos, descargas y aceptaciones.',
    ],
  },
];

const dataModelRows = [
  ['OD FO Family', 'Estructura familiar global'],
  ['OD FO Legal Entity', 'Maestro de entidades legales'],
  ['OD FO Asset Ownership', 'Ownership y participaciones sobre activos'],
  ['OD FO Stakeholder', 'Registro global de stakeholders'],
  ['OD FO Document', 'Registro documental central'],
  ['OD FO Document Requirement', 'Politica de obligatoriedad documental'],
  ['OD Tenant Portal User', 'Usuarios del portal del inquilino'],
  ['OD AI Analysis Entry', 'Resultados persistidos del analisis IA'],
];

const rolloutSteps = [
  'Publicar la extension y asignar el permiso `OD FO ADMIN`.',
  'Configurar Family Office, series, familias, entidades y ownership.',
  'Definir setup documental, tipos y requisitos de cumplimiento.',
  'Configurar sync de stakeholders y Azure OpenAI si se usara Copilot.',
  'Habilitar portal, usuarios y reglas de publicacion cuando aplique.',
];

export default function BaseSolutionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 py-4 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-700 text-lg font-bold text-white">
                OF
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  OneData Family Office
                </p>
                <p className="text-base font-semibold">Gobierno patrimonial sobre Business Central</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <a href="#capabilities" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Capacidades
              </a>
              <a href="#modules" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Modulos
              </a>
              <a href="#architecture" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Arquitectura
              </a>
              <a href="#data-model" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Modelo de datos
              </a>
              <a href="#setup" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Puesta en marcha
              </a>
            </nav>
          </div>
        </header>

        <section className="overflow-hidden rounded-[28px] bg-gradient-to-r from-slate-100 via-white to-sky-50 px-6 py-16 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-700" />
                Extension para Microsoft Dynamics 365 Business Central
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                OneData Family Office convierte la operativa en control patrimonial
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                OneData Family Office incorpora una capa global de gobierno, control patrimonial
                y ownership sobre Business Central. Complementa a OneData Property Management
                para que la informacion operativa se transforme en decisiones estrategicas.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Concepto base
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-800">
                    Property Management ejecuta la operativa.
                    <br />
                    Family Office controla la propiedad y la toma de decisiones.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Que resuelve
                  </p>
                  <p className="mt-4 text-slate-700 leading-7">
                    Da una vision transversal entre familias, entidades, activos, documentos y
                    stakeholders sin duplicar datos ni perder el contexto por compania.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">Arquitectura funcional</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Family Office</p>
                    <p className="mt-3 text-slate-700">
                      Gobierno, ownership, compliance y control ejecutivo.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Property Management</p>
                    <p className="mt-3 text-slate-700">
                      Contratos, incidencias, ledger y operativa recurrente.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Activos</p>
                    <p className="mt-3 text-slate-700">
                      Core de inmuebles y patrimonio sobre el que se construye la vista global.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">KPIs ejecutivos</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    Completitud de ownership y activos sin compania asignada.
                  </li>
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    Salud documental, riesgos de compliance y vencimientos.
                  </li>
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    Senales de riesgo, rentabilidad y calidad del dato asistidas por IA.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="capabilities">
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Capacidades
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Una capa global para patrimonio, ownership y compliance
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                La solucion combina estructura legal, control documental, analitica y acceso
                externo para responder preguntas de gobierno patrimonial dentro del propio
                Business Central.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {coreCapabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{capability.title}</h3>
                  <p className="mt-4 text-slate-700">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="modules">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Modulos funcionales
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Desde el ownership hasta el portal del inquilino
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                El producto esta organizado en bloques que conectan la estructura patrimonial con
                la operativa diaria, el cumplimiento documental y la exposicion de datos a terceros.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {moduleCards.map((module) => (
                <article
                  key={module.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {module.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">{module.title}</h3>
                  <ul className="mt-4 space-y-3 text-slate-700 leading-7">
                    {module.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white" id="architecture">
          <div className="max-w-3xl space-y-6 px-4 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Arquitectura global
            </p>
            <h2 className="text-3xl font-semibold">Vision patrimonial por encima de la compania</h2>
            <p className="text-lg leading-8 text-slate-300">
              Las tablas globales del Family Office usan `DataPerCompany = false;` para centralizar
              patrimonio, stakeholders y documentos por encima de la segmentacion habitual de
              Business Central.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Integracion
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Sin duplicidad de datos</h3>
              <p className="mt-4 text-slate-300">
                Se integra con activos, contratos, incidencias, ledger, contactos, clientes,
                proveedores y adjuntos estandar de Business Central.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Copilot
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Azure OpenAI como capa analitica</h3>
              <p className="mt-4 text-slate-300">
                El analisis de activos utiliza contexto contractual, financiero, documental y de
                incidencias para producir recomendaciones accionables.
              </p>
            </article>
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Portal
              </p>
              <h3 className="mt-4 text-2xl font-semibold">APIs para experiencias externas</h3>
              <p className="mt-4 text-slate-300">
                Expone datos filtrados por cliente, contrato y activo para un portal del inquilino
                con autorizacion y trazabilidad.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16" id="data-model">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Modelo de datos
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Tablas clave para una vista global
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                El modelo combina gobierno, documentos, portal e inteligencia artificial en una
                estructura compartida que conecta companias, activos y stakeholders.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-700">Tabla</th>
                    <th className="px-6 py-4 font-semibold text-slate-700">Descripcion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {dataModelRows.map(([tableName, description]) => (
                    <tr key={tableName}>
                      <td className="px-6 py-4 font-medium text-slate-950">{tableName}</td>
                      <td className="px-6 py-4 text-slate-700">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white" id="setup">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Requisitos
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Base tecnica para desplegar la solucion</h2>
              <ul className="mt-6 space-y-4 text-slate-300 leading-7">
                <li>Microsoft Dynamics 365 Business Central.</li>
                <li>OneData Property Management como capa operativa complementaria.</li>
                <li>Adjuntos estandar de Business Central para conversion documental.</li>
                <li>Azure OpenAI si se activan escenarios Copilot.</li>
                <li>Front-end o app consumidora para las APIs del portal.</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="text-xl font-semibold text-white">Instalacion y configuracion</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {rolloutSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="text-xl font-semibold text-white">Puesta en marcha rapida</h3>
                <p className="mt-4 text-slate-300 leading-7">
                  El flujo base parte de crear familia, miembros, entidades y ownership; despues se
                  conectan stakeholders, reglas documentales, analisis Copilot y publicacion en
                  portal segun el caso de uso.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white px-6 py-12 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Contacto
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Quieres ver OneData Family Office en accion?
              </h2>
            </div>
            <a
              href="mailto:contacto@onedata.one"
              className="inline-flex items-center justify-center rounded-3xl bg-sky-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-800"
            >
              Solicitar demo
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
