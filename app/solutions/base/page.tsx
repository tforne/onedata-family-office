const capabilities = [
  {
    title: 'Gestion personalizada de tablas y documentos',
    description:
      'Modifica tablas, estructuras, paginas y reportes para alinear Business Central con los requisitos fiscales y operativos del negocio.',
  },
  {
    title: 'Importacion inteligente de datos contables',
    description:
      'Automatiza movimientos contables, saldos iniciales de clientes y proveedores para reducir errores y acelerar la puesta en marcha.',
  },
  {
    title: 'Optimizacion de procesos administrativos',
    description:
      'Integra datos fiscales y financieros en un flujo de trabajo mas rapido, consistente y facil de mantener.',
  },
  {
    title: 'Sincronizacion avanzada multiempresa',
    description:
      'Replica datos entre multiples empresas de Business Central con configuracion controlada y consistencia transversal.',
  },
];

const toolCards = [
  {
    eyebrow: 'Tool 0',
    title: 'Modify Tables',
    points: [
      'Ajustar tablas y estructuras segun las necesidades del negocio.',
      'Modificar paginas y reportes para facilitar el analisis.',
      'Personalizar documentos clave para procesos internos.',
    ],
  },
  {
    eyebrow: 'Tool 1',
    title: 'Importar movimientos historicos',
    points: [
      'Importar movimientos contables directamente al sistema.',
      'Cargar saldos iniciales de clientes y proveedores.',
      'Automatizar la integracion de datos financieros.',
    ],
  },
  {
    eyebrow: 'Tool 2',
    title: 'Importar Facturas de Venta',
    points: [
      'Carga masiva desde Excel o CSV.',
      'Validacion automatica de clientes, productos y precios.',
      'Asignacion contable e impuestos segun configuracion predefinida.',
      'Generacion de documentos listos para envio.',
    ],
  },
  {
    eyebrow: 'Tool 3',
    title: 'Importar Nominas',
    points: [
      'Carga agil y segura de archivos de nominas.',
      'Registro de pagos, deducciones y contribuciones.',
      'Asignacion automatizada a cuentas contables.',
      'Validacion para evitar inconsistencias en registros.',
    ],
  },
];

const irpfModels = [
  {
    model: 'Modelo 111',
    description: 'Declaracion trimestral de retenciones practicadas a trabajadores, profesionales o arrendadores.',
    deadline: '1 al 31 del mes del trimestre siguiente',
    supported: 'Si',
  },
  {
    model: 'Modelo 190',
    description: 'Resumen anual de retenciones e ingresos a cuenta del IRPF.',
    deadline: '1 al 31 de enero del ano siguiente',
    supported: 'Si',
  },
  {
    model: 'Modelo 180',
    description: 'Resumen anual de retenciones ligadas a alquileres de inmuebles urbanos.',
    deadline: '1 al 31 de enero del ano siguiente',
    supported: 'v 5.0',
  },
  {
    model: 'Modelo 296',
    description: 'Declaracion anual sobre rendimientos del capital mobiliario y otras rentas.',
    deadline: '1 al 31 de enero del ano siguiente',
    supported: 'No',
  },
  {
    model: 'Modelo 347',
    description: 'Declaracion anual de operaciones con terceros superiores a 3.005,06 EUR.',
    deadline: 'Durante febrero del ano siguiente',
    supported: 'Si',
  },
  {
    model: 'Modelo D-100',
    description: 'Declaracion anual del IRPF de personas fisicas.',
    deadline: '2 de abril al 30 de junio del ano siguiente',
    supported: 'No',
  },
];

const syncFeatures = [
  'Replicacion automatica en tiempo real o programada entre empresas fuente y destino.',
  'Mapeo flexible para tablas y campos especificos mediante Integration Table Mapping y Field Mapping.',
  'Interfaz propia OneData para configuracion, ejecucion y monitorizacion.',
  'Registro de logs para auditoria y resolucion de incidencias.',
  'Soporte para multiples companias destino en grupos empresariales complejos.',
];

const syncSteps = [
  'Crear un registro en `OD Sync Setup` con codigo, mapping name y table ID.',
  'Habilitar la configuracion y anadir las empresas destino.',
  'Ejecutar la sincronizacion manualmente o definir triggers automaticos.',
  'Monitorear progreso y logs desde las paginas de administracion.',
];

const setupCards = [
  {
    title: 'Configuracion asistida',
    description:
      'El asistente de Business Central guia los parametros basicos para adaptar One Data Fiscal a ventas, compras y contabilidad.',
  },
  {
    title: 'Configuracion avanzada',
    description:
      'Permite ajustar periodos, ano fiscal, grupos de IRPF, integraciones externas, formatos documentales y alertas de vencimiento.',
  },
];

