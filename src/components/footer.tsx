import Image from "next/image";

const Footer = ({}) => {
  return (
    <div className=" mt-24 w-full   bg-zinc-800    px-5 pt-5" id="footer">
      <div className="grid grid-cols-2 justify-between gap-5 sm:grid-cols-3 md:grid-cols-4 md:justify-normal md:gap-0 2xl:grid-cols-4">
        <div className="md:pl-14  2xl:pl-20 ">
          <h1 className="font-fjalla text-zinc-50 ">Descubrir</h1>
          <div className="flex flex-col gap-1 pt-2 text-zinc-200">
            <a
              href="https://monday.com"
              target="_blank"
              className=" text-zinc-400 "
            >
              Inteligencia empresarial
            </a>
            <a
              href="https://qualesgroup.com/nosotros/"
              target="_blank"
              className=" text-zinc-400 "
            >
              Automatización Gen2
            </a>
            <a
              href="https://www.exek.co/sobre-exek"
              target="_blank"
              className=" text-zinc-400 "
            >
              Centralización y digitalización
            </a>
            <a
              href="https://robocorp.com/"
              target="_blank"
              className=" text-zinc-400 "
            >
              Talleres de humanización
            </a>
            <a
              href="https://robocorp.com/"
              target="_blank"
              className=" text-zinc-400 "
            >
              Estrategia de transformación
            </a>
            <a
              href="https://robocorp.com/"
              target="_blank"
              className=" text-zinc-400 "
            >
              Fábrica de innovación
            </a>
          </div>
        </div>
        <div className="   md:pl-14 2xl:pl-20 ">
          <h1 className="font-fjalla text-zinc-200 ">Partners</h1>
          <div className="flex flex-col gap-1 pt-2 text-zinc-200">
            <a
              href="https://monday.com"
              target="_blank"
              className=" text-zinc-400 "
            >
              Monday.com
            </a>
            <a
              href="https://qualesgroup.com/nosotros/"
              target="_blank"
              className=" text-zinc-400 "
            >
              QualesGroup
            </a>
            <a
              href="https://www.exek.co/sobre-exek"
              target="_blank"
              className=" text-zinc-400 "
            >
              Exek BI
            </a>
            <a
              href="https://robocorp.com/"
              target="_blank"
              className=" text-zinc-400 "
            >
              Robocorp
            </a>
          </div>
        </div>
        <div className="overflow-hidden md:pl-14 2xl:pl-20 ">
          <h1 className=" pb-2 font-fjalla text-zinc-200">Acerca de</h1>
          <div className=" flex  items-center gap-3 ">
            <a
              href="https://www.linkedin.com/company/techconnectorslatam/"
              className=" "
              target="_blank"
            >
              <Image
                src="/linkedin-logo.png"
                width={40}
                height={40}
                alt="linkedin logo"
              />
            </a>
            <a
              href="https://www.tiktok.com/@techconnectors"
              className=" "
              target="_blank"
            >
              <Image
                src="/tiktok-logo.png"
                width={30}
                height={30}
                alt="linkedin logo"
              />
            </a>
          </div>
          <span className=" ">
            <a
              className="  cursor-pointer font-semibold  text-zinc-200"
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7041180298125938689"
              target="_blank"
            >
              Subscríbete a nuestra newsletter
            </a>
          </span>
        </div>
        <div className=" md:pl-14 2xl:pl-20">
          <h1 className=" font-fjalla text-zinc-200 ">
            Valores de TechConnectors
          </h1>
          <div className="pt-2 text-zinc-200">
            <h1 className="py-1 text-sm text-zinc-400 ">
              Innovación centrada en las personas
            </h1>
            <h1 className=" py-1 text-sm text-zinc-400">
              Colaboración y trabajo en equipo{" "}
            </h1>
            <h1 className=" py-1 text-sm text-zinc-400">
              Ética y responsabilidad{" "}
            </h1>
            <h1 className=" py-1 text-sm text-zinc-400">
              {" "}
              Empatía y comprensión
            </h1>
            <h1 className=" py-1 text-sm text-zinc-400">
              Sostenibilidad y responsabilidad social{" "}
            </h1>
            <h1 className=" py-1 text-sm text-zinc-400">
              Aprendizaje continuo y desarrollo personal{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* //  */}
      {/* //  */}
      {/* //  */}
      <div className="mt-6 flex flex-col border-t border-zinc-400/60 py-2 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-sm italic text-zinc-200 md:pl-14 2xl:pl-20">
            Developed by{" "}
            <span className="text-zinc-200 ">
              <a
                href="https://www.linkedin.com/in/luigy-valverde-mena-14b7ba248/"
                className="font-semibold text-[#fb1922] "
                target="_blank"
              >
                Luigy Valverde
              </a>
            </span>
          </h1>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-right text-sm italic  text-zinc-200">
            © {new Date().getFullYear()} TechConnectors. All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
