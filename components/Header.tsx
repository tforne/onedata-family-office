import Link from 'next/link';

const navItems = ['Solución', 'Capacidades', 'IA', 'Sectores', 'Contacto'];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-950 shadow-lg shadow-slate-900/20">
            <svg viewBox="0 0 48 48" className="h-6 w-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="4" opacity="0.32" />
              <path d="M18 32V16H28C31.3137 16 34 18.6863 34 22C34 25.3137 31.3137 28 28 28H22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-900">OneData Family Office</div>
            <div className="text-xs text-slate-500">Patrimonio, activos y reporting</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item}
            </a>
          ))}
          <Link
            href="/solutions"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Soluciones
          </Link>
        </nav>

        <a
          href="#contacto"
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Solicitar demo
        </a>
      </div>
    </header>
  );
}
