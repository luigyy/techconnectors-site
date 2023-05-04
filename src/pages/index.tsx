import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const DxCards: NextPage<{ pic: string; title: string; delay: number }> = ({
  pic,
  title,
  delay,
}) => {
  return (
    <div
      style={{ animationDelay: `${delay * 1000}ms` }}
      className=" relative aspect-square w-[250px] rounded-lg [&>*:nth-child(1)]:hover:grayscale-0 "
    >
      <img
        src={pic}
        style={{ animationDelay: `${delay * 1000}ms` }}
        className="dx-card-animation absolute h-full w-full object-contain grayscale  hover:grayscale-0"
        alt=""
      />
      <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 pt-16 font-fjalla text-xl font-semibold text-[#BF1922]">
        {title}
      </h1>
    </div>
  );
};

const ServiceCard: NextPage<{
  title: string;
  description: string;
  poweredBy: string;
  pic: string;
  link: string;
}> = ({ title, description, poweredBy, pic, link }) => {
  return (
    <Link
      href={link}
      className=" relative aspect-[11/16] w-[270px] overflow-hidden rounded-lg border border-zinc-50/5  transition-all duration-1000 hover:scale-105 hover:border-[#bf1922] hover:border-zinc-50/[15%] [&>*]:hover:translate-y-0 [&>*]:hover:grayscale-0"
    >
      <img
        src={pic}
        className="absolute p-4 grayscale transition-all duration-700"
        alt=""
      />
      <div className="absolute h-full  w-full bg-zinc-900/70  transition duration-700 md:translate-y-[80%]">
        <h1 className=" px-5 pb-3  pt-6 font-fjalla text-xl tracking-tight text-zinc-300">
          {title}
        </h1>
        <p className="p-5  text-zinc-50"> {description}</p>
        <p className="absolute bottom-10 right-0 pr-2 font-fjalla text-zinc-200 ">
          powered by{" "}
          <span className="font-fjalla text-[#BF1922]">{poweredBy}</span>
        </p>
      </div>
    </Link>
  );
};

const Home: NextPage = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState({
    state: false,
    active: true,
  });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (showNewsletterPopup.active) {
      if (inView) {
        setShowNewsletterPopup({ state: true, active: false });
      }
    }
  }, [inView]);
  return (
    <>
      <Head>
        <title>Techconnectors</title>
        <meta name="description" content="Sitio web de techconnectors" />
      </Head>
      <div className="mx-auto min-w-fit ">
        <main className="relative z-0">
          {/* hero section  */}
          <div className="dotted-bg flex flex-col items-center justify-center  gap-3 pb-28 pt-28 ">
            <h1 className="text-center font-fjalla text-4xl font-semibold tracking-tight md:text-left md:text-6xl">
              Conectando tecnología con tus necesidades.
            </h1>
            <h1 className="text-center font-fjalla text-3xl font-semibold tracking-tight md:text-left md:text-6xl">
              Experimenta el poder de la tecnología en tu negocio.
            </h1>
            <p className="text-center font-semibold text-zinc-600 md:text-left md:text-xl">
              Hacemos el trabajo de las personas mas fácil a través de nuestras
              soluciones tecnológicas.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="#footer"
                className="rounded-lg border bg-zinc-50 px-3 py-2 font-semibold tracking-tight text-zinc-800 shadow transition hover:scale-105"
              >
                Síguenos
              </a>
              <a
                href="#form"
                className="glow-on-hover rounded-lg border bg-[#BF1922] px-3 py-2 font-semibold tracking-tight text-white shadow-sm transition hover:scale-105"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* hero section  */}

          {/* newsletter popup  */}
          <div
            className={`${
              showNewsletterPopup.state && !showNewsletterPopup.active
                ? "translate-x-0"
                : "translate-x-[150%]"
            } w-30 h-30 fixed bottom-5 right-5  z-10 rounded-md bg-[#bf1922] p-4 transition-all duration-1000`}
          >
            <span
              onClick={() =>
                setShowNewsletterPopup({ state: false, active: false })
              }
              className="absolute -left-12 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#bf1922] px-4 py-2 text-xl text-zinc-200 "
            >
              X
            </span>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7041180298125938689
            
            "
              target="_blank"
            >
              <h1 className=" z-10  font-fjalla text-zinc-200">
                Suscríbete a nuestra newsletter
              </h1>
            </a>
          </div>
          {/* newsletter popup  */}

          {/* trusted by section  */}
          <div className="pb-40">
            <h1 className="text-tracking-tight pb-10 text-center text-2xl text-zinc-400  md:text-3xl">
              Nuestros partners
            </h1>
            <div className="mx-auto flex  flex-wrap justify-center md:w-2/3 ">
              {["monday", "quales", "exek", "robocorp"].map((item, index) => (
                <img
                  key={index}
                  src={`${item}.png`}
                  className="mx-7 w-24 object-contain grayscale  md:w-36"
                  alt=""
                />
              ))}
            </div>
          </div>
          {/* trusted by section  */}

          {/* services section  */}
          <div
            className="relative  mx-1 mb-32 overflow-hidden rounded-lg bg-zinc-900 py-10 pb-16"
            id="services"
          >
            <h1 className="pb-1  text-center font-fjalla text-4xl tracking-tight text-zinc-100 ">
              Acelera <span className="font-fjalla text-[#bf1922]">5x</span> tu
              negocio!
            </h1>
            <h1 className="pb-10 text-center  text-xl text-zinc-400">
              Estos son algunos de nuestros servicios
            </h1>
            <div className="flex flex-wrap justify-center gap-20 gap-x-40">
              {[
                {
                  title: "Inteligencia de negocios",
                  description:
                    "Con nuestra solución de BI, proveemos de un asistente inteligente que relaciona todas las aristas de su negocio y sugiere caminos para la generación de caja basado en sus datos contables, ventas e inventarios",
                  poweredBy: "exek.io + quallie",
                  pic: "inteligencia-de-negocios.png",
                  link: "/servicios/inteligencia-empresarial",
                },
                {
                  title: "Hiperautomatización ",
                  description:
                    "RPA permite aumentar la productividad y hacer que la fuerza laboral se dedique a tomar decisiones estratégicas del negocio. ",
                  poweredBy: "robocorp.com",
                  pic: "rpa.png",
                  link: "/servicios/rpa",
                },
                {
                  title: "Ecosistemas digitales",
                  description:
                    "Digitalizamos los procesos operativos con la ayuda de Monday.com, con la cual agilizamos y simplificamos el trabajo de pequeñas y grandes empresas",
                  poweredBy: "Monday.com",
                  pic: "monday2.png",
                  link: "/servicios/monday",
                },
                {
                  title: "Estrategia de transformación digital",
                  description:
                    "Creamos planes detallados para objetivos especificos.",
                  poweredBy: "Estrategas de T.D.",
                  pic: "sistema-de-referidos.png",
                  link: "/servicios/estrategia",
                },
                {
                  title: "Fabrica de la innovación",
                  description:
                    "Creamos soluciones personalizadas para su empresa",
                  poweredBy: "Soluciones personalizadas",
                  pic: "soluciones-personalizadas.png",
                  link: "/servicios/fabrica",
                },
              ].map((item, index) => (
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  poweredBy={item.poweredBy}
                  pic={item.pic}
                  link={item.link}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* services section  */}

          {/* metodologia dx  */}
          <div className="overflow-hidden pb-16" ref={ref}>
            <h1 className="text-center font-fjalla text-4xl font-semibold">
              Metodologia DX
            </h1>
            <div className="grid place-items-center gap-y-2 sm:grid-cols-2 sm:gap-y-5 md:grid-cols-3 ">
              <DxCards
                delay={1}
                title="Descubrimiento"
                pic="descubrimiento-dx.jpeg"
              />
              <DxCards
                delay={3}
                title="Modelamiento de solución"
                pic="modelamiento-dx.jpeg"
              />
              <DxCards
                delay={5}
                title="Gerencia de proyecto"
                pic="gerencia-dx.jpeg"
              />
              <DxCards
                delay={7}
                title="Implementación"
                pic="implementacion-dx.jpeg"
              />
              <DxCards
                delay={9}
                title="Optimización"
                pic="optimizacion-dx.jpeg"
              />
              <DxCards
                delay={11}
                title="Soporte y mantenimiento"
                pic="soporte-dx.jpeg"
              />
            </div>
          </div>
          {/* metodologia dx  */}

          {/* testimonials */}
          <div className="mt-28 pb-24 ">
            <h1 className=" pb-12 text-center text-3xl text-zinc-400 ">
              Estos clientes confían en nosotros
            </h1>
            <div className="mx-auto flex flex-wrap  justify-center gap-8 md:w-2/3 ">
              {[
                "ava-logo.png",
                "dbugger-logo.jpeg",
                "gualapack-logo.png",
                "integra-logo.png",
                "loteria-logo.png",
                "partnergy-logo.png",
              ].map((item, index) => (
                <img
                  className="mx-7 w-24 object-contain grayscale  md:w-36"
                  src={item}
                  alt={item}
                />
              ))}
            </div>
          </div>
          {/* testimonials */}
          <div>
            <h1 className="box-border pb-12 text-center font-fjalla text-2xl md:text-5xl">
              <span className="border-b-2 border-[#BF1922] font-fjalla text-[#BF1922]">
                {" "}
                Contáctanos
              </span>{" "}
              y recibe una asesoría gratis
            </h1>
            <iframe
              className=" mx-auto h-[1200px] w-[85%] max-w-[400px] border-2 bg-white"
              src="https://forms.monday.com/forms/embed/f7128c563225d103bf0916f48c8e5644?r=use1"
            ></iframe>
          </div>

          {/* contact form  */}
          {/* <div className="px-4 pt-20" id="form">
            {" "}
            <h1 className="text-center font-fjalla text-2xl md:text-5xl">
              <span className="border-b-2 border-[#BF1922] font-fjalla text-[#BF1922]">
                {" "}
                Contáctanos
              </span>{" "}
              y recibe una asesoría gratis
            </h1>
            <div className="mx-auto mt-14  flex max-w-[600px] flex-col justify-around p-5 ">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="6eb47661-ef2d-4438-87db-825d0e3e1f3d"
                />

                <div className="flex flex-col justify-between gap-2 sm:flex-row ">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-fjalla">
                      Nombre
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="rounded-md border-x-2 border-[#BF1922] py-1 pl-1 outline-none focus:shadow-md "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-fjalla">
                      Correo
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="rounded-md border-x-2 border-[#BF1922] py-1 pl-1 outline-none focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="mt-4  flex flex-col ">
                  <label htmlFor="" className="font-fjalla">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id=""
                    rows={4}
                    required
                    className="rounded-lg border-x-2 border-[#BF1922] py-1 pl-2 outline-none focus:shadow-md"
                  ></textarea>
                </div>
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />

                <input
                  type="submit"
                  value="Enviar"
                  className="mt-4 w-20 rounded-lg border border-[#BF1922] bg-zinc-50 px-3 py-2 text-center font-semibold tracking-tight text-zinc-800 shadow transition hover:scale-105"
                />
              </form>
            </div>
          </div> */}
          {/* contact form  */}
        </main>
      </div>
    </>
  );
};

export default Home;
