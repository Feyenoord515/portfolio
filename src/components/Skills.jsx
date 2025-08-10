import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
  <section id="skills" className="py-16 bg-slate-900 scroll-mt-24">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <ChipIcon className="w-10 inline-block mb-4 text-indigo-400" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-slate-50 mb-2 tracking-tight">
            Habilidades y tecnologías
          </h1>
          <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-6 mx-auto"></div>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-slate-300">
            Las tecnologías que aplico a diario para construir soluciones mantenibles y escalables.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-slate-800/70 rounded flex p-4 h-full items-center border border-slate-700/70">
                <BadgeCheckIcon className="text-emerald-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
