import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between border-b border-b-zinc-400/40 bg-white px-5 py-2 font-semibold shadow-sm">
      {/* left */}
      <div className="flex items-center tracking-tight">
        <span>
          <img src="techconnectors-logo.png" className="w-8" alt="" />
        </span>
        <p className=" font-semibold tracking-tighter md:text-lg">
          TechConnectors
        </p>
      </div>
      {/* left */}

      {/* right  */}
      <div className="flex items-center gap-4 tracking-tight">
        <a href="#services" className="md:text-lg">
          Servicios
        </a>
        <a
          href="https://calendly.com/exekventas/omar?month=2023-04"
          target="_blank"
          className="md:text-lg"
        >
          Agendar cita
        </a>
        <a href="#footer" className="md:text-lg">
          Contacto
        </a>
      </div>
      {/* right  */}
    </div>
  );
};

export default Navbar;
