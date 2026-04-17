const cards = [
  {
    title: 'Control por activo',
    description:
      'Cada inmueble concentra su contexto operativo: datos, estado, imágenes, relaciones, incidencias, contratos y movimientos financieros.',
  },
  {
    title: 'Seguimiento contractual',
    description:
      'La gestión de alquileres gana trazabilidad con información contractual, vencimientos, revisiones y liquidaciones ordenadas.',
  },
  {
    title: 'Visión económica real',
    description:
      'El modelo FRE añade una capa financiera específica para el patrimonio inmobiliario, con diario, libro histórico y extractos bancarios.',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-slate-50 py-20" id="solución">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Más control operativo</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Más control operativo, menos dispersión entre herramientas.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            La solución reúne la gestión del inmueble, su contrato y su actividad económica en una experiencia unificada dentro de Business Central.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
