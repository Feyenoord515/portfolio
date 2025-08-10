import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
  <header className="backdrop-blur bg-slate-900/80 md:sticky top-0 z-10 border-b border-slate-800">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
  <a href="#about" className="title-font font-semibold text-white text-lg tracking-wide">
          Nahuel Enrique Molinari
        </a>

  <nav className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white">Proyectos</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experiencia</a>
          <a href="#integrations" className="hover:text-white">Integraciones</a>
          <a href="#case-studies" className="hover:text-white">Casos</a>
          <a href="#testimonials" className="hover:text-white">Motivational</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Nahuel-Enrique-Molinari-CV.pdf"
            className="inline-flex items-center bg-emerald-600/90 hover:bg-emerald-500 text-white border-0 py-2 px-3 rounded text-sm shadow-sm"
            download
            title="Descargar CV"
          >
            Descargar CV
          </a>

          <a
            href="https://github.com/Feyenoord515"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-500 text-white border-0 py-2 px-3 rounded text-sm shadow-sm"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="inline-flex items-center bg-slate-800 border border-slate-700 py-2 px-3 hover:bg-slate-700 rounded text-sm text-slate-100"
          >
            Hablemos
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
