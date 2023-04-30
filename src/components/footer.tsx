import Image from "next/image";

const Footer = ({}) => {
  return (
    <div className="mt-24    bg-zinc-800    px-5 pt-5" id="footer">
      <div className="flex flex-wrap justify-between gap-5 md:justify-normal md:gap-0">
        <div className="  md:w-1/3">
          <h1 className="font-fjalla text-lg text-[#fb1922]">TechConnectors</h1>
          <h1 className="w-3/4 pt-2 text-zinc-400">
            Costa Rica, San José, Llorente de Tibas. Calle del progreso.
          </h1>
          <a
            className="  cursor-pointer pt-1 text-zinc-200"
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7041180298125938689"
            target="_blank"
          >
            Subscríbete a nuestra newsletter
          </a>
        </div>
        <div className="  md:w-1/3 ">
          <h1 className="font-fjalla text-zinc-200 md:text-center">Contacto</h1>
          <div className="pt-2 text-zinc-200">
            <h1 className="text-zinc-400 md:text-center">
              omar@techconnectos.co
            </h1>
            <h1 className=" text-zinc-400 md:text-center">+506 70549186</h1>
            <h1 className=" text-zinc-400 md:text-center">+506 70149487</h1>
          </div>
        </div>
        <div className=" md:w-1/3">
          <h1 className=" font-fjalla text-zinc-200 md:text-right">Siguenos</h1>
          <div className="flex items-center justify-end gap-3 pt-2">
            <a
              href="https://www.linkedin.com/company/techconnectorslatam/"
              className="mt-5 md:float-right"
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
              className="mt-5 md:float-right"
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
        </div>
      </div>
      <div className="mt-6 flex flex-col border-t border-zinc-400/60 py-2 md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-sm italic text-zinc-200">
            Developed by{" "}
            <span className="text-zinc-200">
              <a
                href="https://www.linkedin.com/in/luigy-valverde-mena-14b7ba248/"
                className="font-semibold text-[#fb1922]"
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
