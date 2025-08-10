import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  return (
  <section id="experience" className="py-16 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 tracking-tight">Experiencia</h2>
  <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-8"></div>
        <ol className="relative border-l border-slate-700/60 ml-3 space-y-8">
          {experiences?.map((exp, idx) => (
            <li key={exp.company + exp.period} className="ml-6">
              {/* Nodo de la línea de tiempo */}
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -left-[9px] mt-1 flex h-4 w-4 items-center justify-center"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-400 ring-4 ring-slate-900"></span>
              </motion.span>

              <article className="bg-slate-800/70 rounded-xl p-5 border border-slate-700/70 shadow-sm">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-lg md:text-xl text-white leading-snug">{exp.role} – {exp.company}</h3>
                  <span className="text-xs md:text-sm text-slate-400">{exp.period} · {exp.location}</span>
                </header>
                {exp.summary && <p className="text-slate-300 mb-2">{exp.summary}</p>}
                {Array.isArray(exp.highlights) && (
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                )}
                {Array.isArray(exp.tech) && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs bg-slate-900/60 text-slate-200 px-2 py-1 rounded border border-slate-700">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
