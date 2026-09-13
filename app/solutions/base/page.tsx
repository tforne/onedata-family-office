import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const title = 'OneData Base | Fiscalidad, migración y multiempresa en Business Central';
const description = 'Complementa Microsoft Dynamics 365 Business Central con gestión fiscal, migración de datos y operativa multiempresa. Consulta capacidades, requisitos y solicita una demo.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website', locale: 'es_ES', siteName: 'OneData' },
  twitter: { card: 'summary', title, description },
};

const demoHref = 'mailto:contacto@onedata.one?subject=Demo%20OneData%20Base';
const calendarHref = 'https://sede.agenciatributaria.gob.es/Sede/calendario-contribuyente.html';
const instructions111 = 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/pagos-cuenta/modelo-111-reten_____moniales-imputaciones-renta-autoliquidacion_/instrucciones.html';

const areas = [
  { number: '01', title: 'Fiscalidad', href: '#fiscalidad', problem: 'Información fiscal dispersa', benefit: 'Organiza retenciones, períodos y expedientes con validaciones y documentación asociada.' },
  { number: '02', title: 'Migración de datos', href: '#tools', problem: 'Preparación de datos para el ERP', benefit: 'Incorpora maestros, históricos y saldos mediante procesos de importación y controles específicos.' },
  { number: '03', title: 'Multiempresa', href: '#sync', problem: 'Mantenimiento repetido entre empresas', benefit: 'Define qué datos replicar, selecciona destinos y consulta los resultados de la ejecución.' },
];

const fiscalSteps = [
  ['Preparar', 'Asocia modelo, ejercicio, período y origen de los datos.'],
  ['Revisar y aprobar', 'Consulta errores y avisos antes de avanzar de estado.'],
  ['Generar y exportar', 'Prepara el fichero desde los valores del formato de transferencia configurado.'],
  ['Documentar y cerrar', 'Registra la presentación realizada, incorpora el justificante y archiva el expediente.'],
];

const migrationRows = [
  ['Maestros', 'Cuentas contables, clientes y proveedores.', 'Preparación de campos y grupos contables según el importador.'],
  ['Activos fijos', 'Fichas de activos y libros de amortización.', 'Revisión de dependencias y configuración de amortización.'],
  ['Historia y apertura', 'Movimientos históricos y saldos iniciales de clientes y proveedores.', 'Definición del corte contable y revisión de resultados en la implantación.'],
  ['Referencias de venta', 'Referencias y procesos de creación de documentos de venta.', 'Confirmar estructura de origen y circuito documental aplicable.'],
  ['Nóminas', 'Configuración y buffer para preparar la importación de nóminas.', 'Acordar correspondencias contables y validar una muestra.'],
];

