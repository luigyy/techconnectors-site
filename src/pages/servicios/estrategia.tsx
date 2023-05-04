import Image from "next/image";

const Robocorp = () => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-70 py-6 text-center text-4xl font-semibold">
          Te creamos una estrategía{" "}
          <span className="text-[#bf1922]">personalizada</span> a tus objetivos
          desde 0
        </h1>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-4xl">
          Que es un estrategia digital?
        </h1>

        <p className="mx-auto mb-5 w-[85%] py-5 text-lg text-zinc-600 md:w-auto md:px-32">
          Una estrategia es un plan detallado que se crea para lograr un
          objetivo específico. En el caso de la transformación digital, se trata
          de un conjunto de acciones planificadas y coordinadas para adaptar una
          empresa a los cambios tecnológicos y aprovechar al máximo las
          oportunidades que ofrece la era digital.
        </p>

        <div className="grid grid-cols-3 gap-5  ">
          {[
            { img: "defining.png", description: "Definir objetivos de la DX" },
            {
              img: "identify.png",
              description: "Evaluar el estado de la empresa",
            },
            {
              img: "check-list.png",
              description: "Identificar necesidades internas y externas",
            },
            {
              img: "establishment.png",
              description: "Establecer un plan de acción",
            },
            { img: "research.png", description: "Monitoreo" },
            { img: "performance.png", description: "Mejora continua" },
          ].map((item, index) => (
            <div key={index} className="rounded-lg border p-5">
              <Image
                src={`/${item.img}`}
                width={60}
                height={30}
                className="mx-auto"
                alt=""
              />
              <p className="mt-3 text-center text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Robocorp;
