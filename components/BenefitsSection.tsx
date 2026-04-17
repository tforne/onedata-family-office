const benefits = [
  {
    title: 'Control centralizado',
    description: 'Toda la información patrimonial en una única plataforma conectada.',
  },
  {
    title: 'Eficiencia operativa',
    description: 'Menos Excel, menos errores y más automatización en el día a día.',
  },
  {
    title: 'Visión estratégica',
    description: 'Datos fiables para decidir con mayor seguridad y contexto.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Beneficios</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Más control. Más visibilidad. Mejores decisiones.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {benefits.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
