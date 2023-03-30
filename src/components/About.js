import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Soy Nahuel,
            <br className="hidden lg:inline-block" />
            desarrollador Full Stack
          </h1>
          <p className="mb-8 leading-relaxed">
            Con experiencia en tecnologías como React, Node.js, Firebase, Docker y AntDesign. Utilizo metodologías ágiles como Scrum para trabajar en equipo y abordar desafíos técnicos de manera eficiente. Me considero una persona curiosa, organizada y apasionada por la tecnología, siempre en búsqueda de nuevas técnicas y buenas prácticas para mejorar mi trabajo.
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
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Perfil.jpg"
          />
        </div>
      </div>
    </section>
  );
}