const coverage = [
  { feature: 'Grupos, diarios y movimientos de IRPF', onedata: 'Configuración, períodos y gestión de retenciones vinculada al registro.', standard: 'Datos y procesos contables del ERP; coexistencia con retenciones estándar a revisar.', status: 'Requiere configuración', note: 'Confirmar el circuito de registro y los permisos en el entorno del cliente.' },
  { feature: 'Expediente fiscal', onedata: 'Estados, validaciones, auditoría, archivo de ficheros y justificantes.', standard: 'Origen de IVA y formatos de transferencia cuando corresponda.', status: 'Pendiente de validación', note: 'El circuito completo necesita validación funcional en Business Central.' },
  { feature: 'Prevalidación del 303', onedata: 'Controles preventivos limitados, previos a AEAT.', standard: 'Declaración de IVA y formato de transferencia estándar.', status: 'Cobertura parcial', note: 'Algunas reglas necesitan un resultado de liquidación fiable. Pruebas funcionales pendientes.' },
  { feature: 'Facturas Word y RDLC con IRPF', onedata: 'Diseños con información de retención y total neto.', standard: 'Informe y factura registrada de Business Central.', status: 'Requiere configuración', note: 'Validación funcional pendiente de los escenarios de documento, divisa y retención aplicables.' },
  { feature: 'QR de la factura registrada', onedata: 'Visualización de la imagen almacenada en la factura.', standard: 'Imagen QR y documentos electrónicos de Microsoft.', status: 'Integrado con estándar Microsoft', note: 'Requiere imagen disponible y configuración estándar aplicable.' },
  { feature: 'Importación de datos', onedata: 'Importadores, buffers y validaciones específicas por proceso.', standard: 'Maestros, grupos contables y estructuras del ERP.', status: 'Requiere configuración', note: 'Formatos y reglas de cada carga se acuerdan y prueban durante la implantación.' },
  { feature: 'Replicación manual multiempresa', onedata: 'Mapeos de tablas y campos, destinos y registro de resultados.', standard: 'Empresas y datos de Business Central.', status: 'Requiere configuración', note: 'Seleccionar y probar las tablas autorizadas. No implica cobertura universal.' },
  { feature: 'Automatismo de clientes', onedata: 'Implementación para altas y modificaciones de clientes.', standard: 'Eventos del maestro de clientes.', status: 'Pendiente de validación', note: 'Acreditar el escenario, sus permisos y el comportamiento ante errores antes de activarlo.' },
  { feature: 'Preparación de paquetes', onedata: 'Clasificación de tablas y controles de exclusión.', standard: 'Paquetes de configuración de Business Central.', status: 'Integrado con estándar Microsoft', note: 'Revisar selección, orden y contenido antes de aplicarlos.' },
];

