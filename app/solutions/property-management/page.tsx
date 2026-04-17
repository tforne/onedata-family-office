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
      </main>
    </div>
  );
}
