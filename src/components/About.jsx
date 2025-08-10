import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const bubbles = [
    { label: "React", key: "react", color: "bg-cyan-500/20 text-cyan-300", top: "8%", left: "6%" },
    { label: "Node.js", key: "node", color: "bg-emerald-500/20 text-emerald-300", top: "12%", right: "6%" },
    { label: "Express", key: "express", color: "bg-lime-500/20 text-lime-300", bottom: "14%", left: "10%" },
    { label: "SAP SL", key: "sap", color: "bg-amber-500/20 text-amber-300", bottom: "8%", right: "8%" },
    { label: "PostgreSQL", key: "postgres", color: "bg-sky-500/20 text-sky-300", top: "40%", left: "-2%" },
    { label: "MongoDB", key: "mongodb", color: "bg-green-500/20 text-green-300", top: "46%", right: "-2%" },
    { label: "Docker", key: "docker", color: "bg-blue-500/20 text-blue-300", top: "0%", right: "38%" },
    { label: "Firebase", key: "firebase", color: "bg-yellow-500/20 text-yellow-300", bottom: "0%", left: "38%" },
  ];

  const Icon = ({ name }) => {
    const common = "w-4 h-4 md:w-5 md:h-5 mr-1 opacity-90";
    switch (name) {
      case "react":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <ellipse cx="12" cy="12" rx="10" ry="4" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            </g>
          </svg>
        );
      case "node":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <path d="M12 2l8 4.6v10.8L12 22l-8-4.6V6.6L12 2z" fill="currentColor" opacity=".2" />
            <path d="M12 6.2l4.8 2.8v5.9L12 17.7l-4.8-2.8V9L12 6.2z" fill="currentColor" />
          </svg>
        );
      case "docker":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <rect x="3" y="10" width="3" height="3" fill="currentColor" />
            <rect x="7" y="10" width="3" height="3" fill="currentColor" />
            <rect x="11" y="10" width="3" height="3" fill="currentColor" />
            <rect x="7" y="6" width="3" height="3" fill="currentColor" />
            <path d="M20 12c-1 0-1.5.4-2 1 0 0-1.5-.3-2 .8-.4.7 0 1.7.6 2.2 1 .8 2.7.8 3.7 0 .8-.6 1.2-1.4 1.2-2.5 0-.7-.6-1.5-1.5-1.5z" fill="currentColor" />
          </svg>
        );
      case "firebase":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <path d="M5 17l3-12 3 6 3-4 2 10-8 3-3-3z" fill="currentColor" />
          </svg>
        );
      case "postgres":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <path d="M6 8c0-2.2 2.7-4 6-4s6 1.8 6 4-2.7 4-6 4-6-1.8-6-4z" fill="currentColor" />
            <path d="M8 12c0 2 1.8 4 4 4s4-2 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        );
      case "mongodb":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <path d="M12 3s4 4 4 10-4 8-4 8-4-2-4-8 4-10 4-10z" fill="currentColor" />
          </svg>
        );
      case "express":
        return (
          <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
            <text x="2" y="16" fontSize="12" fill="currentColor">Ex</text>
          </svg>
        );
      case "sap":
        return (
          <svg viewBox="0 0 48 16" className={common} aria-hidden="true">
            <rect x="0" y="2" width="48" height="12" rx="2" fill="currentColor" opacity=".2" />
            <text x="4" y="12" fontSize="8" fill="currentColor">SAP SL</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="pt-2 pb-8 md:pt-4 md:pb-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 scroll-mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 min-h-[calc(100svh-64px)]">
        <div className="md:w-5/12 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-3 font-semibold text-slate-50 tracking-tight">
            Soy Nahuel,
            <br className="hidden lg:inline-block" />
            desarrollador Full Stack
          </h1>
          <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-5"></div>

          <p className="mb-8 leading-relaxed text-slate-200 text-base md:text-lg">
            Full Stack orientado a integraciones y automatización. Diseño y opero
            middleware robusto entre e‑commerce y sistemas ERP (SAP Business One Service
            Layer), APIs con Node/Express y frontends modernos en React. Me enfoco en
            calidad, observabilidad y entrega continua para lograr impacto real en el negocio.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              ¡Contáctame!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Ver proyectos
            </a>
          </div>
        </div>

    <div className="md:w-7/12 w-full relative h-[24rem] md:h-[30rem] mt-8 md:mt-0">
          <img
      className="absolute inset-0 m-auto h-72 md:h-96 w-auto drop-shadow-xl"
            alt="Ilustración de desarrollador"
            src="/coding.svg"
            loading="lazy"
          />

          {bubbles.map((b, i) => (
            <motion.div
              key={b.label}
              className={`absolute px-2.5 py-1.5 rounded-full border border-gray-700/40 backdrop-blur flex items-center ${b.color}`}
              style={{ ...("top" in b ? { top: b.top } : {}), ...("bottom" in b ? { bottom: b.bottom } : {}), ...("left" in b ? { left: b.left } : {}), ...("right" in b ? { right: b.right } : {}) }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <Icon name={b.key} />
              <span className="text-xs md:text-sm">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
