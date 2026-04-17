const heroPoints = [
  'Activos y contratos en un único lugar.',
  'Visibilidad clara de ingresos y gastos.',
  'Control preparado para decisiones de patrimonio.',
];

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">OneData Family Office</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Gestiona patrimonio inmobiliario, contratos y finanzas desde Business Central.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Una plataforma sencilla para consolidar activos, contratos y reporting financiero en una sola experiencia.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              {heroPoints.map((point) => (
                <li key={point} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
              >
                Solicitar demo
              </a>
              <a
                href="#solución"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Ver solución
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-slate-200/70">
            <div className="rounded-[28px] bg-white p-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Resultados</p>
              <h2 className="mt-5 text-3xl font-semibold text-slate-950">Más claridad, menos dispersión.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Datos patrimoniales, contratos y economía conectados para una gestión más rápida y fiable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