const models = [
  { model: '111', purpose: 'Retenciones del trabajo, actividades económicas y otras rentas incluidas en el modelo.', onedata: 'Páginas y estructuras de trabajo con retenciones.', standard: 'Relación con el registro y las retenciones estándar a confirmar por entorno.', note: 'Circuito completo y exportación por ejercicio pendientes de validación.', href: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH01.shtml' },
  { model: '190', purpose: 'Resumen anual de retenciones del trabajo, actividades económicas y otras rentas de su ámbito.', onedata: 'Páginas y estructuras específicas para el resumen.', standard: 'Datos de retenciones y configuración contable; integración a confirmar.', note: 'Validar cálculo, fichero y permisos; su presencia no acredita la presentación completa.', href: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI10.shtml' },
  { model: '115 / 180', purpose: 'Retenciones por arrendamiento de inmuebles urbanos / resumen anual correspondiente.', onedata: 'Soporte específico pendiente de confirmación comercial.', standard: 'Confirmar cobertura de la localización y de la versión instalada.', note: 'No se anuncian como modelos completos disponibles en OneData.', href: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GH02.shtml' },
  { model: '303', purpose: 'Autoliquidación del IVA.', onedata: 'Expediente y prevalidación preventiva parcial; fichero desde el formato configurado.', standard: 'Declaración de IVA y formato de transferencia AEAT.', note: 'No equivale a validación AEAT ni a presentación telemática. Validación integral pendiente.', href: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G414.shtml' },
  { model: '347', purpose: 'Declaración informativa anual de operaciones con terceras personas.', onedata: 'Aportación específica pendiente de confirmación comercial.', standard: 'Revisar el circuito estándar de la localización española aplicable.', note: 'No es un resumen de IRPF ni se acredita aquí un circuito propio completo.', href: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GI27.shtml' },
];

const faqs = [
  ['¿Qué es OneData Base y para quién está pensado?', 'Es una solución complementaria para Microsoft Dynamics 365 Business Central. Ayuda a equipos de administración, finanzas e implantación a estructurar procesos fiscales, incorporar datos y gestionar la replicación entre empresas. Fiscalidad, Migración de datos y Multiempresa son áreas de la misma solución.'],
  ['¿Sustituye la funcionalidad fiscal estándar de Microsoft?', 'La complementa. El expediente puede utilizar el origen de IVA y los formatos de transferencia de Business Central. La visualización del QR consume la imagen estándar almacenada en la factura registrada. La configuración e integración necesarias se revisan para cada entorno.'],
  ['¿La prevalidación del 303 confirma que AEAT aceptará la declaración?', 'No. Es una revisión preventiva de cobertura parcial, previa a AEAT. Algunas comprobaciones dependen de disponer de un resultado fiable de liquidación. El circuito completo sigue pendiente de validación funcional y no acredita la aceptación de una declaración.'],
  ['¿Generar un fichero significa que la declaración ya está presentada?', 'No. Generar o exportar prepara el fichero; presentar es una gestión ante AEAT. Después puede registrarse la presentación e incorporarse su justificante al expediente. El cambio de estado o la carga de un justificante no realizan un envío telemático automático.'],
  ['¿Puedo importar cualquier fichero de mi sistema anterior?', 'El alcance depende del importador y de la estructura de los datos. En la implantación se concretan plantillas, campos, correspondencias y validaciones mediante una muestra. No se ofrece compatibilidad universal de formatos ni conciliación o deduplicación automática.'],
  ['¿La sincronización funciona de forma programada?', 'El motor configurable dispone de ejecución manual. También existe una implementación de automatismos de alta y modificación de clientes, cuyo escenario debe validarse antes de su activación. La planificación general, los reintentos y la recuperación avanzada no forman parte de la cobertura anunciada.'],
  ['¿Qué versiones, licencia y soporte necesito?', 'Se revisan la versión de Business Central, su localización, las aplicaciones Microsoft dependientes y los permisos. La modalidad de licencia, las actualizaciones, el soporte y los servicios de implantación deben concretarse en la propuesta comercial.'],
  ['¿Qué conviene preparar para la demo?', 'Indica tu versión de Business Central, las empresas implicadas y el proceso que quieres revisar: fiscalidad, migración o multiempresa. Con esa información se puede delimitar el escenario y las comprobaciones necesarias.'],
];

function SectionHeading({ eyebrow, title: heading, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
      {children && <div className="mt-5 text-lg leading-8 text-slate-600">{children}</div>}
    </div>
  );
}

function Status({ children }: { children: string }) {
  const tone = children === 'Cobertura parcial' || children === 'Pendiente de validación'
    ? 'bg-amber-50 text-amber-900 ring-amber-200'
    : 'bg-sky-50 text-sky-900 ring-sky-200';
  return <span className={`inline-block rounded-lg px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${tone}`}>{children}</span>;
}

export default function BaseSolutionPage() {
  return (
    <div className={`${styles.page} min-h-screen bg-slate-50 text-slate-950`}>
      <a href="#contenido" className={styles.skipLink}>Saltar al contenido</a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-8">
          <Link href="/solutions" className="flex items-center gap-3" aria-label="OneData: ver soluciones">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white" aria-hidden="true">OD</span>
            <span><span className="block font-semibold">OneData Base</span><span className="block text-xs text-slate-600">Sobre Business Central</span></span>
          </Link>
          <Link href="/solutions" className="text-sm font-semibold text-slate-700 hover:text-sky-800">Todas las soluciones <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <main id="contenido" tabIndex={-1}>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className={styles.eyebrow}>OneData Base · Microsoft Dynamics 365 Business Central</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">Gestión fiscal, migración de datos y operativa multiempresa en Business Central.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">OneData Base complementa tu ERP para centralizar información fiscal, preparar la incorporación de datos y reducir tareas repetidas entre empresas. Tres ámbitos de trabajo, dentro de Business Central.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={demoHref} className={styles.primaryButton}>Solicitar demo</a>
                <a href="#capabilities" className={styles.secondaryButton}>Explorar funcionalidades <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className="rounded-[32px] bg-slate-950 p-7 text-white shadow-soft sm:p-9">
              <figcaption className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Cómo encaja en tu operativa</figcaption>
              <div className="mt-7 space-y-5">
                {areas.map(area => (
                  <div key={area.number} className="flex gap-4 border-b border-white/15 pb-5">
                    <span className="text-sm text-cyan-300" aria-hidden="true">{area.number}</span>
                    <div><p className="text-xl font-semibold">{area.title}</p><p className="mt-1 text-sm leading-6 text-slate-300">{area.problem}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/5 p-5">
                <p className="font-semibold">Microsoft Dynamics 365<br />Business Central</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Datos, contabilidad y capacidades estándar sobre los que trabaja OneData.</p>
              </div>
              <p className="mt-5 text-xs leading-5 text-slate-400">Esquema conceptual de la solución.</p>
            </figure>
          </div>
        </section>

        <nav aria-label="Secciones de OneData Base" className={styles.sectionNav}>
          <div className="mx-auto flex max-w-7xl gap-1 px-4 lg:px-8">
            {[['#fiscalidad', 'Fiscalidad'], ['#facturacion', 'Facturación'], ['#tools', 'Migración'], ['#sync', 'Multiempresa'], ['#setup', 'Configuración'], ['#cobertura', 'Cobertura'], ['#license', 'Requisitos'], ['#preguntas', 'Preguntas']].map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section id="capabilities" className={styles.section}>
            <SectionHeading eyebrow="Una solución · Tres ámbitos" title="Localiza el proceso que necesitas mejorar." />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {areas.map(area => (
                <a href={area.href} key={area.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-sky-600">
                  <p className={styles.eyebrow}>{area.number}</p><h3 className="mt-5 text-2xl font-semibold">{area.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{area.benefit}</p>
                  <span className="mt-6 inline-block text-sm font-semibold text-sky-800">Ver alcance <span aria-hidden="true">↗</span></span>
                </a>
              ))}
            </div>
          </section>

          <section id="fiscalidad" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="01 · Fiscalidad" title="El expediente como punto de seguimiento.">Reúne el modelo, el ejercicio, el período, las validaciones y la documentación de cada declaración. Facilita saber en qué estado está el trabajo y consultar su trazabilidad.</SectionHeading>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Retenciones y control documental</h3>
                <ul className={styles.list}>
                  <li>Grupos y configuración de IRPF, diarios, movimientos y períodos.</li>
                  <li>Estados desde la preparación hasta la aprobación, exportación, archivo y cierre.</li>
                  <li>Errores y avisos de validación, con auditoría de acciones y cambios contemplados en el circuito.</li>
                  <li>Archivo de ficheros y carga de justificantes asociados al expediente.</li>
                </ul>
                <p className="mt-6 text-sm leading-7 text-slate-600">El circuito completo del expediente está pendiente de validación funcional en Business Central. La acción «Calcular» comprueba referencias y cambia el estado de preparación; no constituye por sí sola un motor autónomo de cálculo de impuestos.</p>
              </div>
              <ol className="space-y-5 border-l-2 border-sky-200 pl-6">
                {fiscalSteps.map(([heading, text], index) => <li key={heading}><p className="font-semibold"><span className="mr-3 text-sky-700">{index + 1}.</span>{heading}</p><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></li>)}
              </ol>
            </div>
            <aside className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <Status>Cobertura parcial</Status>
              <h3 className="mt-4 text-xl font-semibold">303: controles preventivos, antes de AEAT</h3>
              <p className="mt-3 leading-7 text-slate-700">La prevalidación aplica reglas implementadas sobre datos de la declaración, pago, información bancaria y determinadas comprobaciones del contenedor del fichero. No cubre todas las reglas de AEAT. Algunas comprobaciones necesitan un resultado de liquidación fiable cuya integración productiva está pendiente de confirmar.</p>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-800">Generar o exportar un fichero, registrar un justificante y presentar una declaración son acciones distintas. OneData no anuncia presentación telemática automática ni aceptación garantizada por AEAT.</p>
            </aside>
          </section>

          <section id="facturacion" className={`${styles.section} border-t border-slate-200`}>
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionHeading eyebrow="Documentos comerciales" title="IRPF y total neto en la factura.">Diseños Word y RDLC que amplían el informe de venta de Business Central con información de retención y total neto.</SectionHeading>
                <ul className={styles.list}><li>Presentación de base e importe de IRPF e información fiscal asociada.</li><li>Total neto que contempla la retención en el documento.</li><li>Selección y revisión del diseño durante la implantación.</li></ul>
                <p className="mt-5 text-sm leading-7 text-slate-600">La validación funcional está pendiente y debe cubrir los escenarios de factura, abono, divisa, redondeo y reimpresión aplicables. El desglose por múltiples tipos de retención no se presenta como una capacidad terminada.</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
                <p className="text-sm font-semibold text-cyan-300">Integrado con estándar Microsoft</p>
                <h3 className="mt-4 text-2xl font-semibold">El QR que ya está en la factura registrada.</h3>
                <p className="mt-5 leading-7 text-slate-300">OneData visualiza la imagen QR almacenada en la factura registrada cuando está disponible. Su uso depende de la configuración y funcionalidad estándar de Microsoft para documentos electrónicos.</p>
                <div className="mt-7 border-t border-white/20 pt-6"><p className="font-semibold">Aportación OneData</p><p className="mt-2 text-sm leading-7 text-slate-300">Facilita consultar esa imagen desde la factura. No es un generador VERI*FACTU propio ni sustituye los mecanismos fiscales de Microsoft.</p></div>
              </div>
            </div>
          </section>

          <section id="tools" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="02 · Migración de datos" title="Prepara la información que dará continuidad al negocio.">Procesos de importación para incorporar datos a Business Central, con buffers de preparación y validaciones específicas según el ámbito.</SectionHeading>
            <dl className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {migrationRows.map(([heading, scope, condition]) => <div key={heading} className="grid gap-3 py-6 md:grid-cols-[0.7fr_1fr_1fr]"><dt className="font-semibold">{heading}</dt><dd className="leading-7 text-slate-700">{scope}</dd><dd className="text-sm leading-7 text-slate-600">{condition}</dd></div>)}
            </dl>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div><h3 className="text-xl font-semibold">Controles concretos por importador</h3><p className="mt-3 leading-7 text-slate-600">Por ejemplo, la carga de clientes comprueba campos obligatorios, longitudes y referencias a grupos contables, divisas o condiciones de pago, con mensajes de validación. Estos controles no implican idéntica cobertura en todos los procesos.</p></div>
              <div><h3 className="text-xl font-semibold">Una carga acordada y revisada</h3><p className="mt-3 leading-7 text-slate-600">Las estructuras de entrada, correspondencias, orden de carga y revisión de resultados se definen en la implantación. No se anuncia deduplicación, conciliación, transformación avanzada ni recuperación automática de cualquier carga.</p></div>
            </div>
          </section>
        </div>

        <section id="sync" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">03 · Multiempresa</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Define qué compartir y entre qué empresas.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">El motor configurable de OneData utiliza mapeos propios de tablas y campos, una empresa de origen y destinos habilitados. La selección de datos forma parte de la configuración del proyecto.</p>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[['Mapear', 'Selecciona tablas y campos compatibles, y las validaciones de campo aplicables.'], ['Elegir destinos', 'Habilita la configuración y las empresas que recibirán los datos.'], ['Ejecutar', 'Inicia manualmente la replicación de los registros de la tabla configurada.'], ['Revisar', 'Consulta registros de resultado, errores, omisiones y estado de la última ejecución.']].map(([heading, text], index) => <li key={heading} className="border-t border-white/20 pt-5"><p className="text-sm text-cyan-300">0{index + 1}</p><h3 className="mt-3 text-xl font-semibold">{heading}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></li>)}
            </ol>
            <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-2">
              <div><h3 className="text-xl font-semibold">Controles y trazabilidad</h3><p className="mt-3 leading-7 text-slate-300">Comprueba que existan mapeos habilitados y coherentes con la tabla. Omite el destino coincidente con el origen y excluye determinados campos no compatibles. La ejecución manual registra resultados por destino y puede indicar éxito parcial.</p><p className="mt-3 text-sm leading-7 text-slate-300">Las tablas autorizadas, sus dependencias y el tratamiento de incidencias deben revisarse antes de activar la replicación. No se ofrece sincronización universal ni resolución automática de conflictos.</p></div>
              <div><h3 className="text-xl font-semibold">Manual, automatismos y evolución</h3><ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-slate-300"><li><strong className="text-white">Ejecución manual:</strong> disponible en el motor configurable, sujeta a preparación del escenario.</li><li><strong className="text-white">Altas y cambios de clientes:</strong> automatismo implementado, pendiente de validación del escenario antes de su activación.</li><li><strong className="text-white">Evoluciones:</strong> planificación general, reintentos y recuperación avanzada quedan fuera del alcance disponible anunciado.</li></ul></div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section id="setup" className={styles.section}>
            <SectionHeading eyebrow="Configuración y despliegue" title="Prepara una implantación con alcance definido.">La configuración asistida facilita los parámetros iniciales de OneData. La preparación de paquetes reutiliza los paquetes de configuración de Business Central.</SectionHeading>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[['Configurar', 'Revisa parámetros fiscales, períodos, grupos de IRPF y configuración documental con los responsables del proceso.'], ['Clasificar', 'Organiza las tablas a incluir en los paquetes y su orden de preparación. Revisa los datos y dependencias necesarios.'], ['Controlar', 'La preparación de paquetes bloquea tablas clasificadas como transacciones, históricos, buffers o registros de actividad, además de determinadas tablas excluidas explícitamente.']].map(([heading, text]) => <div key={heading}><h3 className="text-xl font-semibold">{heading}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div>)}
            </div>
            <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">Estos controles corresponden a la preparación de paquetes; no deben extrapolarse al motor de sincronización. Son ayudas de implantación y no una plataforma completa de despliegue automatizado.</p>
          </section>

          <section id="cobertura" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="Alcance de la solución" title="Qué aporta OneData y qué necesita cada capacidad.">La cobertura distingue la implementación identificada de la validación del circuito completo. Las capacidades condicionadas deben confirmarse para la versión y el escenario de implantación.</SectionHeading>
            <p id="coverage-help" className="mt-6 text-sm text-slate-600">En pantallas pequeñas, desplaza la tabla horizontalmente. También puedes enfocarla y usar las flechas del teclado.</p>
            <div className={styles.tableScroll} role="region" aria-label="Matriz de cobertura funcional" aria-describedby="coverage-help" tabIndex={0}>
              <table>
                <caption>Cobertura funcional de OneData Base</caption>
                <thead><tr>{['Funcionalidad', 'Alcance OneData', 'Dependencia estándar Microsoft', 'Estado / condicionante'].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
                <tbody>{coverage.map(row => <tr key={row.feature}><th scope="row">{row.feature}</th><td>{row.onedata}</td><td>{row.standard}</td><td><Status>{row.status}</Status><p className="mt-3">{row.note}</p></td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section id="irpf" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="Modelos fiscales" title="Finalidad y soporte, sin equivalencias ambiguas.">La existencia de estructuras de trabajo para un modelo no certifica todos sus cálculos, exportaciones ni su presentación. Consulta el alcance antes de incorporar una obligación fiscal al proyecto.</SectionHeading>
            <p id="models-help" className="mt-6 text-sm text-slate-600">Los enlaces de modelo llevan a la información oficial de AEAT. La tabla admite desplazamiento horizontal y por teclado.</p>
            <div className={styles.tableScroll} role="region" aria-label="Alcance por modelo fiscal" aria-describedby="models-help" tabIndex={0}>
              <table>
                <caption>Modelos: finalidad, aportación y validación</caption>
                <thead><tr>{['Modelo', 'Finalidad', 'Alcance OneData', 'Dependencia estándar', 'Estado / observaciones'].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
                <tbody>{models.map(row => <tr key={row.model}><th scope="row"><a className={styles.textLink} href={row.href} aria-label={`Modelo ${row.model}: información en AEAT`}>{row.model} ↗</a></th><td>{row.purpose}</td><td>{row.onedata}</td><td>{row.standard}</td><td>{row.note}</td></tr>)}</tbody>
              </table>
            </div>
            <aside className="mt-6 rounded-3xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="text-lg font-semibold">Plazos según ejercicio, período y modalidad</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">Para el 111 trimestral, la regla general son los primeros veinte días naturales de abril, julio, octubre y enero, con traslado del vencimiento si coincide con un día inhábil. La presentación y la domiciliación tienen plazos diferentes; comprueba el calendario aplicable. <a className={styles.textLink} href={instructions111}>Instrucciones oficiales del 111</a>.</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">El 111/190 corresponde al ámbito del trabajo, actividades económicas y otras rentas contempladas; el 115/180, a arrendamientos de inmuebles urbanos. El 347 es una declaración informativa de operaciones con terceros. <a className={styles.textLink} href={calendarHref}>Consultar el calendario oficial de AEAT</a>.</p>
              <p className="mt-3 text-xs text-slate-600">Información fiscal contrastada el 13 de septiembre de 2026. Los vencimientos deben comprobarse para cada ejercicio.</p>
            </aside>
          </section>

          <section id="license" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="Implantación, requisitos y soporte" title="Confirma el encaje antes de empezar." />
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Requisitos a revisar</h3>
                <p className="mt-4 leading-7 text-slate-600">El paquete revisado declara Business Central 28.5 como versión mínima de aplicación. Este requisito técnico no equivale a una certificación de compatibilidad: la versión instalada, la localización y los circuitos de uso deben verificarse en pruebas.</p>
                <ul className={styles.list}>
                  <li>Dependencias Microsoft: E-Document Core y Document Registration in Spain, desde la versión 28.5.</li>
                  <li>Withholding Tax y Subscription Billing: versiones 28.3 con las actualizaciones requeridas por el paquete. Confirmar las versiones completas durante la instalación.</li>
                  <li>Permisos de los usuarios y empresas implicadas, configuración contable y fiscal, y diseños documentales.</li>
                  <li>Un entorno de pruebas y datos de muestra para validar los circuitos seleccionados antes de producción.</li>
                </ul>
              </div>
              <div><h3 className="text-xl font-semibold">Servicios y condiciones a concretar</h3><p className="mt-4 leading-7 text-slate-600">La propuesta debe especificar modalidad de licencia, empresas y entornos incluidos, implantación, formación, actualizaciones y soporte. El alcance depende de las necesidades y de la versión que se vaya a instalar.</p><p className="mt-4 leading-7 text-slate-600">Las tareas de mantenimiento especializado requieren un alcance y permisos diferenciados. La demo permite identificar el proceso que necesitas cubrir y las validaciones previas.</p><a className={`${styles.textLink} mt-5 inline-block`} href={demoHref}>Consultar requisitos y condiciones</a></div>
            </div>
          </section>

          <section id="preguntas" className={`${styles.section} border-t border-slate-200`}>
            <SectionHeading eyebrow="Preguntas frecuentes" title="Resuelve las dudas antes de decidir." />
            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map(([question, answer]) => <details key={question} className="py-1"><summary className="cursor-pointer py-5 pr-4 text-lg font-semibold marker:text-sky-700">{question}</summary><p className="max-w-4xl pb-6 pl-5 leading-8 text-slate-600">{answer}</p></details>)}
            </div>
          </section>

          <section id="contacto" className="mb-16 rounded-[32px] bg-sky-800 p-7 text-white sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-sm font-semibold uppercase tracking-widest text-sky-100">Hablemos de tu operativa</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Descubre cómo encaja OneData Base en tu empresa.</h2><p className="mt-5 max-w-2xl leading-8 text-sky-50">Cuéntanos qué necesitas cubrir en fiscalidad, migración o multiempresa y revisamos el alcance de una demostración.</p></div>
              <div><a href={demoHref} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-7 py-4 font-semibold text-sky-900 hover:bg-sky-50">Solicitar demo</a><p className="mt-4 text-sm text-sky-100">Se abrirá tu aplicación de correo.</p><a href="mailto:contacto@onedata.one" className="mt-2 inline-block text-sm underline underline-offset-4">contacto@onedata.one</a></div>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 px-6 py-8 text-sm lg:px-8"><p><strong>OneData Base</strong><span className="mt-1 block text-slate-600">Complementa Microsoft Dynamics 365 Business Central.</span></p><Link href="/solutions" className="font-semibold text-sky-800">Explorar soluciones OneData</Link></div>
      </footer>
    </div>
  );
}
