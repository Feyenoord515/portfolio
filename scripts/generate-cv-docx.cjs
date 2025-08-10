// Genera un DOCX del CV en /public usando la librería 'docx'
// Ejecutar: npm run cv:docx

const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType
} = require('docx');

const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'Nahuel-Enrique-Molinari-CV.docx');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const cv = {
  name: 'Nahuel Enrique Molinari',
  title: 'Full Stack Developer | Integración de Sistemas | SAP | E-commerce',
  contact: 'n.enriquemolinari@gmail.com · +54 11 5220-1322 · Buenos Aires, Argentina',
  links: ['GitHub: github.com/Feyenoord515', 'Portfolio: Netlify'],
  profile:
    'Desarrollador Full Stack con experiencia en automatización de procesos, integración de sistemas empresariales y desarrollo de soluciones e-commerce. Trabajo con PERN/MERN, SAP Business One Service Layer, APIs REST y despliegue en Google Cloud/Vercel/Netlify.',
  stack: {
    frontend: 'HTML, CSS, Tailwind, JavaScript, React, Redux',
    backend: 'Node.js, Express, Nest.js, Firebase (Realtime Database, Firestore), Cloud Functions',
    db: 'PostgreSQL, MySQL, MongoDB, Sequelize, Mongoose',
    devops: 'Docker, Vercel, Netlify, Google Cloud (Blaze Plan)',
    integrations: 'SAP Business One (Service Layer), Webhooks, Facturante API',
    tools: 'Git, Postman, Excel scripting, APIs externas (Maps, Weather, etc.)',
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
        'Funciones críticas en Google Cloud Functions.',
      ],
    },
    {
      role: 'Full Stack Developer – IemData',
      period: 'Feb 2023 – Oct 2023 · Buenos Aires, Argentina',
      bullets: [
        'Funcionalidades para tiendas con React (Vite), Redux, Node.js, Nest, Express.',
        'Conexión con MySQL, PostgreSQL y MongoDB.',
        'Participación de punta a punta aplicando Scrum.',
      ],
    },
    {
      role: 'Full Stack Developer – ONG Grupo Barrial',
      period: 'Dic 2022 – Ene 2023 · Buenos Aires, Argentina',
      bullets: [
        'Herramientas educativas con Firebase, Docker y AntDesign.',
        'Apps: Ta-te-ti, reproductor de música, app del clima, entre otras.',
      ],
    },
  ],
  projects: [
    'ChatApp (2023): React, Redux, Firebase Firestore/Auth.',
    'Recipes App (2023): React, Redux, Node.js, Express, PostgreSQL.',
    'Wine E-commerce (2022): búsquedas, filtros y administración.',
  ],
  education: [
    'Desarrollador Full Stack Web – Henry Bootcamp (700 hs) · 2022',
    'Curso de SAP Business One – Prime Institute · 2023',
    'Curso de Firebase para Web – YouTube · 2023',
    'Curso de Docker – Udemy · 2022',
    'Curso de Metodología Scrum – Udemy · 2022',
  ],
  languages: 'Inglés: Nivel Intermedio (B1)',
};

const heading = (text) =>
  new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 140, after: 80 },
  });

const paragraph = (text) =>
  new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { after: 80 },
  });

const bullet = (text) =>
  new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    bullet: { level: 0 },
    spacing: { after: 60 },
  });

async function build() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: cv.name, bold: true, size: 36 }),
            ],
            spacing: { after: 80 },
          }),
          new Paragraph({
            children: [new TextRun({ text: cv.title, size: 22 })],
            spacing: { after: 40 },
          }),
          new Paragraph({
            children: [new TextRun({ text: cv.contact, size: 20, color: '666666' })],
            spacing: { after: 100 },
          }),
          paragraph(cv.links.join('  ·  ')),

          heading('Perfil Profesional'),
          paragraph(cv.profile),

          heading('Stack Tecnológico'),
          paragraph(`Frontend: ${cv.stack.frontend}`),
          paragraph(`Backend: ${cv.stack.backend}`),
          paragraph(`Bases de Datos: ${cv.stack.db}`),
          paragraph(`Infraestructura y DevOps: ${cv.stack.devops}`),
          paragraph(`Integraciones Empresariales: ${cv.stack.integrations}`),
          paragraph(`Herramientas adicionales: ${cv.stack.tools}`),

          heading('Experiencia Profesional'),
          ...cv.experience.flatMap((e) => [
            new Paragraph({ children: [new TextRun({ text: e.role, bold: true, size: 24 })], spacing: { after: 20 } }),
            new Paragraph({ children: [new TextRun({ text: e.period, italics: true, size: 20, color: '555555' })], spacing: { after: 40 } }),
            ...e.bullets.map((b) => bullet(b)),
          ]),

          heading('Proyectos Destacados'),
          ...cv.projects.map((p) => bullet(p)),

          heading('Formación Académica'),
          ...cv.education.map((ed) => bullet(ed)),

          heading('Idiomas'),
          paragraph(cv.languages),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buffer);
  console.log(`CV DOCX generado en: ${outPath}`);
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
