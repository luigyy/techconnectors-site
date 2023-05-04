import Link from "next/link";

const InteligenciaEmpresarial = ({}) => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-70 py-6 text-center text-3xl font-semibold">
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
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Exek</h1>
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
