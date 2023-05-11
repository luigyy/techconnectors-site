import React, { useState } from "react";
import Image from "next/image";
import NavbarModal from "./NavbarModal";
import Link from "next/link";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" flex items-center justify-between border-b border-b-zinc-400/40 bg-white px-5 py-2 font-semibold shadow-sm">
      {/* left */}
      <div className="flex items-center tracking-tight">
        <span>
          <img src="techconnectors-logo.png" className="w-8" alt="" />
        </span>
        <Link href="/" className="  font-fjalla font-semibold  md:text-lg">
          TechConnectors
        </Link>
      </div>
      {/* left */}

      {/* right  */}
      <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-tighter text-black/90 text-opacity-70 md:hidden ">
        <button
          className="absolute right-3 top-4  flex items-center"
          onClick={() => setModal(!modal)}
        >
          <Image
            src={"/hamburger-menu-icon.png"}
            width={30}
            height={30}
            alt=""
          />
        </button>
        <NavbarModal modal={modal} setModal={setModal} />
      </div>

      <div className="hidden md:inline">
        <div className="flex items-center gap-4 tracking-tight">
          <Link href="/#services" className="text-sm md:text-lg">
            Servicios
          </Link>
          <Link
            href=" https://calendly.com/techconnectors/30min"
            target="_blank"
            className="text-sm md:text-lg"
          >
            Agendar cita
          </Link>
          <Link href="/#form" className="text-sm md:text-lg">
            Contacto
          </Link>
          <Link href="/about" className="text-sm md:text-lg">
            Sobre nosotros
          </Link>
        </div>
      </div>
      {/* right  */}
    </div>
  );
};

export default Navbar;
