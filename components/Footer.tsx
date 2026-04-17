export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-3xl bg-white text-slate-950 shadow-sm">
            <svg viewBox="0 0 48 48" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="4" opacity="0.32" />
              <path d="M18 30V18H28C31.3137 18 34 20.6863 34 24C34 27.3137 31.3137 30 28 30H22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-white">OneData Family Office</div>
            <div className="mt-2 text-sm text-slate-400">Built on Microsoft Dynamics 365 Business Central</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
          <a href="#solución" className="hover:text-white">Solución</a>
          <a href="#capacidades" className="hover:text-white">Capacidades</a>
          <a href="#ia" className="hover:text-white">IA</a>
          <a href="#sectores" className="hover:text-white">Sectores</a>
          <a href="#contacto" className="hover:text-white">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
