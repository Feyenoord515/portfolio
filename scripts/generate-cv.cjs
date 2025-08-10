// Genera un PDF simple del CV en /public usando PDFKit
// Ejecutar: npm run cv:build

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'Nahuel-Enrique-Molinari-CV.pdf');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Contenido del CV (texto plano + mínimos estilos tipográficos)
const cv = {
  name: 'Nahuel Enrique Molinari',
  title: 'Full Stack Developer | Integración de Sistemas | SAP | E-commerce',
  contact: 'n.enriquemolinari@gmail.com | +54 11 5220-1322 | Buenos Aires, Argentina',
  links: [
    { label: 'GitHub', display: 'github.com/Feyenoord515', url: 'https://github.com/Feyenoord515' },
    { label: 'Portfolio', display: 'nahuelenriqueportfolio.netlify.app', url: 'https://nahuelenriqueportfolio.netlify.app/' }
  ],
  profile: 'Desarrollador Full Stack con experiencia en automatización de procesos, integración de sistemas empresariales y desarrollo de soluciones e-commerce. Trabajo actualmente con tecnologías PERN/MERN, integraciones con SAP Business One Service Layer, desarrollo de APIs REST, y despliegue de soluciones en entornos como Google Cloud (Firebase, Cloud Functions, Maps API), Vercel y Netlify. Me apasiona optimizar procesos, diseñar soluciones robustas y escalar proyectos mediante buenas prácticas de desarrollo.',
  stack: {
    frontend: 'HTML, CSS, Tailwind, JavaScript, React, Redux',
    backend: 'Node.js, Express, Nest.js, Firebase (Realtime Database, Firestore), Cloud Functions',
    db: 'PostgreSQL, MySQL, MongoDB, Sequelize, Mongoose',
    devops: 'Docker, Vercel, Netlify, Google Cloud (Blaze Plan)',
    integrations: 'SAP Business One (Service Layer), Webhooks, Facturante API',
    tools: 'Git, Postman, Excel scripting, APIs externas (Maps, Weather, etc.)'
  },
  experience: [
    {
      role: 'Middleware & Full Stack Developer – Distrinando',
      period: 'Ago 2023 – Presente · Buenos Aires, Argentina',
      bullets: [
        'Integraciones e-commerce (VTEX → Magento → Shopify) ↔ SAP HANA con Node.js + Express + SAP Service Layer.',
        'Automatización de órdenes: direcciones envío/facturación, lotes, descuentos y pagos diferenciados.',
        'Facturación dinámica (reserva o común) según disponibilidad de stock en SAP.',
        'Emisión fiscal con Facturante API y Webhooks para foliado automático.',
        'Conciliaciones y reportes (ventas, stock, clientes) y automatización administrativa.',
        'Funciones críticas en Google Cloud Functions.'
      ]
    },
    {
      role: 'Full Stack Developer – IemData',
      period: 'Feb 2023 – Oct 2023 · Buenos Aires, Argentina',
      bullets: [
        'Funcionalidades para tiendas con React (Vite), Redux, Node.js, Nest, Express.',
        'Conexión con MySQL, PostgreSQL y MongoDB.',
        'Participación de punta a punta aplicando Scrum.'
      ]
    },
    {
      role: 'Full Stack Developer – ONG Grupo Barrial',
      period: 'Dic 2022 – Ene 2023 · Buenos Aires, Argentina',
      bullets: [
        'Herramientas educativas con Firebase, Docker y AntDesign.',
        'Apps: Ta-te-ti, reproductor de música, app del clima, entre otras.'
      ]
    }
  ],
  projects: [
    'ChatApp (2023): React, Redux, Firebase Firestore/Auth.',
    'Recipes App (2023): React, Redux, Node.js, Express, PostgreSQL.',
    'Wine E-commerce (2022): búsquedas, filtros y administración.'
  ],
  education: [
    'Desarrollador Full Stack Web – Henry Bootcamp (700 hs) · 2022',
    'Curso de SAP Business One – Prime Institute · 2023',
    'Curso de Firebase para Web – YouTube · 2023',
    'Curso de Docker – Udemy · 2022',
    'Curso de Metodología Scrum – Udemy · 2022'
  ],
  languages: 'Inglés: Nivel Intermedio (B1)'
};

