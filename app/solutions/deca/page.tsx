import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../base/page.module.css';
import decaStyles from './page.module.css';

const title = 'OneData DeCA — Gestión documental integrada en Business Central';
const description = 'OneData DeCA es una solución de gestión documental integrada en Microsoft Dynamics 365 Business Central que permite conectar los procesos empresariales con servicios documentales en Microsoft Azure, facilitando la gestión de documentos desde el propio entorno de trabajo.';
const demoHref = 'mailto:contacto@onedata.one?subject=Demo%20OneData%20DeCA';
const productSheetHref = '/WEB-DECA-02-Hoja-Producto/OneData_DeCA_Hoja_Producto.webp';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website', locale: 'es_ES', siteName: 'OneData' },
  twitter: { card: 'summary', title, description },
};

const capabilities = [
  'Integración con Microsoft Dynamics 365 Business Central.',
  'Arquitectura modular mediante extensiones.',
  'Integración con Microsoft Azure.',
  'Infraestructura Azure dedicada por cliente.',
  'Preparación para automatizar procesos documentales.',
  'Despliegue y configuración mediante procedimientos estandarizados.',
  'Evolución y mantenimiento centralizados por OneData.',
];

const extensions = [
  {
    title: 'OneData DeCA Core',
    description: 'Extensión principal integrada en Business Central.',
    responsibilities: [
      'Proporcionar la estructura funcional de OneData DeCA.',
      'Gestionar la integración con los proveedores documentales.',
      'Ofrecer las capacidades comunes de la solución.',
      'Mantener una arquitectura extensible.',
    ],
  },
  {
    title: 'OneData DeCA Cloud Provider',
    description: 'Extensión que integra OneData DeCA con servicios documentales basados en Microsoft Azure.',
    responsibilities: [
      'Conectar Business Central con los servicios Cloud.',
      'Utilizar la arquitectura de integración definida por DeCA.',
      'Facilitar el uso de recursos Azure pertenecientes al cliente.',
    ],
  },
];

const deploymentSteps = [
  'Preparar la infraestructura necesaria en Azure.',
  'Estandarizar la configuración por cliente.',
  'Facilitar las instalaciones y actualizaciones.',
  'Documentar las dependencias técnicas.',
];

