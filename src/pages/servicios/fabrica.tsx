import Image from "next/image";
const Fabrica = () => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-70 py-6 text-center text-4xl font-semibold">
          Creamos soluciones personalizadas para ayudar a su empresa a prosperar
          en el mundo digital.
        </h1>
      </div>
      <div className="px-4 py-16 md:px-32">
        <div className="flex flex-wrap items-center">
          <div className="md:w-1/2">
            <h1 className="mb-5 px-4 text-center font-fjalla text-3xl md:text-left">
              Nuestro equipo altamente capacitado trabaja con usted para
              comprender sus objetivos.
            </h1>
          </div>

          <div className="mx-auto  md:w-1/2">
            <Image
              src={"/custom-solutions.png"}
              width={250}
              height={250}
              alt=""
              className="float mx-auto "
            />
          </div>
        </div>
      </div>
      <div
        style={{ borderRadius: "0% 100% 0% 100% / 100% 27% 73% 0%" }}
        className=" h-[80vh] w-full overflow-hidden bg-[#bf1922]"
      >
        <div className="mt-32 flex flex-wrap items-center ">
          <div className="mx-auto  md:w-1/2">
            <Image
              src={"/mobile-app.png"}
              width={250}
              height={250}
              alt=""
              className=" float mx-auto "
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-5 px-4 py-10 text-center font-fjalla text-3xl text-zinc-100 md:mt-0 md:text-left">
              Desarrollamos la aplicacion perfecta basado en estos objetivos
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="mt-10 text-center font-fjalla text-5xl">
          Estamos aquí para asegurarnos de que tenga éxito en el mercado móvil.
        </h1>
      </div>
    </div>
  );
};

export default Fabrica;
