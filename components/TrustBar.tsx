const trustItems = [
  'Integrado con Business Central',
  'Control por activo y contrato',
  'FRE Ledger y reporting específico',
  'Automatización para operaciones inmobiliarias',
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
