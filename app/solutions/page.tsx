import Link from 'next/link';

const solutionCards = [
  {
    title: 'Property Management',
    description:
      'Landing de OneData Family Office para activos inmobiliarios, contratos, finanzas FRE y seguros dentro de BC.',
    href: '/solutions/property-management',
    image: '/solutions/property-management/images/preview.png',
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Soluciones</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Landings de producto integradas
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Aquí puedes acceder a las landing pages de soluciones ya preparadas y ver su contenido web dentro del proyecto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {solutionCards.map((solution) => (
            <article
              key={solution.title}
              className="overflow-hidden rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={solution.image}
                alt={`${solution.title} preview`}
                className="mb-6 h-56 w-full rounded-3xl object-cover"
              />
              <h2 className="text-2xl font-semibold text-slate-900">{solution.title}</h2>
              <p className="mt-4 text-slate-600">{solution.description}</p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={solution.href}
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Ver landing
                </Link>
                <a
                  href="/solutions/property-management/index.html"
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  Abrir HTML estático
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
