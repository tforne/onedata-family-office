const capabilities = [
  {
    title: 'Activos inmobiliarios',
    tag: 'Activos',
    description:
      'Ficha avanzada del inmueble, relaciones, documentación, imágenes y movimientos asociados.',
  },
  {
    title: 'Contratos de alquiler',
    tag: 'Contratos',
    description:
      'Lease contracts, facturación recurrente, renovaciones, revisiones de renta y liquidación.',
  },
  {
    title: 'Índice de referencia',
    tag: 'Referencia',
    description:
      'SERPAVI / MIVAU con histórico, referencia activa y cálculo automático por inmueble.',
  },
  {
    title: 'Liquidación contractual',
    tag: 'Liquidación',
    description:
      'Cierre ordenado con motivos, importes, documentación e impacto financiero por contrato.',
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="capacidades">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Capacidades</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Capacidades actuales del producto
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          La landing se ha alineado con funcionalidades existentes en la solución: activos inmobiliarios, contratos, liquidaciones, finanzas FRE, extractos, integración con diario general, seguros, incidencias, fiscalidad e integración API.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {capabilities.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              {item.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
