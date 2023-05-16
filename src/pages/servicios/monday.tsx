import Image from "next/image";
//
const Monday = () => {
  return (
    <div className="">
      <div className="red-dotted-bg  relative min-h-[50vh]  overflow-hidden px-4 pb-10 md:px-32">
        <div className="relative mx-auto max-w-[800px]">
          <h1 className=" mt-20 rounded-xl bg-white bg-opacity-60 py-6 text-center  text-6xl font-semibold">
            Somos Partners oficiales de
          </h1>
          <div className="flex items-center justify-center gap-x-2 bg-white bg-opacity-60 py-2 text-center text-4xl font-semibold">
            <span>
              <Image src="/monday-logo.png" width={60} height={60} alt="" />
            </span>
            <span className="text-5xl">
              Monday<span className="text-3xl font-normal">.com</span>
            </span>
          </div>
          {/* stars */}
          <Image
            src={"/star.png"}
            width={30}
            height={30}
            alt=""
            className="twinkling-stars absolute -right-7 top-10 -z-10  "
            style={{ animationDelay: "0s" }}
          />
          <Image
            src={"/star.png"}
            width={20}
            height={20}
            alt=""
            className="twinkling-stars absolute left-10 top-32 -z-10 md:-left-5"
            style={{ animationDelay: "1s" }}
          />
          <Image
            src={"/star.png"}
            width={10}
            height={10}
            alt=""
            className="twinkling-stars absolute -bottom-5 left-1/2 -z-10 md:-bottom-10 2xl:-bottom-16"
            style={{ animationDelay: "2s" }}
          />
          <Image
            src={"/star.png"}
            width={20}
            height={20}
            alt=""
            className="twinkling-stars absolute -top-5 left-10 -z-10 "
            style={{ animationDelay: "3s" }}
          />
          <Image
            src={"/star.png"}
            width={40}
            height={40}
            alt=""
            className="twinkling-stars absolute -top-12 right-1/3 -z-10 "
            style={{ animationDelay: "4s" }}
          />
          {/* stars */}
        </div>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Monday</h1>
        <h1 className="text-center text-lg italic text-zinc-500"></h1>

        <p className="mx-auto w-[85%] py-5 text-zinc-600 md:w-auto md:px-32">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          molestiae maiores incidunt recusandae delectus pariatur provident
          aperiam ratione blanditiis molestias culpa facere aliquid totam eaque,
          voluptatum error repudiandae, explicabo dignissimos ad beatae
          temporibus quasi at laudantium. Sapiente cumque nulla adipisci!
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
