import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ServiceCard: NextPage<{
  title: string;
  description: string;
  pic: string;
  link: string;
}> = ({ title, description, pic, link }) => {
  return (
    <Link
      href={link}
      className="relative aspect-[11/13] w-[270px] overflow-hidden rounded-lg border   border-zinc-50/5  transition-all duration-1000 hover:scale-105 hover:border-[#bf1922] hover:border-zinc-50/[15%] [&>*]:hover:translate-y-0 [&>*]:hover:grayscale-0"
    >
      <img
        src={pic}
        className="float absolute  ml-5 w-[80%] p-4 transition-all duration-700"
        alt=""
      />
      <div className="absolute h-full  w-full bg-zinc-900/70  transition duration-700 md:translate-y-[75%]">
        <h1 className=" px-5 pb-3  pt-6 font-fjalla text-xl tracking-tight text-zinc-300">
          {title}
        </h1>
        <p className="p-5 text-sm text-zinc-50"> {description}</p>
        <p className="p-5 font-semibold italic text-[#bf1922]">
          Presiona para ver mas
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
  }, [inView, showNewsletterPopup.active]);
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
            <h1 className="px-3 text-center font-fjalla text-3xl font-semibold tracking-tight md:text-left md:text-6xl">
              Experimenta el poder de la tecnología en tu negocio.
            </h1>
            <p className="px-3 text-center font-semibold text-zinc-600 md:text-left md:text-xl">
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
                  className="mx-7 w-24 object-contain grayscale transition-all duration-500 hover:grayscale-0  md:w-36"
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
              Como te ayudamos
            </h1>

            <div className="flex flex-wrap justify-center gap-20 gap-x-32 ">
              {[
                {
                  title: "Inteligencia empresarial",
                  description:
                    "Somos un aliado estratégico en la creación e implementación de soluciones de entendimiento empresarial para potenciar el rendimiento y crecimiento de la empresa.",
                  poweredBy: "exek.io + quallie",
                  pic: "inteligencia-empresarial.png",
                  link: "/servicios/inteligencia-empresarial",
                },
                {
                  title: "Automatización Gen2",
                  description:
                    "Expertos en la mejora de procesos a través de la automatización de procesos Gen2 sin licenciamiento",
                  poweredBy: "robocorp.com",
                  pic: "rpa.png",
                  link: "/servicios/rpa",
                },
                {
                  title: "Centralización y digitalización (UCD)",
                  description:
                    "Somos un socio confiable en la digitalización y centralización  de las operaciones a través de tecnología. Trabajamos en conjunto para encontrar las mejores soluciones y tecnologías que se adecuan a cada necesidad.",
                  poweredBy: "Monday.com",
                  pic: "centralizacion.png",
                  link: "/servicios/monday",
                },
                {
                  title: "Talleres de humanización",
                  description:
                    "Nuestro equipo de expertos se dedica a impartir cursos a diferente nivel para el manejo del cambio organizacional ",
                  poweredBy: "Estrategas de T.D.",
                  pic: "talleres.png",
                  link: "/servicios/estrategia",
                },
                {
                  title: "Estrategia de transformación digital",
                  description:
                    "Somos un aliado en la creación estratégica para el cambio digital e  innovación empresarial enfocados en la rentabilidad y optimización tanto huamana como operacional.",
                  poweredBy: "Soluciones personalizadas",
                  pic: "estrategia.png",
                  link: "/servicios/fabrica",
                },
                {
                  title: "Fabrica de innovación",
                  description:
                    "Nuestro departamento de innovación y desarrollo tecnológico se enfoca en crear soluciones innovadoras para mejorar los ecosistemas empresariales actuales.",
                  poweredBy: "Soluciones personalizadas",
                  pic: "fabrica.png",
                  link: "/servicios/fabrica",
                },
              ].map((item, index) => (
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  pic={item.pic}
                  link={item.link}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* services section  */}

          {/* testimonials */}
          <div className="mt-28 pb-24 ">
            <h1 className=" pb-12 text-center text-3xl text-zinc-400 ">
              Confían en nosotros
            </h1>
            <div className="mx-auto flex flex-wrap  justify-center gap-8 md:w-2/3 ">
              {[
                "ava-logo.png",
                "dbugger-logo.jpeg",
                "gualapack-logo.png",
                "integra-logo.png",
                "loteria-logo.png",
                "partnergy-logo.png",
                "Logo-Lmexpress.png",
              ].map((item, index) => (
                <img
                  className="mx-7 w-24 object-contain grayscale transition-all duration-500 hover:grayscale-0  md:w-36"
                  src={item}
                  alt={item}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* testimonials */}
          <div>
            <h1
              id="form"
              className="box-border pb-12 text-center font-fjalla text-2xl md:text-5xl"
            >
              <span className="border-b-2 border-[#BF1922] font-fjalla text-[#BF1922]">
                {" "}
                Contáctanos
              </span>{" "}
              para un asesoría gratuíta
            </h1>
            <iframe
              className=" mx-auto h-[1000px] w-[85%] max-w-[400px] border-2 bg-white"
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