const licensePoints = [
  'El codigo fuente no es accesible ni descargable desde Business Central porque `allowDownloadingSource` esta en `False`.',
  'El objetivo es proteger la propiedad intelectual, evitar accesos no autorizados y preservar la estabilidad de la solucion.',
  'El soporte y mantenimiento se realizan exclusivamente por el equipo autorizado.',
  'Los datos empresariales del cliente no se ven afectados por esta restriccion de codigo fuente.',
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
                  One Data Fiscal
                </p>
                <p className="text-base font-semibold">Gestion fiscal integral en Business Central</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <a href="#capabilities" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Capacidades
              </a>
              <a href="#tools" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Herramientas
              </a>
              <a href="#irpf" className="rounded-full px-4 py-2 hover:bg-slate-100">
                IRPF
              </a>
              <a href="#sync" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Multiempresa
              </a>
              <a href="#setup" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Configuracion
              </a>
              <a href="#license" className="rounded-full px-4 py-2 hover:bg-slate-100">
                Licencia
              </a>
            </nav>
          </div>
        </header>

        <section className="overflow-hidden rounded-[28px] bg-gradient-to-r from-slate-100 via-white to-slate-100 px-6 py-16 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-700" />
                Extension para Microsoft Business Central
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                One Data Fiscal para soporte y gestion fiscal integral
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                One Data Fiscal es una extension avanzada disenada para maximizar la eficiencia en la
                gestion fiscal y contable dentro de Microsoft Business Central. Ayuda a transformar
                los procesos fiscales en una ventaja competitiva con precision, agilidad y
                personalizacion.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Beneficios clave
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                    <li>Ahorro de tiempo y recursos en tareas repetitivas.</li>
                    <li>Precision garantizada y menos errores humanos.</li>
                    <li>Adaptabilidad total a cada empresa.</li>
                    <li>Integracion multiempresa para grupos societarios.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Por que elegirlo
                  </p>
                  <p className="mt-4 text-slate-700 leading-7">
                    Optimiza desde la configuracion interna hasta la integracion de datos
                    financieros y la sincronizacion entre empresas, aprovechando al maximo el
                    potencial de Business Central.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">Vision funcional</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Fiscalidad</p>
                    <p className="mt-3 text-slate-700">
                      Configuracion de estructuras, documentos y modelos fiscales.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Importacion</p>
                    <p className="mt-3 text-slate-700">
                      Carga masiva y validada de datos contables, facturas y nominas.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Multiempresa</p>
                    <p className="mt-3 text-slate-700">
                      Replicacion controlada de informacion entre companias relacionadas.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Cumplimiento</p>
                    <p className="mt-3 text-slate-700">
                      Soporte de modelos IRPF y configuracion para procesos reglados.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">Transforma la operativa fiscal</h3>
                <p className="mt-4 text-slate-700 leading-7">
                  La solucion centraliza informacion fiscal, acelera los flujos administrativos y
                  ayuda a mantener consistencia entre procesos, empresas y periodos de declaracion.
                </p>
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
                Que ofrece One Data Fiscal
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Una extension orientada a personalizar, importar, sincronizar y controlar la
                informacion fiscal dentro de Microsoft Business Central.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {capabilities.map((capability) => (
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

        <section className="bg-slate-900 py-16 text-white" id="tools">
          <div className="max-w-3xl space-y-6 px-4 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Herramientas de soporte
            </p>
            <h2 className="text-3xl font-semibold">
              Soluciones para personalizar y optimizar Business Central
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Estas herramientas cubren modificacion estructural, importacion de datos y
              automatizacion de procesos administrativos clave.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {toolCards.map((tool) => (
              <article key={tool.title} className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {tool.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{tool.title}</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {tool.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16" id="irpf">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">IRPF</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Gestion y declaraciones anuales referentes al IRPF
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                One Data Fiscal soporta los principales modelos de declaracion y ayuda a organizar
                retenciones, alquileres y operaciones con terceros bajo un calendario fiscal claro.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Alcance
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">Retenciones y resumentes</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Gestiona modelos trimestrales y anuales relacionados con trabajo, profesionales,
                  alquileres y operaciones informativas.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Valor
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950">Plazos mas controlados</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Reduce omisiones y mejora el seguimiento de obligaciones fiscales por modelo y
                  ejercicio.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-700">Modelo</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Descripcion</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Plazo</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">Soporte</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {irpfModels.map((item) => (
                  <tr key={item.model}>
                    <td className="px-6 py-4 font-medium text-slate-950">{item.model}</td>
                    <td className="px-6 py-4 text-slate-700">{item.description}</td>
                    <td className="px-6 py-4 text-slate-700">{item.deadline}</td>
                    <td className="px-6 py-4 text-slate-700">{item.supported}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-16" id="sync">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Sincronizacion multiempresa
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Replicacion controlada entre companias
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                La funcionalidad multiempresa de OneData replica datos criticos como clientes o
                proveedores entre multiples empresas mediante mappings y una capa propia de
                configuracion y logs.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {syncFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Configuracion y uso
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Como se pone en marcha</h3>
              <ul className="mt-6 space-y-4 text-slate-300">
                {syncSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                Ejemplo: para sincronizar clientes, configura un setup con el mapping name
                `CUSTOMER-GROUP` y anade las companias destino correspondientes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white" id="setup">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Configuracion
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Desde el asistente hasta los ajustes avanzados</h2>
              <p className="mt-4 leading-8 text-slate-300">
                La solucion combina una configuracion guiada para arrancar rapido con un conjunto
                de opciones avanzadas para adaptar fiscalidad, documentos, periodos y alertas.
              </p>
            </div>
            <div className="grid gap-6">
              {setupCards.map((card) => (
                <div key={card.title} className="rounded-3xl bg-slate-800 p-6">
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-slate-300">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="license">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Licencia
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">
                Privacidad y proteccion del codigo fuente
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                La extension ha sido preparada para proteger el codigo fuente y mantener la
                confidencialidad del desarrollo sin afectar a la propiedad de los datos del cliente.
              </p>
            </div>

            <div className="grid gap-4">
              {licensePoints.map((point) => (
                <article key={point} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="leading-7 text-slate-700">{point}</p>
                </article>
              ))}
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
                Quieres ver One Data Fiscal en accion?
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
