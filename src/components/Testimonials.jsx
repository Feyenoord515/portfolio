import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
  <section id="testimonials" className="py-16 bg-slate-950 scroll-mt-24">
      <div className="container px-6 md:px-8 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-indigo-400" />
  <h1 className="sm:text-4xl text-3xl font-semibold title-font text-slate-50 mb-2 tracking-tight">
          Motivational
        </h1>
  <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-10 mx-auto"></div>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-slate-800/70 p-8 rounded-xl border border-slate-700/70 text-left">
                <TerminalIcon className="block w-8 text-slate-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-slate-400 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
