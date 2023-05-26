import Image from "next/image";
//
const Monday = () => {
  return (
    <div className="">
      <div className="red-dotted-bg  h-[60vh] overflow-hidden  px-4  md:px-32">
        <div className=" relative mx-auto mt-10 max-h-[300px] max-w-[800px] py-10 md:py-0  ">
          <h1 className="rounded-xl  bg-white bg-opacity-30 py-6 text-center font-fjalla text-6xl font-semibold  md:mt-20 2xl:text-7xl">
            Somos partners oficiales de
          </h1>
          <h1 className="flex items-center justify-center gap-x-2 bg-white bg-opacity-30 py-2 text-center text-4xl font-semibold">
            <span>
              <Image src="/monday-logo.png" width={60} height={60} alt="" />
            </span>
            <span className="font-fjalla text-4xl 2xl:text-6xl">
              Monday<span className="text-3xl font-normal">.com</span>
            </span>
          </h1>
          {/* stars  */}
          <Image
            className="twinkling-stars absolute left-14 -z-10 "
            src={"/star.png"}
            width={30}
            height={30}
            alt=""
            style={{ animationDelay: "0s" }}
          />
          <Image
            className="twinkling-stars absolute -bottom-5  right-1/3  -z-10"
            src={"/star.png"}
            width={20}
            height={20}
            alt=""
            style={{ animationDelay: "1s" }}
          />
          <Image
            className="twinkling-stars absolute -top-5 right-1/3  -z-10"
            src={"/star.png"}
            width={30}
            height={30}
            alt=""
            style={{ animationDelay: "2s" }}
          />
          <Image
            className="twinkling-stars absolute left-1/3 top-0  -z-10"
            src={"/star.png"}
            width={20}
            height={20}
            alt=""
            style={{ animationDelay: "3s" }}
          />
          <Image
            className="twinkling-stars absolute right-0 top-1/2 -z-10 md:-right-10"
            src={"/star.png"}
            width={40}
            height={40}
            alt=""
            style={{ animationDelay: "4s" }}
          />
          <Image
            className="twinkling-stars absolute top-1/3 -z-10 md:-left-16"
            src={"/star.png"}
            width={25}
            height={25}
            alt=""
            style={{ animationDelay: "5s" }}
          />
          {/* stars  */}
        </div>
      </div>
      <div className=" flex min-h-screen w-full flex-wrap gap-y-5 overflow-x-hidden md:gap-y-0">
        <div className="flex w-full items-center  px-4 py-5 md:w-1/2 md:px-8">
          <div className="mx-auto">
            <h1 className=" max-w-[500px] py-10 text-center font-fjalla text-6xl md:text-left  md:text-7xl">
              <span className="monday-gradient font-fjalla text-[#fb275d]">
                Intégrate
              </span>{" "}
              <span className="font-fjalla text-[#ffcc00]">sin</span>{" "}
              <span className="font-fjalla text-[#00cc6f]">problemas</span>
            </h1>
            <p className=" text- max-w-[500px]  text-center text-zinc-600 md:text-left md:text-2xl ">
              Conéctate a las herramientas que tu organización ya utiliza y
              gestiona todo tu trabajo desde un solo lugar. Realiza
              integraciones con más de 50 herramientas externas, incluyendo
              Microsoft Teams, Adobe Creative Cloud, Jira, Salesforce, NetSuite
              y muchas más.
            </p>
          </div>
        </div>
        <div className=" relative flex w-full items-center justify-center py-10 md:w-1/2   md:py-0">
          <div className="absolute  -left-5 -z-10 h-full w-[150vh] bg-zinc-800  md:-skew-x-[25deg]"></div>
          <div className="z-10 mx-auto ">
            <h1 className=" py-4  text-center font-fjalla text-4xl text-[#ffcc00] 2xl:text-5xl ">
              Un lugar
            </h1>
            <Image
              src={"/monday-centralized.png"}
              width={1000}
              height={1000}
              alt=""
              className="rotate-animation max-w- mx-auto w-[75%]"
            />
            <h1 className="py-4 text-center font-fjalla text-4xl text-[#00cc6f] 2xl:text-5xl ">
              para gestionarlo todo
            </h1>
          </div>
        </div>
      </div>

      <div className="min-h-screen justify-center py-20 ">
        <h1 className="text-center font-fjalla text-5xl">
          Crea procesos mas inteligentes
        </h1>
        <div className=" relative mx-auto mt-10 flex w-full max-w-[900px] flex-wrap justify-around gap-y-5  px-4  py-5 md:gap-y-0">
          {[
            {
              src: "monday-productivity.png",
              text: "Aumenta la productividad en toda tu organización con una plataforma flexible.",
            },
            {
              src: "monday-savetime.png",
              text: "Crea flujos de trabajo personalizados que se adapten a las metodologías de trabajo de cada equipo ",
            },
            {
              src: "monday-workflow.png",
              text: " Ahorra tiempo con plantillas y formularios.",
            },
          ].map((item, index) => (
            <>
              <div
                key={index}
                className=" aspect-[13/16] w-[250px] rounded-xl border py-5 transition-all hover:scale-[103%]"
              >
                <Image
                  src={`/${item.src}`}
                  width={200}
                  height={200}
                  alt=""
                  className=" mx-auto w-1/2 p-2"
                />
                <p className="px-3 py-5 text-center text-lg font-semibold ">
                  {item.text}
                </p>
              </div>
            </>
          ))}
          {/* blobs */}
          <div className="blob-1 absolute left-0 -z-10 h-72 w-72 rounded-full bg-[#ffcc00] opacity-30 mix-blend-multiply blur-3xl md:opacity-40 "></div>
          <div className="blob-2 absolute top-[300px] -z-10 h-72 w-72 rounded-full bg-[#fb275d] opacity-30 mix-blend-multiply blur-3xl md:bottom-auto md:top-auto  md:opacity-40"></div>
          <div className="blob-3 absolute bottom-16 right-0 -z-10 h-72 w-72 rounded-full bg-[#00cc6f] opacity-30 mix-blend-multiply  blur-3xl md:bottom-auto  md:opacity-40 "></div>
          {/* blobs */}
        </div>
      </div>

      <div className="overflow-hidden  bg-white px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Monday</h1>
        <h1 className="text-center text-lg italic text-zinc-500"></h1>

        <p className="mx-auto w-[85%] py-5 text-center text-lg text-zinc-600 md:w-auto md:px-32">
          Una breve introducción a Monday.com
        </p>
        <iframe
          className="mx-auto  mt-12 aspect-[800/450] max-h-[450px] w-[85%] max-w-[800px]"
          src="https://www.youtube.com/embed/AinvlG3eaJ4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Monday;
