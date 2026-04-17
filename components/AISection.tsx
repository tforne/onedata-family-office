const prompts = [
  '¿Cuál es el principal riesgo de este activo?',
  'Muéstrame los ownership incompletos',
  'Resume la distribución patrimonial por entidad legal',
  '¿Qué activos requieren revisión?',
];

const insights = [
  ['Entidad Alpha', '38% del patrimonio total'],
  ['Entidad Beta', '27% · exposición residencial'],
  ['Entidad Gamma', '15% · revisión recomendada'],
];

export default function AISection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20" id="ia">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">IA integrada</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            IA aplicada a la gestión patrimonial
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Con OneData Asset Copilot, transforma los datos en respuestas útiles, rápidas y accionables.
            Consulta tu patrimonio como si hablaras con un experto.
          </p>
          <div className="mt-8 space-y-3">
            {prompts.map((prompt) => (
              <div key={prompt} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
                {prompt}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <div className="text-sm font-semibold text-slate-900">OneData Asset Copilot</div>
            <div className="text-xs text-slate-500">Asistente inteligente para análisis patrimonial</div>
          </div>
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-4 border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
              <div className="max-w-xs rounded-3xl rounded-bl-lg bg-slate-900 px-4 py-3 text-sm text-white">
                ¿Cuál es el principal riesgo de este activo?
              </div>
              <div className="max-w-sm rounded-3xl rounded-tl-lg bg-slate-100 px-4 py-3 text-sm leading-7 text-slate-700">
                El principal riesgo detectado es la distribución de ownership incompleta en una de las entidades
                vinculadas, lo que puede afectar el reporting consolidado y la trazabilidad del activo.
              </div>
              <div className="max-w-xs rounded-3xl rounded-bl-lg bg-slate-900 px-4 py-3 text-sm text-white">
                Resume la distribución patrimonial por entidad legal.
              </div>
            </div>
            <div className="p-6">
              <div className="rounded-[28px] bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Insights</div>
                    <div className="text-xs text-slate-500">Resumen ejecutivo</div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-xs text-slate-500 shadow-sm">Copilot</div>
                </div>
                <div className="mt-5 space-y-4">
                  {insights.map(([title, text]) => (
                    <div key={title} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                      <div className="text-sm font-medium text-slate-900">{title}</div>
                      <div className="mt-1 text-xs text-slate-500">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
