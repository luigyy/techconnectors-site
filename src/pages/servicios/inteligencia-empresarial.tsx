import Link from "next/link";
import Image from "next/image";

const InteligenciaEmpresarial = ({}) => {
  return (
    <div className="">
      <div className="red-dotted-bg min-h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className="mt-20 pt-6 text-center font-fjalla text-4xl  ">
          Departamento de inteligencia empresarial
        </h1>
        <h1 className=" mt-4 rounded-xl bg-white bg-opacity-70  pb-6 text-center text-2xl font-semibold">
          Contamos con un equipo multidisciplinario apoyado por grandes marcas
          como lo son{" "}
          <Link
            className="text-[#bf1922]"
            target="_blank"
            href="https://qualesgroup.com/nosotros/"
          >
            Quales Group
          </Link>{" "}
          y{" "}
          <Link
            className="text-[#bf1922]"
            target="_blank"
            href="https://www.exek.co/sobre-exek"
          >
            Exek Bi
          </Link>{" "}
          para crear proyectos completos desde la estrategia, integracion y
          automaización, QuX, Visualización y análisis y un Asistente
          conversacional
        </h1>
      </div>
      <div className="px-4 py-16 md:px-32 ">
        <h1 className="mb-10 text-center text-3xl text-zinc-400">
          Nuestras soluciones
        </h1>
        <ul className="flex justify-center gap-x-5">
          <li className="">
            <h1 className="text-center text-lg font-semibold">NewtonCash</h1>
            <Image
              className="animate-grayscale grayscale transition-all duration-500 hover:grayscale-0"
              src="/newton-cash.png"
              width={200}
              height={200}
              alt=""
            />
          </li>
          <li className="">
            <h1 className=" text-center text-lg font-semibold">Exek BI</h1>
            <Image
              style={{ animationDelay: "2s" }}
              className="animate-grayscale mt-12 grayscale transition-all duration-500 hover:grayscale-0"
              src="/exek.png"
              width={200}
              height={200}
              alt=""
            />
          </li>
          <li>
            <h1 className="text-center text-lg font-semibold">Quallie Bot</h1>
            <Image
              src="/quales.png"
              style={{ animationDelay: "4s" }}
              className="animate-grayscale mt-10 grayscale transition-all duration-500 hover:grayscale-0"
              width={200}
              height={200}
              alt=""
            />
          </li>
        </ul>
      </div>

      {/* bullet points  */}
      <div className=" flex flex-wrap justify-around gap-5 px-4 md:px-32">
        <span className="gradient-border  flex w-60 items-center rounded-xl border p-3 text-center font-semibold  ">
          Soluciones de inteligencia de negocios personalizadas para empresas
        </span>
        <span className="gradient-border  flex  w-60 items-center rounded-xl border  p-3 text-center font-semibold  ">
          Acceso a tableros especializados que ofrecen visualizaciones claras y
          concisas de los datos empresariales.
        </span>
        <span className="gradient-border   flex w-60  items-center rounded-xl border p-3 text-center font-semibold  ">
          Asistencia en tiempo real a través de chatbots de BI para responder
          preguntas y proporcionar análisis detallados.
        </span>
        <span className="gradient-border flex w-60 items-center rounded-xl  border  p-3 text-center font-semibold  ">
          Mejora del rendimiento y competitividad en el mercado mediante la toma
          de decisiones informadas y estratégicas basadas en datos precisos y
          actualizados.
        </span>
      </div>
      {/* bullet points  */}

      {/* metrics  */}
      <div
        style={{ borderRadius: "0% 100% 0% 100% / 100% 27% 73% 0%" }}
        className="mt-16  min-h-[115vh] bg-[#bf1922] py-12 "
      >
        <h1 className="pt-28 text-center font-fjalla  text-3xl text-zinc-100">
          Te ayudamos con:
        </h1>

        <div className="mx-auto mt-20 flex w-[60%] flex-wrap justify-around gap-x-32 gap-y-5 ">
          <h1 className="w-80  rounded-2xl  bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Identifica el dinero atrapado en tu empresa
          </h1>
          <h1 className="w-80  rounded-2xl  bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Asistentes digitales
          </h1>
          <h1 className="w-80 rounded-2xl   bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Integración y automatización de datos
          </h1>
          <h1 className="w-80 rounded-2xl   bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Indicadores especializados
          </h1>
          <h1 className="w-80  rounded-2xl  bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Modernización de herramientas
          </h1>
          <h1 className="w-80  rounded-2xl  bg-[#d61c26]  p-4 text-center font-semibold text-zinc-50">
            Estrategia de datos
          </h1>
        </div>
        <div className="mx-auto mt-16 flex  w-[95%] max-w-[800px] flex-wrap justify-around gap-5  ">
          <div className="flex w-1/3 flex-col justify-center rounded-xl bg-[#d61c26] p-3 ">
            <h1 className="text-center font-semibold text-zinc-50">
              {" "}
              Aumento de la eficiencia operativa
            </h1>
            <h1 className="text-center text-7xl font-semibold text-zinc-50">
              30%{" "}
            </h1>
          </div>
          <div className="flex w-1/3 flex-col justify-center rounded-xl bg-[#d61c26] p-3 text-center">
            <h1 className="font-semibold text-zinc-50">
              {" "}
              Precisión de la decisiones estratégicas
            </h1>
            <h1 className="text-center text-7xl font-semibold text-zinc-50">
              90%
            </h1>
          </div>
          <div className="flex w-1/3 flex-col  justify-center rounded-xl bg-[#d61c26] p-3 ">
            <h1 className="text-center font-semibold text-zinc-50">
              {" "}
              Mejora competitiva del mercado
            </h1>
            <h1 className="text-center text-7xl font-semibold text-zinc-50">
              90%
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Quallie</h1>
        <h1 className="text-center text-lg italic text-zinc-500">
          Lorem, ipsum.
        </h1>

        <p className="mx-auto w-[85%] py-5 text-zinc-600 md:w-auto md:px-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          molestiae maiores incidunt recusandae delectus pariatur provident
          aperiam ratione blanditiis molestias culpa facere aliquid totam eaque,
          voluptatum error repudiandae, explicabo dignissimos ad beatae
          temporibus quasi at laudantium. Sapiente cumque nulla adipisci!
        </p>
        <iframe
          className="mx-auto mt-5 aspect-[800/450] max-h-[450px] w-[85%] max-w-[800px]"
          src="https://www.youtube.com/embed/nine3gQLhAQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Quallie Bot</h1>

        <p className="mx-auto w-[85%] py-5 text-zinc-600 md:w-auto md:px-32">
          Quallie es Un Asistente de BI que te permite interactuar con tus KPI´s
          de negocio de manera fácil y ágil, conectándose a tus datos y
          respondiendo en tiempo real.
        </p>
        <iframe
          className="mx-auto mt-5 aspect-[800/450] max-h-[450px] w-[85%] max-w-[800px]"
          src="https://www.youtube.com/embed/ltaXCRhQ-ew"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InteligenciaEmpresarial;
