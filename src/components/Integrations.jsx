import React from "react";
import { integrations } from "../data";

export default function Integrations() {
  return (
  <section id="integrations" className="py-16 bg-slate-950 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 tracking-tight">Integraciones & Automatización</h2>
  <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-8"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {integrations?.map((it) => (
            <article key={it.title} className="bg-slate-800/70 rounded-xl p-6 border border-slate-700/70 shadow-sm">
              <h3 className="text-xl text-white mb-2 leading-snug">{it.title}</h3>
              <p className="text-slate-300 mb-3">{it.description}</p>
              {Array.isArray(it.capabilities) && (
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  {it.capabilities.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tech?.map(t => (
                  <span key={t} className="text-xs bg-slate-900/60 text-slate-200 px-2 py-1 rounded border border-slate-700">{t}</span>
                ))}
              </div>
              {it.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-indigo-400 hover:text-indigo-300 underline">
                  {l.label}
                </a>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