export default function DeCASolutionPage() {
  return (
    <div className={`${styles.page} ${decaStyles.page} min-h-screen bg-slate-50 text-slate-950`}>
      <a href="#contenido" className={styles.skipLink}>Saltar al contenido</a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <Link href="/solutions" className="flex items-center gap-3" aria-label="OneData: ver soluciones">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white" aria-hidden="true">OD</span>
            <span><span className="block font-semibold">OneData DeCA</span><span className="block text-xs text-slate-600">Sobre Business Central</span></span>
          </Link>
          <Link href="/solutions" className="text-sm font-semibold text-slate-700 hover:text-sky-800">Todas las soluciones <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <main id="contenido" tabIndex={-1}>
        <section className={`${decaStyles.hero} bg-white`}>
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className={styles.eyebrow}>OneData DeCA · Microsoft Dynamics 365 Business Central</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={demoHref} className={styles.primaryButton}>Solicitar demo</a>
                <a href="#componentes" className={styles.secondaryButton}>Explorar componentes <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className={`${decaStyles.architecture} rounded-[32px] bg-slate-950 p-7 text-white shadow-soft sm:p-9`}>
              <figcaption className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Arquitectura modular</figcaption>
              <div className="mt-7 space-y-5">
                {extensions.map((extension, index) => (
                  <div key={extension.title} className="flex gap-4 border-b border-white/15 pb-5">
                    <span className="text-sm text-cyan-300" aria-hidden="true">0{index + 1}</span>
                    <div><p className="text-xl font-semibold">{extension.title}</p><p className="mt-1 text-sm leading-6 text-slate-300">{extension.description}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/5 p-5">
                <p className="font-semibold">Microsoft Dynamics 365<br />Business Central + Microsoft Azure</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Procesos empresariales conectados con servicios documentales e infraestructura Azure dedicada por cliente.</p>
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-400">Esquema conceptual de la solución.</p>
            </figure>
          </div>
        </section>

        <nav aria-label="Secciones de OneData DeCA" className={styles.sectionNav}>
          <div className="mx-auto flex max-w-7xl gap-1 px-4 lg:px-8">
            <a href="#caracteristicas">Características</a>
            <a href="#componentes">Extensiones</a>
            <a href="#implantacion">Implantación</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section id="caracteristicas" className={styles.section}>
            <p className={styles.eyebrow}>Gestión documental integrada</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Documentos y procesos en tu entorno de trabajo.</h2>
            <ul className={`${styles.list} ${decaStyles.capabilities} max-w-3xl`}>
              {capabilities.map(capability => <li key={capability}>{capability}</li>)}
            </ul>
          </section>

          <section id="componentes" className={`${styles.section} border-t border-slate-200`}>
            <p className={styles.eyebrow}>Extensiones de OneData DeCA</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Una base común y conexión con Azure.</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {extensions.map(extension => (
                <article key={extension.title} className={`${decaStyles.extension} rounded-3xl border border-slate-200 bg-white p-7 shadow-sm`}>
                  <h3 className="text-2xl font-semibold">{extension.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{extension.description}</p>
                  <ul className={styles.list}>
                    {extension.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="implantacion" className={`${styles.section} border-t border-slate-200`}>
            <p className={styles.eyebrow}>Componente de implantación</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">OneData DeCA Deployment Package</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Conjunto de recursos y procedimientos de despliegue para preparar la infraestructura Azure y la configuración de cada cliente.</p>
            <ul className={`${styles.list} ${decaStyles.deployment} max-w-3xl`}>
              {deploymentSteps.map(step => <li key={step}>{step}</li>)}
            </ul>
          </section>

          <section id="hoja-de-producto" aria-labelledby="hoja-de-producto-titulo" className={`${styles.section} ${decaStyles.sheet} border-t border-slate-200`}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className={styles.eyebrow}>OneData DeCA</p>
                <h2 id="hoja-de-producto-titulo" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Hoja de producto</h2>
                <a href={productSheetHref} target="_blank" rel="noopener noreferrer" className={`${styles.primaryButton} mt-8`}>
                  Ver hoja de producto <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (se abre en una nueva pestaña)</span>
                </a>
              </div>
              <a href={productSheetHref} target="_blank" rel="noopener noreferrer" aria-label="Abrir hoja de producto de OneData DeCA en una nueva pestaña" className={`${decaStyles.sheetPreview} block w-full max-w-3xl justify-self-center rounded-3xl border border-slate-200 bg-white p-2 shadow-sm sm:p-4`}>
                <Image
                  src={productSheetHref}
                  alt="Hoja de producto de OneData DeCA: gestión documental integrada en Business Central, extensiones Core, Cloud Provider y Deployment Package, características y QR de acceso a la solución."
                  width={1055}
                  height={1491}
                  sizes="(min-width: 1280px) 677px, (min-width: 1024px) 55vw, calc(100vw - 64px)"
                  loading="lazy"
                  className="h-auto w-full rounded-2xl"
                />
              </a>
            </div>
          </section>

          <section id="contacto" className={`${decaStyles.contact} mb-16 rounded-[32px] bg-sky-800 p-7 text-white sm:p-12`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-sky-100">Hablemos de tu gestión documental</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Descubre cómo encaja OneData DeCA en tu empresa.</h2>
                <p className="mt-5 max-w-2xl leading-8 text-sky-50">Cuéntanos qué procesos documentales necesitas conectar con Business Central y revisamos el alcance de una demostración.</p>
              </div>
              <div>
                <a href={demoHref} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-7 py-4 font-semibold text-sky-900 hover:bg-sky-50">Solicitar demo</a>
                <p className="mt-4 text-sm text-sky-100">Se abrirá tu aplicación de correo.</p>
                <a href="mailto:contacto@onedata.one" className="mt-2 inline-block text-sm underline underline-offset-4">contacto@onedata.one</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 px-6 py-8 text-sm lg:px-8">
          <p><strong>OneData DeCA</strong><span className="mt-1 block text-slate-600">Gestión documental integrada en Business Central.</span></p>
          <Link href="/solutions" className="font-semibold text-sky-800">Explorar soluciones OneData</Link>
        </div>
      </footer>
    </div>
  );
}
