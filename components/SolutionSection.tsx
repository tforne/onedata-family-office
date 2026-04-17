const points = [
  'Activos inmobiliarios completamente integrados',
  'Entidades legales conectadas entre sí',
  'Ownership claro, trazable y actualizado',
  'Información financiera consolidada',
];

const nodes = ['Miembros', 'Entidades', 'Activos', 'Ownership %', 'Reporting', 'IA'];

export default function SolutionSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">La solución</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Una plataforma diseñada para conectar todo el ecosistema patrimonial
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            OneData Family Office centraliza la gestión de activos, entidades, miembros de la familia y
            participaciones en un entorno seguro, escalable y preparado para crecer con la organización.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] bg-slate-900/70 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Family Office</div>
              <div className="mt-1 text-xs text-slate-400">Núcleo de control</div>
            </div>
            <div className="rounded-[28px] bg-slate-900/70 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Entidades legales</div>
              <div className="mt-1 text-xs text-slate-400">Sociedades y holdings</div>
            </div>
            <div className="rounded-[28px] bg-slate-900/70 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Activos inmobiliarios</div>
              <div className="mt-1 text-xs text-slate-400">Propiedades y valoraciones</div>
            </div>
            <div className="rounded-[28px] bg-slate-900/70 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Ownership</div>
              <div className="mt-1 text-xs text-slate-400">Participaciones y trazabilidad</div>
            </div>
          </div>
          <div className="relative mt-6 rounded-[28px] bg-gradient-to-br from-white/10 to-white/5 p-5 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white">Mapa patrimonial conectado</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {nodes.map((node) => (
                <div
                  key={node}
                  className="rounded-2xl bg-slate-900/70 px-4 py-4 text-center text-sm text-slate-200 ring-1 ring-white/10"
                >
                  {node}
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-slate-300 shadow-lg shadow-black/20">
              <div>
                <div className="font-semibold text-white">Property Management</div>
                <div className="mt-1 text-xs text-slate-400">Módulo integrado en el mapa patrimonial</div>
              </div>
              <a
                href="/solutions/property-management/index.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Ver módulo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
