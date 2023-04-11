import { type NextPage, NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

const TestimonialCard = ({}) => {
  return <div>test</div>;
};
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
        className="absolute p-4 grayscale transition-all duration-1000"
        alt=""
      />
      <div className="absolute h-full  w-full translate-y-3/4 bg-zinc-900/95 transition duration-1000">
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
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/techconnectors-logo.png" />
        {/* catamaran font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran&display=swap"
          rel="stylesheet"
        />
        {/* catamaran font  */}
        {/* fjalla font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
        {/* fjalla font  */}
      </Head>
      <Navbar />
      <main className="pb-32">
        {/* hero section  */}
        <div className="dotted-bg flex flex-col items-center justify-center  gap-3 pb-28 pt-28 ">
          <h1 className="font-fjalla text-6xl font-semibold tracking-tight">
            Conectando tecnología con tus necesidades.
          </h1>
          <h1 className="font-fjalla text-6xl font-semibold tracking-tight">
            Experimenta el poder de la tecnología en tu negocio.
          </h1>
          <p className="text-xl font-semibold text-zinc-600">
            Hacemos el trabajo de las personas mas fácil a través de nuestras
            soluciones tecnológicas.
          </p>
          <div className="mt-5 flex gap-4">
            <button className="rounded-lg border bg-zinc-50 px-3 py-2 font-semibold tracking-tight text-zinc-800 shadow transition hover:scale-105">
              Siguenos
            </button>
            <button className="glow-on-hover rounded-lg border bg-[#BF1922] px-3 py-2 font-semibold tracking-tight text-white shadow-sm transition hover:scale-105">
              Contáctanos
            </button>
          </div>
        </div>
        {/* hero section  */}

        {/* trusted by section  */}
        <div className="pb-40">
          <h1 className="text-tracking-tight pb-10 text-center text-3xl  text-zinc-400">
            Estas compañias confían en nuestras soluciones
          </h1>
          <div className="mx-auto flex w-2/3 flex-wrap justify-center ">
            {[
              "genpact",
              "lionsgate",
              "monday",
              "hulu",
              "coca-cola",
              "canva",
              "glossier",
            ].map((item) => (
              <img
                src={`${item}.png`}
                className="mx-7 w-36 object-contain grayscale"
                alt=""
              />
            ))}
          </div>
        </div>
        {/* trusted by section  */}

        {/* services section  */}
        <div className="relative mx-4 mb-32 h-screen overflow-hidden rounded-lg bg-zinc-900 py-10">
          <h1 className="pb-10  text-center font-fjalla text-4xl tracking-tight text-[#BF1922] ">
            Nuestros Servicios
          </h1>
          <div className="flex justify-around">
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
            ].map((item) => (
              <ServiceCard
                title={item.title}
                description={item.description}
                poweredBy={item.poweredBy}
                pic={item.pic}
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
          <div className="grid grid-cols-3 place-items-center gap-y-5 ">
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

        {/* contact form  */}
        <div className="pt-20">
          <h1 className="text-center font-fjalla text-5xl">
            <span className="border-b-2 border-[#BF1922] font-fjalla text-[#BF1922]">
              {" "}
              Contáctanos
            </span>{" "}
            y recibe una asesoría gratis
          </h1>
          <div className="mx-auto mt-14  flex max-w-[600px] flex-col justify-around ">
            <form>
              <div className="flex justify-between ">
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
        <div className="mt-24 flex">
          <div className="w-1/2">
            <h1 className="font-fjalla text-3xl text-[#FB1922]">
              TechConnectors
            </h1>
            <h1 className="text-lg">
              Llorente de Tibás, Calle del Progreso, Condominio Villa Bonita
            </h1>
            <h1>Tel: +506 70549186 Tel: +506 70149487</h1>
          </div>
          <div className="w-1/2"> </div>
        </div>
        {/* footer  */}
      </main>
    </>
  );
};

export default Home;
