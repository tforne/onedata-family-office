export default function PropertyManagementSolutionPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-black/30">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Property Management</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Landing integrada de OneData Family Office
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Visualiza la landing original dentro de la aplicación y accede a la versión HTML estática alojada en `public/solutions/property-management`.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/solutions/property-management/index.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Abrir landing completa
              </a>
              <a
                href="/solutions/property-management/mejoras-v3-premium.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver mejoras 3.0
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950">
            <iframe
              src="/solutions/property-management/index.html"
              title="OneData Family Office Landing"
              className="h-full w-full border-0 bg-white"
            />
          </div>
        </div>

        <section className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Nueva solución</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">One Data Fiscal</h2>
              <p className="mt-4 max-w-2xl text-slate-300">Descubre la landing de la solución fiscal integrada en Business Central, con gestión de IRPF, importación de datos y configuración avanzada para cumplimiento normativo.</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <a
                href="/solutions/base"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Ver solución fiscal
              </a>
              <a
                href="/solutions/base"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Acceder ahora
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
