import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/Navbar";

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
}> = ({ title, description, poweredBy, pic }) => {
  return (
    <div className=" relative aspect-[11/16] w-[270px] overflow-hidden rounded-lg border  border-zinc-50/5 transition-all duration-1000 hover:scale-105 hover:border-zinc-50/[15%] [&>*]:hover:translate-y-0 [&>*]:hover:grayscale-0">
      <img
        src={pic}
        className="absolute p-4 grayscale transition-all duration-700"
        alt=""
      />
      <div className="absolute h-full  w-full bg-zinc-900/95 transition duration-700 md:translate-y-3/4">
        <h1 className=" px-5 pb-3  pt-6 font-fjalla text-xl tracking-tight text-zinc-300">
          {title}
        </h1>
        <p className="p-5 text-sm text-zinc-400"> {description}</p>
        <p className="absolute bottom-10 right-0 pr-2 font-fjalla text-[#BF1922]">
          powered by {poweredBy}
        </p>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techconnectors</title>
        <meta name="description" content="Sitio web de techconnectors" />
      </Head>
      <div className="mx-auto min-w-fit ">
        <Navbar />
        <main className="">
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

          {/* trusted by section  */}
          <div className="pb-40">
            <h1 className="text-tracking-tight pb-10 text-center text-2xl text-zinc-400  md:text-3xl">
              Estas compañias confían en nuestras soluciones
            </h1>
            <div className="mx-auto flex  flex-wrap justify-center md:w-2/3 ">
              {[
                "genpact",
                "lionsgate",
                "monday",
                "hulu",
                "coca-cola",
                "canva",
                "glossier",
              ].map((item, index) => (
                <img
                  key={index}
                  src={`${item}.png`}
                  className="mx-7 w-24 object-contain grayscale md:w-36"
                  alt=""
                />
              ))}
            </div>
          </div>
          {/* trusted by section  */}

          {/* services section  */}
          <div
            className="relative mx-4 mb-32 overflow-hidden  rounded-lg bg-zinc-900 py-10 pb-16"
            id="services"
          >
            <h1 className="pb-10  text-center font-fjalla text-4xl tracking-tight text-[#BF1922] ">
              Nuestros Servicios
            </h1>
            <div className="flex flex-wrap  justify-around gap-10">
              {[
                {
                  title: "Inteligencia de negocios",
                  description:
                    "Con nuestra solución de BI, proveemos de un asistente inteligente que relaciona todas las aristas de su negocio y sugiere caminos para la generación de caja basado en sus datos contables, ventas e inventarios",
                  poweredBy: "exek.io",
                  pic: "inteligencia-de-negocios.png",
                },
                {
                  title: "Automatización de procesos",
                  description:
                    "RPA permite aumentar la productividad y hacer que la fuerza laboral se dedique a tomar decisiones estratégicas del negocio. ",
                  poweredBy: "robocorp.com",
                  pic: "rpa.png",
                },
                {
                  title: "Digitalización operacional",
                  description:
                    "Digitalizamos los procesos operativos con la ayuda de Monday.com, con la cual agilizamos y simplificamos el trabajo de pequeñas y grandes empresas",
                  poweredBy: "Monday.com",
                  pic: "monday2.png",
                },
                {
                  title: "Sistema de referidos",
                  description:
                    "Solución todo en uno para escalar su programa de referencia de empleados al impulsar la participación de los empleados, generar candidatos de calidad y brindarle el máximo rendimiento de contrataciones de referencia.",
                  poweredBy: "ReferScout",
                  pic: "sistema-de-referidos.png",
                },
              ].map((item, index) => (
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  poweredBy={item.poweredBy}
                  pic={item.pic}
                  key={index}
                />
              ))}
            </div>
          </div>
          {/* services section  */}

          {/* metodologia dx  */}
          <div className="overflow-hidden pb-16">
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
            <h1 className="px-2 pb-10 text-center font-fjalla text-4xl font-semibold">
              Esto es lo que nuestros clientes dicen de nosotros
            </h1>
            <div className="flex flex-wrap justify-center gap-4 ">
              <div className=" hover:glow-on-hover mx-auto aspect-[10/11] w-[90%] max-w-[280px] rounded  border-zinc-800/30 bg-zinc-900 p-3  ">
                <div className="flex items-center p-2">
                  <div className="h-14 w-14 overflow-hidden rounded-full ">
                    <img
                      src="man.jpg"
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="px-2 pt-5 font-fjalla text-lg text-[#fb1922] ">
                      Marcus Lanhman
                    </h1>
                    <h1 className=" px-2 text-sm text-zinc-50">10/10/2022</h1>
                  </div>
                </div>
                <p className="px-2 pt-3  text-zinc-50">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta dolorum impedit praesentium perferendis aliquid debitis
                  harum sapiente veniam. Enim, alias."
                </p>
                <h1 className="px-2 pt-8 text-sm italic text-zinc-50">
                  Lead software engineer at Microsoft
                </h1>
              </div>
              <div className=" hover:glow-on-hover mx-auto aspect-[10/11] w-[90%] max-w-[280px]  rounded border-zinc-800/30 bg-zinc-900 p-3 ">
                <div className="flex items-center p-2">
                  <div className="h-14 w-14 overflow-hidden rounded-full ">
                    <img
                      src="man.jpg"
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="px-2 pt-5 font-fjalla text-lg text-[#fb1922] ">
                      Marcus Lanhman
                    </h1>
                    <h1 className=" px-2 text-sm text-zinc-50">10/10/2022</h1>
                  </div>
                </div>
                <p className="px-2 pt-3  text-zinc-50">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta dolorum impedit praesentium perferendis aliquid debitis
                  harum sapiente veniam. Enim, alias."
                </p>
                <h1 className="px-2 pt-8 text-sm italic text-zinc-50">
                  Lead software engineer at Microsoft
                </h1>
              </div>
              <div className="mx-auto aspect-[10/11] w-[90%] max-w-[280px] rounded border-zinc-800/30  bg-zinc-900 p-3 2xl:p-7  ">
                <div className="flex items-center p-2">
                  <div className="h-14 w-14 overflow-hidden rounded-full ">
                    <img
                      src="man.jpg"
                      className="h-full w-full object-cover "
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="px-2 pt-5 font-fjalla text-lg text-[#fb1922] ">
                      Marcus Lanhman
                    </h1>
                    <h1 className=" px-2 text-sm text-zinc-50">10/10/2022</h1>
                  </div>
                </div>
                <p className="px-2 pt-3  text-zinc-50">
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta dolorum impedit praesentium perferendis aliquid debitis
                  harum sapiente veniam. Enim, alias."
                </p>
                <h1 className="px-2 pt-8 text-sm italic text-zinc-50">
                  Lead software engineer at Microsoft
                </h1>
              </div>
            </div>
          </div>
          {/* testimonials */}

          {/* contact form  */}
          <div className="px-4 pt-20" id="form">
            <h1 className="text-center font-fjalla text-2xl md:text-5xl">
              <span className="border-b-2 border-[#BF1922] font-fjalla text-[#BF1922]">
                {" "}
                Contáctanos
              </span>{" "}
              y recibe una asesoría gratis
            </h1>
            <div className="mx-auto mt-14  flex max-w-[600px] flex-col justify-around p-5 ">
              <form>
                <div className="flex flex-col justify-between gap-2 sm:flex-row ">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-fjalla">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="rounded-md border-x-2 border-[#BF1922] py-1 pl-1 outline-none focus:shadow-md "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-fjalla">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="rounded-md border-x-2 border-[#BF1922] py-1 pl-1 outline-none focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="mt-4  flex flex-col ">
                  <label htmlFor="" className="font-fjalla">
                    Mensaje
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows={4}
                    className="rounded-lg border-x-2 border-[#BF1922] py-1 pl-2 outline-none focus:shadow-md"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className="mt-4 w-20 rounded-lg border border-[#BF1922] bg-zinc-50 px-3 py-2 text-center font-semibold tracking-tight text-zinc-800 shadow transition hover:scale-105"
                />
              </form>
            </div>
          </div>
          {/* contact form  */}

          {/* footer  */}
          <div className="mt-24 flex  bg-zinc-800 px-1  py-5" id="footer">
            <div className="w-1/2">
              <h1 className="font-fjalla text-3xl text-[#FB1922]">
                TechConnectors
              </h1>
              <h1 className=" text-lg text-zinc-50">
                Llorente de Tibás, Calle del Progreso, Condominio Villa Bonita
              </h1>
              <h1 className="pt-3 text-zinc-50 sm:pt-0">
                Tel: +506 70549186 Tel: +506 70149487
              </h1>
            </div>
            <div className="flex w-1/2 flex-col px-2 ">
              <h1 className="pb-2 text-right text-xl font-semibold text-zinc-50">
                Síguenos
              </h1>
              <span className="ml-auto">
                <a
                  href="https://www.linkedin.com/company/techconnectorslatam/"
                  target="_blank"
                >
                  <img src="linkedin-logo.png" className="w-12 " alt="" />
                </a>
              </span>
            </div>
          </div>
          {/* footer  */}
        </main>
      </div>
    </>
  );
};

export default Home;
