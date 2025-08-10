import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data.js";

export default function Projects() {
  return (
  <section id="projects" className="bg-slate-950 text-slate-300 body-font scroll-mt-24">
      <div className="container px-6 md:px-8 py-16 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-2 text-slate-50 tracking-tight">
            Proyectos iniciales (archivo histórico)
          </h1>
          <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-6 mx-auto"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-300">
            Muestras de mis primeros proyectos (post bootcamp). Hoy mi foco está en integraciones, middleware y automatización con Node/Express, SAP Service Layer y frontends en React.
          </p>
        </div>
  <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              <div className="relative h-full overflow-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center h-full w-full"
                  src={project.image}
                  loading="lazy"
                />
    <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-slate-800 bg-slate-900/95 opacity-0 hover:opacity-100 transition-opacity">
      <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-1">
                    {project.subtitle}
                  </h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
