import fs from "node:fs";
import path from "node:path";

const sourceDir = "C:\\Users\\Tomas Forne Martinez\\Documents\\AL\\OneData Property Management\\docs\\Auditoria\\Registro de cambios";
const outputDir = path.resolve("public/solutions/property-management/whats-new");
const landingHref = "../index.html";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatInline(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function stripMarkdownInline(text) {
  return text.replace(/`([^`]+)`/g, "$1");
}

function parseMetadata(content) {
  const lines = content.split(/\r?\n/);
  const metadata = {};
  let inGeneralData = false;

  for (const line of lines) {
    if (line.trim() === "## Datos generales") {
      inGeneralData = true;
      continue;
    }

    if (inGeneralData && line.startsWith("## ")) {
      break;
    }

    const match = line.match(/^- ([^:]+):\s*(.*)$/);
    if (inGeneralData && match) {
      metadata[match[1].trim()] = match[2].trim();
    }
  }

  return metadata;
}

function markdownToHtml(content) {
  const lines = content.split(/\r?\n/);
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      const level = trimmed.match(/^#+/)[0].length;
      const text = trimmed.replace(/^#{1,6}\s+/, "");
      blocks.push(`<h${level}>${formatInline(text)}</h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|")) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      blocks.push(renderTable(tableLines));
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${formatInline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    const paragraphLines = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,6}\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("|") &&
      !lines[index].trim().startsWith("- ")
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push(`<p>${formatInline(paragraphLines.join(" "))}</p>`);
  }

  return blocks.join("\n");
}

function renderTable(tableLines) {
  const rows = tableLines.map((line) =>
    line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim())
  );

  const [head, separator, ...body] = rows;
  if (!head || !separator) {
    return "";
  }

  const headHtml = `<thead><tr>${head.map((cell) => `<th>${formatInline(cell)}</th>`).join("")}</tr></thead>`;
  const bodyHtml = body.length
    ? `<tbody>${body
        .map((row) => `<tr>${row.map((cell) => `<td>${formatInline(cell)}</td>`).join("")}</tr>`)
        .join("")}</tbody>`
    : "";

  return `<div class="table-wrap"><table>${headHtml}${bodyHtml}</table></div>`;
}

