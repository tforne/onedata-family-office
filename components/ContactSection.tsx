export default function ContactSection() {
  return (
    <section className="bg-white py-20" id="contacto">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Solicitar demo</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Transforma la forma de gestionar la actividad inmobiliaria
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Descubre cómo OneData Family Office simplifica la gestión de activos, contratos, financieros y seguros dentro de Business Central.
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                placeholder="Nombre"
              />
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                placeholder="Empresa"
              />
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-700 focus:outline-none"
                placeholder="Correo electrónico"
              />
              <button className="w-full rounded-2xl bg-blue-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800">
                Solicitar demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
