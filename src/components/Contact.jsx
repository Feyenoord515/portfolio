import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
  <section id="contact" className="relative py-16 bg-slate-950 scroll-mt-24">
    <div className="container px-6 md:px-8 mx-auto flex sm:flex-nowrap flex-wrap gap-6">
      <div className="lg:w-2/3 md:w-1/2 bg-slate-900 rounded-xl overflow-hidden sm:mr-2 p-0 flex items-end justify-start relative border border-slate-800">
        <iframe
          width="100%"
          height="100%"
          title="mapa"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.6)" }}
          src="https://www.google.com/maps/embed/v1/place?q=Villa+del+Parque,+Buenos+Aires,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
        <div className="bg-slate-900/95 relative flex flex-wrap py-6 px-8 rounded-xl shadow-md border border-slate-800 m-4">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-slate-200 tracking-widest text-xs">
              DIRECCIÓN
            </h2>
            <p className="mt-1">
              Marcos Sastre 3310 <br />
              Villa del Parque, CABA
            </p>
          </div>
          <div className="lg:w-1/2 px-8 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-slate-200 tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-300 leading-relaxed">
              n.enriquemolinari@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              TELÉFONO
            </h2>
            <p className="leading-relaxed">Solicitar número</p>
          </div>
        </div>
      </div>
      <form
        netlify
        name="test"
        onSubmit={handleSubmit}
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
  <h2 className="text-slate-50 sm:text-4xl text-3xl mb-2 font-semibold title-font tracking-tight">
          Contrátame
        </h2>
  <div className="h-0.5 w-12 bg-indigo-500/70 rounded mb-6"></div>

        <p className="leading-relaxed mb-5 text-slate-300">
          Deja un mensaje y me pondré en contacto contigo en breve.
        </p>
        <div className="flex justify-start mb-4 gap-3">
            <a
              href={"https://www.linkedin.com/in/nahuel-enrique-molinari?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYucWwNIGRdiVfJbnBOEgbw%3D%3D"}
              className="inline-flex text-white bg-emerald-600 border-0 py-2 px-4 focus:outline-none hover:bg-emerald-500 rounded text-sm shadow-sm">
              Linkedin profile
            </a>
            <a
              href={"https://github.com/Feyenoord515"}
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded text-sm shadow-sm">
              Github profile
            </a>
          </div>
           
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-slate-300">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-slate-800/70 rounded border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-slate-800/70 rounded border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-slate-300">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-slate-800/70 rounded border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-slate-100 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-sm shadow-sm">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