function buildPage({ title, description, body, metadata, releaseHref, sourceName }) {
  const version = metadata.Version || title;
  const date = metadata["Fecha del registro"] || "Pendiente";
  const changeType = metadata["Tipo de cambio"] || "Actualización";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(version)} | What's new | OneData Property Management</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <style>
    :root { --ink:#132238; --muted:#5f6f82; --line:#d8e1ea; --card:#ffffff; --panel:#f4f8fb; --brand:#0f6cbd; --brand-deep:#0a4f8a; --accent:#dff0ff; --max:1100px; --shadow:0 18px 40px rgba(15,35,56,.08); --radius:20px; --radius-sm:14px; }
    * { box-sizing:border-box; }
    body { margin:0; font-family:"Segoe UI","Helvetica Neue",Arial,sans-serif; color:var(--ink); line-height:1.65; background:linear-gradient(180deg,#edf5fb 0%, #ffffff 26%); }
    a { color:inherit; text-decoration:none; }
    code { padding:.14rem .36rem; border-radius:999px; background:#edf4fa; font-family:Consolas,"SFMono-Regular",monospace; font-size:.92em; }
    .container { width:min(var(--max), calc(100% - 40px)); margin:0 auto; }
    .topbar { position:sticky; top:0; z-index:20; border-bottom:1px solid rgba(216,225,234,.88); background:rgba(255,255,255,.92); backdrop-filter:blur(14px); }
    .topbar-inner { min-height:72px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .brand { display:flex; align-items:center; gap:12px; font-weight:700; }
    .brand-mark { width:38px; height:38px; border-radius:12px; display:grid; place-items:center; color:#fff; background:linear-gradient(135deg,var(--brand),#4da3e6); }
    .nav-actions { display:flex; gap:12px; flex-wrap:wrap; }
    .nav-link, .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:12px 16px; border-radius:999px; font-weight:600; }
    .nav-link { border:1px solid var(--line); background:#fff; }
    .hero { padding:58px 0 30px; }
    .hero-grid { display:grid; grid-template-columns:1.2fr .8fr; gap:22px; align-items:start; }
    .eyebrow { display:inline-flex; align-items:center; gap:10px; padding:7px 12px; border-radius:999px; font-size:.84rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--brand); background:var(--accent); }
    .eyebrow-dot { width:8px; height:8px; border-radius:999px; background:var(--brand); }
    h1 { margin:16px 0 12px; font-size:clamp(2.4rem,4.6vw,4.3rem); line-height:1.03; letter-spacing:-.04em; }
    .hero-copy { margin:0; color:#425466; font-size:1.08rem; max-width:760px; }
    .summary-card, .meta-card, .content-card { background:rgba(255,255,255,.92); border:1px solid rgba(216,225,234,.92); border-radius:var(--radius); box-shadow:var(--shadow); }
    .summary-card { padding:26px; }
    .meta-card { padding:24px; background:linear-gradient(180deg,#f7fbff 0%, #ffffff 100%); }
    .meta-card h2 { margin:0 0 14px; font-size:1.1rem; }
    .meta-list { display:grid; gap:12px; margin:0; }
    .meta-row { display:grid; gap:4px; }
    .meta-row strong { font-size:.84rem; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); }
    .meta-row span { font-size:1rem; color:var(--ink); }
    .hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:22px; }
    .btn-primary { color:#fff; background:var(--brand); }
    .btn-primary:hover { background:var(--brand-deep); }
    .btn-secondary { color:var(--ink); background:#fff; border:1px solid var(--line); }
    .content { padding:8px 0 64px; }
    .content-card { padding:34px; }
    .content-card h1 { font-size:2.2rem; margin-top:0; }
    .content-card h2 { margin:34px 0 12px; font-size:1.65rem; letter-spacing:-.02em; }
    .content-card h3 { margin:24px 0 10px; font-size:1.15rem; }
    .content-card p { margin:0 0 16px; color:#314355; }
    .content-card ul { margin:0 0 18px; padding-left:22px; color:#314355; }
    .content-card li { margin-bottom:10px; }
    .table-wrap { margin:18px 0 24px; overflow:auto; border:1px solid var(--line); border-radius:16px; background:#fff; }
    table { width:100%; border-collapse:collapse; min-width:720px; }
    th, td { padding:14px 16px; text-align:left; vertical-align:top; border-bottom:1px solid var(--line); }
    th { background:#eff6fb; font-size:.84rem; letter-spacing:.04em; text-transform:uppercase; color:#36506a; }
    tr:last-child td { border-bottom:none; }
    .source-note { margin-top:28px; padding-top:18px; border-top:1px solid var(--line); color:var(--muted); font-size:.94rem; }
    @media (max-width: 900px) { .hero-grid { grid-template-columns:1fr; } }
    @media (max-width: 600px) { .container { width:min(var(--max), calc(100% - 24px)); } .content-card, .summary-card, .meta-card { padding:22px; } .topbar-inner { align-items:flex-start; flex-direction:column; padding:14px 0; } }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand">
        <div class="brand-mark">OF</div>
        <span>OneData Property Management</span>
      </div>
      <div class="nav-actions">
        <a class="nav-link" href="index.html">Índice de versiones</a>
        <a class="nav-link" href="${landingHref}">Volver a la landing</a>
      </div>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="summary-card">
          <div class="eyebrow"><span class="eyebrow-dot"></span> What's new</div>
          <h1>${escapeHtml(version)}</h1>
          <p class="hero-copy">${escapeHtml(description)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contenido">Ver detalle</a>
            <a class="btn btn-secondary" href="index.html">Todas las versiones</a>
          </div>
        </div>
        <aside class="meta-card">
          <h2>Ficha de la actualización</h2>
          <div class="meta-list">
            <div class="meta-row"><strong>Versión</strong><span>${escapeHtml(version)}</span></div>
            <div class="meta-row"><strong>Fecha del registro</strong><span>${escapeHtml(date)}</span></div>
            <div class="meta-row"><strong>Tipo de cambio</strong><span>${escapeHtml(changeType)}</span></div>
            <div class="meta-row"><strong>Aplicación</strong><span>${escapeHtml(metadata.Aplicacion || "Property Management")}</span></div>
            <div class="meta-row"><strong>Publisher</strong><span>${escapeHtml(metadata.Publisher || "OneData")}</span></div>
            <div class="meta-row"><strong>Origen</strong><span>${escapeHtml(sourceName)}</span></div>
          </div>
        </aside>
      </div>
    </section>
    <section class="content" id="contenido">
      <div class="container">
        <article class="content-card">
${body}
          <div class="source-note">
            Página generada automáticamente a partir del fichero de auditoría <code>${escapeHtml(sourceName)}</code>.
          </div>
        </article>
      </div>
    </section>
  </main>
</body>
</html>`;
}

function buildIndex(releases) {
  const cards = releases
    .map((release) => {
      const tags = [
        release.metadata["Tipo de cambio"] || "Actualización",
        release.metadata["Fecha del registro"] || "Pendiente",
      ];

      return `<article class="release-card">
        <div class="release-top">
          <div>
            <span class="pill">Versión ${escapeHtml(release.version)}</span>
            <h2>${escapeHtml(release.version)}</h2>
          </div>
          <a class="card-link" href="${escapeHtml(release.fileName)}">Abrir</a>
        </div>
        <p>${escapeHtml(release.description)}</p>
        <div class="meta-row">
          ${tags.map((tag) => `<span class="meta-pill">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </article>`;
    })
    .join("\n");

  const latest = releases[0];

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>What's new | OneData Property Management</title>
  <meta name="description" content="Índice de novedades y registros de cambios de OneData Property Management." />
  <style>
    :root { --ink:#132238; --muted:#5f6f82; --line:#d8e1ea; --card:#ffffff; --panel:#f4f8fb; --brand:#0f6cbd; --brand-deep:#0a4f8a; --accent:#dff0ff; --max:1120px; --shadow:0 18px 40px rgba(15,35,56,.08); --radius:22px; }
    * { box-sizing:border-box; }
    body { margin:0; font-family:"Segoe UI","Helvetica Neue",Arial,sans-serif; color:var(--ink); line-height:1.6; background:linear-gradient(180deg,#eff6fb 0%, #ffffff 28%); }
    a { color:inherit; text-decoration:none; }
    .container { width:min(var(--max), calc(100% - 40px)); margin:0 auto; }
    .topbar { position:sticky; top:0; z-index:20; border-bottom:1px solid rgba(216,225,234,.88); background:rgba(255,255,255,.92); backdrop-filter:blur(14px); }
    .topbar-inner { min-height:72px; display:flex; align-items:center; justify-content:space-between; gap:16px; }
    .brand { display:flex; align-items:center; gap:12px; font-weight:700; }
    .brand-mark { width:38px; height:38px; border-radius:12px; display:grid; place-items:center; color:#fff; background:linear-gradient(135deg,var(--brand),#4da3e6); }
    .nav-link, .btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:12px 16px; border-radius:999px; font-weight:600; }
    .nav-link { border:1px solid var(--line); background:#fff; }
    .hero { padding:62px 0 28px; }
    .hero-grid { display:grid; grid-template-columns:1.08fr .92fr; gap:24px; align-items:stretch; }
    .hero-card, .latest-card, .release-card { background:rgba(255,255,255,.94); border:1px solid rgba(216,225,234,.92); border-radius:var(--radius); box-shadow:var(--shadow); }
    .hero-card { padding:30px; }
    .eyebrow { display:inline-flex; align-items:center; gap:10px; padding:7px 12px; border-radius:999px; font-size:.84rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--brand); background:var(--accent); }
    .eyebrow-dot { width:8px; height:8px; border-radius:999px; background:var(--brand); }
    h1 { margin:16px 0 12px; font-size:clamp(2.5rem,4.8vw,4.5rem); line-height:1.02; letter-spacing:-.04em; }
    .hero-copy { margin:0; color:#425466; font-size:1.08rem; max-width:700px; }
    .hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:22px; }
    .btn-primary { color:#fff; background:var(--brand); }
    .btn-primary:hover { background:var(--brand-deep); }
    .btn-secondary { color:var(--ink); background:#fff; border:1px solid var(--line); }
    .latest-card { padding:26px; background:linear-gradient(180deg,#f7fbff 0%, #ffffff 100%); }
    .latest-card h2 { margin:10px 0 8px; font-size:1.8rem; letter-spacing:-.03em; }
    .latest-card p { margin:0 0 18px; color:#425466; }
    .latest-meta { display:grid; gap:12px; }
    .latest-meta strong { display:block; font-size:.8rem; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); }
    .latest-meta span { color:var(--ink); }
    .section { padding:8px 0 66px; }
    .section-head { margin:0 0 22px; }
    .section-head h2 { margin:0 0 8px; font-size:2rem; letter-spacing:-.03em; }
    .section-head p { margin:0; color:var(--muted); }
    .release-list { display:grid; gap:18px; }
    .release-card { padding:24px; }
    .release-top { display:flex; align-items:flex-start; justify-content:space-between; gap:14px; margin-bottom:12px; }
    .release-card h2 { margin:12px 0 8px; font-size:1.35rem; letter-spacing:-.02em; }
    .release-card p { margin:0; color:#425466; }
    .pill, .meta-pill { display:inline-flex; align-items:center; border-radius:999px; font-weight:600; }
    .pill { padding:7px 12px; background:#ecf4fb; color:var(--brand); font-size:.9rem; }
    .meta-row { display:flex; flex-wrap:wrap; gap:10px; margin-top:16px; }
    .meta-pill { padding:8px 12px; background:#f6f9fc; border:1px solid var(--line); color:#39526b; font-size:.92rem; }
    .card-link { padding:10px 14px; border-radius:999px; color:#fff; background:var(--brand); font-weight:600; white-space:nowrap; }
    @media (max-width: 900px) { .hero-grid { grid-template-columns:1fr; } }
    @media (max-width: 600px) { .container { width:min(var(--max), calc(100% - 24px)); } .topbar-inner, .release-top { align-items:flex-start; flex-direction:column; } .hero-card, .latest-card, .release-card { padding:22px; } }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand">
        <div class="brand-mark">OF</div>
        <span>OneData Property Management</span>
      </div>
      <a class="nav-link" href="${landingHref}">Volver a la landing</a>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-card">
          <div class="eyebrow"><span class="eyebrow-dot"></span> What's new</div>
          <h1>Novedades y registro de cambios</h1>
          <p class="hero-copy">Consulta las versiones publicadas de OneData Property Management con un índice navegable y una página dedicada por cada documento de auditoría.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${escapeHtml(latest.fileName)}">Abrir última versión</a>
            <a class="btn btn-secondary" href="${landingHref}">Volver a la solución</a>
          </div>
        </div>
        <aside class="latest-card">
          <div class="eyebrow">Última publicación</div>
          <h2>${escapeHtml(latest.version)}</h2>
          <p>${escapeHtml(latest.description)}</p>
          <div class="latest-meta">
            <div><strong>Fecha del registro</strong><span>${escapeHtml(latest.metadata["Fecha del registro"] || "Pendiente")}</span></div>
            <div><strong>Tipo de cambio</strong><span>${escapeHtml(latest.metadata["Tipo de cambio"] || "Actualización")}</span></div>
            <div><strong>Documento origen</strong><span>${escapeHtml(latest.sourceName)}</span></div>
          </div>
        </aside>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>Índice de páginas</h2>
          <p>Cada entrada enlaza a la versión publicada a partir de su fichero Markdown de auditoría.</p>
        </div>
        <div class="release-list">
${cards}
        </div>
      </div>
    </section>
  </main>
</body>
</html>`;
}

function extractDescription(content, metadata) {
  const executiveMatch = content.match(/## Resumen ejecutivo\s+([\s\S]*?)(?:\n## |\s*$)/);
  if (executiveMatch) {
    const raw = executiveMatch[1]
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .join(" ");

    const normalized = stripMarkdownInline(raw);
    if (normalized.length <= 320) {
      return normalized;
    }

    return normalized.slice(0, 317).trimEnd() + "...";
  }

  return `Registro de cambios correspondiente a la versión ${metadata.Version || "actual"} de OneData Property Management.`;
}

fs.mkdirSync(outputDir, { recursive: true });
for (const existingEntry of fs.readdirSync(outputDir, { withFileTypes: true })) {
  if (existingEntry.isFile() && existingEntry.name.toLowerCase().endsWith(".html")) {
    fs.unlinkSync(path.join(outputDir, existingEntry.name));
  }
}

const releases = fs
  .readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"))
  .map((entry) => {
    const fullPath = path.join(sourceDir, entry.name);
    const content = fs.readFileSync(fullPath, "utf8");
    const metadata = parseMetadata(content);
    const version = metadata.Version || entry.name.replace(/^Registro de cambios - /i, "").replace(/\.md$/i, "");
    const description = extractDescription(content, metadata);
    const versionToken = entry.name.match(/v[\d.]+/i)?.[0] || version;
    const fileName = `${slugify(versionToken)}.html`;
    const pageHtml = buildPage({
      title: version,
      description,
      body: markdownToHtml(content),
      metadata,
      releaseHref: fileName,
      sourceName: entry.name,
    });

    fs.writeFileSync(path.join(outputDir, fileName), pageHtml, "utf8");

    return {
      version,
      description,
      metadata,
      fileName,
      sourceName: entry.name,
      sortKey: metadata["Fecha del registro"] || entry.name,
    };
  })
  .sort((left, right) => String(right.sortKey).localeCompare(String(left.sortKey)));

if (releases.length === 0) {
  throw new Error(`No se han encontrado ficheros Markdown en ${sourceDir}`);
}

fs.writeFileSync(path.join(outputDir, "index.html"), buildIndex(releases), "utf8");

console.log(`Generadas ${releases.length} releases en ${outputDir}`);
