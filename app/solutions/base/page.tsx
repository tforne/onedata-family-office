export default function BaseSolutionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-700 text-lg font-bold text-white">OF</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">OneData Family Office</p>
                <p className="text-base font-semibold">One Data Fiscal</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <a href="#capabilities" className="rounded-full px-4 py-2 hover:bg-slate-100">Capacidades</a>
              <a href="#benefits" className="rounded-full px-4 py-2 hover:bg-slate-100">Beneficios</a>
              <a href="#tools" className="rounded-full px-4 py-2 hover:bg-slate-100">Herramientas</a>
              <a href="#irpf" className="rounded-full px-4 py-2 hover:bg-slate-100">IRPF</a>
              <a href="#config" className="rounded-full px-4 py-2 hover:bg-slate-100">Configuración</a>
            </nav>
          </div>
        </header>

        <section className="overflow-hidden rounded-[28px] bg-gradient-to-r from-slate-100 via-white to-slate-100 px-6 py-16 shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-700" />
                Extensión para Microsoft Business Central
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">One Data Fiscal: gestión fiscal integral en Business Central</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">One Data Fiscal es una extensión avanzada diseñada para maximizar la eficiencia en la gestión fiscal y contable dentro de Microsoft Business Central. Optimiza tus procesos, reduce errores y adapta el sistema a las necesidades fiscales de tu empresa.</p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Puntos clave</p>
                  <ul className="mt-4 space-y-3 text-slate-700 text-sm leading-7">
                    <li>Gestión personalizada de tablas y documentos.</li>
                    <li>Importación inteligente de datos contables.</li>
                    <li>Optimización de procesos administrativos.</li>
                    <li>Integración con las principales declaraciones fiscales.</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Qué resuelve</p>
                  <p className="mt-4 text-slate-700 leading-7">Centraliza la información fiscal dentro de Business Central, reduce el tiempo de gestión y garantiza el cumplimiento normativo con una solución adaptable al negocio.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">Visión funcional</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Gestión fiscal</p>
                    <p className="mt-3 text-slate-700">Configuración de estructuras, datos y procesos fiscales para que Business Central opere con precisión.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Importación</p>
                    <p className="mt-3 text-slate-700">Carga masiva de movimientos, facturas y nóminas con validación y generación automática de documentos.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Adaptabilidad</p>
                    <p className="mt-3 text-slate-700">Ajusta tablas, páginas y reportes para que el sistema refleje tus requisitos fiscales y operativos.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-600">Eficiencia</p>
                    <p className="mt-3 text-slate-700">Reduce errores manuales y acelera la implementación de datos fiscales y contables.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">Beneficios clave</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Ahorro de tiempo y recursos en tareas fiscales repetitivas.</li>
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Precisión garantizada y mínimo riesgo de error humano.</li>
                  <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Adaptabilidad total a las necesidades de cada empresa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-16" id="capabilities">
          <div className="space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Capacidades</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Qué ofrece One Data Fiscal</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">Una extensión diseñada para adaptar Microsoft Business Central a las necesidades fiscales modernas con importación, personalización y soporte de modelos de declaración.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Tablas y documentos</h3>
                <p className="mt-4 text-slate-700">Modifica tablas, estructura documentos y personaliza reportes para que la solución refleje tu modelo de negocio.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Importación de datos</h3>
                <p className="mt-4 text-slate-700">Automatiza la carga de movimientos contables, saldos iniciales, facturas y datos de nóminas con vista previa y validación.</p>
              </article>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">Optimización administrativa</h3>
                <p className="mt-4 text-slate-700">Integra datos fiscales y financieros en flujos de trabajo más rápidos y coherentes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-16" id="tools">
          <div className="max-w-3xl space-y-6 px-4 sm:px-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Herramientas</p>
            <h2 className="text-3xl font-semibold">Herramientas de soporte para Business Central</h2>
            <p className="text-lg leading-8 text-slate-300">Soluciones pensadas para personalizar y optimizar la gestión de datos fiscales dentro de Business Central.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Tool 0</p>
              <h3 className="mt-4 text-2xl font-semibold">Modify Tables</h3>
              <p className="mt-4 text-slate-300">Ajusta tablas y estructuras, modifica páginas y reportes, y personaliza documentos clave para que el sistema se adapte a tus procesos.</p>
            </article>
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Tool 1</p>
              <h3 className="mt-4 text-2xl font-semibold">Importar movimientos históricos</h3>
              <p className="mt-4 text-slate-300">Importa movimientos contables y saldos iniciales de clientes y proveedores con automatización y validación.</p>
            </article>
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Tool 2</p>
              <h3 className="mt-4 text-2xl font-semibold">Importar Facturas de Venta</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Importación desde Excel o CSV.</li>
                <li>Validación automática de datos.</li>
                <li>Asignación contable automática e impuestos calculados.</li>
                <li>Generación de documentos listos para envío.</li>
              </ul>
            </article>
            <article className="rounded-3xl bg-slate-800 p-8 shadow-xl shadow-slate-800/20">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Tool 3</p>
              <h3 className="mt-4 text-2xl font-semibold">Importar Nóminas</h3>
              <p className="mt-4 text-slate-300">Carga nóminas, registra pagos, deducciones y contribuciones, y automatiza la asignación contable con validación segura.</p>
            </article>
          </div>
        </section>

        <section className="py-16" id="irpf">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">IRPF</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Gestión y declaraciones de IRPF</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">One Data Fiscal soporta los principales modelos de declaración, simplifica la gestión de retenciones y facilita el cumplimiento de plazos fiscales.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Modelos soportados</h3>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li><span className="font-semibold">Modelo 111:</span> Declaración trimestral de retenciones.</li>
                <li><span className="font-semibold">Modelo 190:</span> Resumen anual de retenciones.</li>
                <li><span className="font-semibold">Modelo 180:</span> Alquileres de inmuebles urbanos.</li>
                <li><span className="font-semibold">Modelo 347:</span> Operaciones con terceros mayores a 3.005,06 €.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">Por qué elegirlo</h3>
              <p className="mt-4 text-slate-700">Esta solución es ideal para organizaciones que quieren llevar sus operaciones fiscales al siguiente nivel con integración nativa en Business Central y un enfoque práctico para la gestión de datos.</p>
            </article>
          </div>
        </section>

        <section className="bg-slate-950 text-white py-16" id="config">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-900 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Configuración</p>
              <h2 className="mt-4 text-3xl font-semibold">Configura One Data Fiscal</h2>
              <p className="mt-4 text-slate-300 leading-8">Empieza con una configuración asistida que guía los parámetros básicos y luego ajusta las opciones avanzadas para periodos fiscales, grupos de IRPF y reglas especiales de tu empresa.</p>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="text-xl font-semibold text-white">Configuración asistida</h3>
                <p className="mt-4 text-slate-300">Completa el asistente paso a paso para conectar compras, ventas y contabilidad con los parámetros fiscales correctos.</p>
              </div>
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="text-xl font-semibold text-white">Configuración avanzada</h3>
                <p className="mt-4 text-slate-300">Personaliza periodos, año fiscal y grupos de IRPF para que la extensión refleje la estructura y necesidades de tu organización.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white px-6 py-12 shadow-[0_20px_80px_rgba(15,23,42,0.06)] sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Contacto</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">¿Quieres ver One Data Fiscal en acción?</h2>
            </div>
            <a href="mailto:contacto@onedata.one" className="inline-flex items-center justify-center rounded-3xl bg-sky-700 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-800">Solicitar demo</a>
          </div>
        </section>
      </main>
    </div>
  );
}