function writeBullets(doc, items, opts = {}) {
  const { indent = 18, bullet = '•', lineGap = 4 } = opts;
  items.forEach((t) => {
    doc.text(`${bullet} ${t}`, { indent, lineGap });
  });
}

function createPdf() {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);
  // Encabezado
  doc
    .fontSize(22)
    .font('Helvetica-Bold')
    .text(cv.name)
    .moveDown(0.2)
    .fontSize(12)
    .font('Helvetica')
    .fillColor('#444')
    .text(cv.title)
    .moveDown(0.2)
    .text(cv.contact)
    .moveDown(0.2)
    .fillColor('#1d4ed8')
    // Links clicables en una misma línea
    .text(`${cv.links[0].label}: ${cv.links[0].display}  ·  ${cv.links[1].label}: ${cv.links[1].display}`, {
      link: undefined,
      underline: false
    })
    .fillColor('#111')
    .moveDown();

  // Reemplazar la línea anterior por dos enlaces con regiones clicables separadas
  // Para conservar estilo simple, dibujamos sobre la misma línea con posiciones calculadas mínimas
  try {
    const xStart = doc.x;
    const yStart = doc.y - 16; // subir a la línea de links impresa
    // Medidas aproximadas de textos para colocar rects de link
    const txt1 = `${cv.links[0].label}: ${cv.links[0].display}`;
    const sep = '  ·  ';
    const txt2 = `${cv.links[1].label}: ${cv.links[1].display}`;
    const w1 = doc.widthOfString(txt1, { font: 'Helvetica', size: 12 });
    const wSep = doc.widthOfString(sep, { font: 'Helvetica', size: 12 });
    const h = doc.currentLineHeight();
    // Link 1
    doc.link(xStart, yStart, w1, h, { url: cv.links[0].url });
    // Link 2
    const x2 = xStart + w1 + wSep;
    const w2 = doc.widthOfString(txt2, { font: 'Helvetica', size: 12 });
    doc.link(x2, yStart, w2, h, { url: cv.links[1].url });
  } catch {}

  // Perfil
  doc.font('Helvetica-Bold').text('Perfil Profesional').moveDown(0.2);
  doc.font('Helvetica').fontSize(11).text(cv.profile, { lineGap: 4 }).moveDown();

  // Stack
  doc.font('Helvetica-Bold').text('Stack Tecnológico').moveDown(0.2);
  doc.font('Helvetica').fontSize(11);
  doc.text(`Frontend: ${cv.stack.frontend}`);
  doc.text(`Backend: ${cv.stack.backend}`);
  doc.text(`Bases de Datos: ${cv.stack.db}`);
  doc.text(`Infraestructura y DevOps: ${cv.stack.devops}`);
  doc.text(`Integraciones Empresariales: ${cv.stack.integrations}`);
  doc.text(`Herramientas adicionales: ${cv.stack.tools}`).moveDown();

  // Experiencia
  doc.font('Helvetica-Bold').text('Experiencia Profesional').moveDown(0.4);
  cv.experience.forEach((e) => {
    doc.font('Helvetica-Bold').text(e.role);
    doc.font('Helvetica-Oblique').fillColor('#555').text(e.period).fillColor('#111');
    writeBullets(doc, e.bullets, { indent: 14 });
    doc.moveDown(0.6);
  });

  // Proyectos
  doc.font('Helvetica-Bold').text('Proyectos Destacados').moveDown(0.2);
  writeBullets(doc, cv.projects, { indent: 14 });
  doc.moveDown(0.6);

  // Formación
  doc.font('Helvetica-Bold').text('Formación Académica').moveDown(0.2);
  writeBullets(doc, cv.education, { indent: 14 });
  doc.moveDown(0.6);

  // Idiomas
  doc.font('Helvetica-Bold').text('Idiomas').moveDown(0.2);
  doc.font('Helvetica').text(cv.languages);
  doc.end();
  stream.on('finish', () => {
    console.log(`CV generado en: ${outPath}`);
  });
}

createPdf();
