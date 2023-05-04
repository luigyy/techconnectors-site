import Link from "next/link";
const Rpa = () => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-70 py-6 text-center text-3xl font-semibold">
          El objetivo principal de la automatización inteligente es implementar
          el uso de tecnologías que imiten tareas humanas repetitivas, serviles
          y que requieren una gran cantidad de esfuerzo humano innecesario,
          revolucionando así la experiencia de clientes y colaboradores, ya que{" "}
          <span className=" text-[#bf1922]">aumentan la productiva</span> y
          permite a la fuerza laboral humana{" "}
          <span className=" text-[#bf1922]">
            enfocarse en lo que realidad importa
          </span>
        </h1>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Robocorp Gen2</h1>
        <h1 className="text-center text-lg italic text-zinc-500">
          Lorem, ipsum.
        </h1>

        <p className="mx-auto w-[85%] py-5 text-center font-fjalla text-2xl text-zinc-600 md:w-auto md:px-32">
          Robocorp Gen2 de RPA es más rápido, estable y con un costo menor SIN
          LICENCIAMIENTO
        </p>

        <p className="mx-auto w-[85%] py-5 text-center text-lg text-zinc-500 md:w-auto md:px-32">
          {" "}
          Los equipos que corren sus procesos de automatización en Robocorp, se
          ahorran hasta un 80% del tiempo de lo que lo harían usando
          herramientas Gen1
        </p>
        <iframe
          className="mx-auto mt-12 aspect-[800/450] max-h-[450px] w-[85%] max-w-[800px]"
          src="https://www.youtube.com/embed/_kevv1KtGyQ"
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Rpa;
