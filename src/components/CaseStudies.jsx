import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Reporte diario de stock automatizado",
    problem: "Generación manual de reportes consumía horas cada mañana y era propensa a errores.",
    solution:
      "Cron en Node/Express orquesta consultas al SAP Service Layer y a la plataforma e‑commerce; una Cloud Function procesa y arma Excel (por marca), calcula diferencias y estadísticas, y distribuye por email a los suscriptores.",
    impact: "Ahorro de varias horas diarias del equipo; el reporte llega al inicio de la jornada listo para accionar.",
    highlights: [
      "Orquestación por marcas y consolidación de ítems",
      "Excel con pestañas por marca y métricas de diferencias",
      "Entrega automática por correo a áreas suscriptoras",
    ],
    tech: ["Node.js", "Express", "SAP Service Layer", "GCP Cloud Functions", "Crons"],
  },
  {
    title: "Conciliación de órdenes y pagos (MP ↔ e‑commerce ↔ SAP)",
    problem: "Demoras en detectar desajustes de precios/pagos entre plataformas y SAP.",
    solution:
      "Pipeline nocturno que cruza pagos de Mercado Pago, datos de órdenes del e‑commerce y documentos en SAP; genera un reporte con desvíos y notifica a las áreas responsables.",
    impact: "Detección temprana de diferencias de precio y cobro; reducción de tiempos de resolución y pérdidas.",
    highlights: [
      "Match de order_id y líneas de ítems",
      "Corte mensual con ventas por marca y desglose por ítem",
      "Priorización de desvíos por impacto",
    ],
    tech: ["Node.js", "Express", "SAP Service Layer", "Mercado Pago API", "GCP Cloud Functions"],
  },
];

export default function CaseStudies() {
  return (
  <section id="case-studies" className="py-16 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 tracking-tight">Casos de estudio</h2>
  <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-8"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-slate-800/70 rounded-xl p-6 border border-slate-700/70 shadow-sm"
            >
              <h3 className="text-xl text-white mb-2 leading-snug">{c.title}</h3>
              <p className="text-slate-400 mb-1"><span className="text-slate-300">Problema:</span> {c.problem}</p>
              <p className="text-slate-400 mb-1"><span className="text-slate-300">Solución:</span> {c.solution}</p>
              <p className="text-slate-400"><span className="text-slate-300">Impacto:</span> {c.impact}</p>
              {c.highlights && (
                <ul className="mt-3 list-disc list-inside text-slate-400 space-y-1">
                  {c.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

        <div className="mt-4 flex flex-wrap gap-2">
                {c.tech.map(t => (
          <span key={t} className="text-xs bg-slate-900/60 text-slate-200 px-2 py-1 rounded border border-slate-700">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
