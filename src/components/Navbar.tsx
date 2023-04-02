import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className=" flex justify-between border-b border-b-zinc-400/40 bg-white px-5 py-2 font-semibold shadow-sm">
      {/* left */}
      <div className="flex items-center tracking-tight">
        <span>
          <img src="techconnectors-logo.png" className="w-8" alt="" />
        </span>
        <p className=" text-lg">TechConnectors</p>
      </div>
      {/* left */}

      {/* right  */}
      <div className="flex items-center gap-4 tracking-tight">
        <p className="text-lg">Servicios</p>
        <p className="text-lg">Casos de uso</p>
        <p className="text-lg">Contáctanos</p>
        <p className="text-lg">Acerca de</p>
      </div>
      {/* right  */}
    </div>
  );
};

export default Navbar;
