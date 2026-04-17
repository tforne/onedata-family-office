const sectors = [
  {
    name: 'Family Offices',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18L24 10L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="31" r="2.5" fill="currentColor" />
        <circle cx="30" cy="31" r="2.5" fill="currentColor" />
      </svg>
    ),
    description: 'Gestión transparente de patrimonio, relaciones familiares y estructuras complejas.',
  },
  {
    name: 'Grupos patrimoniales',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 34V20H34V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 34V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 34V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 20L24 10L34 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    description: 'Visibilidad de activos, entidades y propiedad a nivel corporativo.',
  },
  {
    name: 'Inversores inmobiliarios',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 32V18H24V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 28V18H32V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 24L22 20L26 24L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: 'Seguimiento de inversiones, rentas y trazabilidad financiera por activo.',
  },
  {
    name: 'Gestoras patrimoniales',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 28L20 22L26 26L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="34" r="2" fill="currentColor" />
        <circle cx="26" cy="26" r="2" fill="currentColor" />
        <circle cx="34" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
    description: 'Operativa consolidada, reporting y control de riesgos en un mismo entorno.',
  },
];

export default function SectorsSection() {
  return (
    <section className="bg-slate-50 py-20" id="sectores">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Sectores</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Pensado para organizaciones con estructuras patrimoniales complejas
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-slate-700 text-white shadow-lg">
                {sector.icon}
              </div>
              <div className="mt-6 text-lg font-semibold text-slate-950">{sector.name}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{sector.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
