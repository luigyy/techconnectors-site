import Image from "next/image";
//
const Monday = () => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[60vh] overflow-hidden   px-4  md:px-32">
        <div className="relative mx-auto mt-10 max-h-[300px] max-w-[800px] ">
          <h1 className="rounded-xl  bg-white bg-opacity-30 py-6 text-center font-fjalla text-6xl  font-semibold md:mt-20">
            Somos partners oficiales de
          </h1>
          <h1 className="flex items-center justify-center gap-x-2 bg-white bg-opacity-60 py-2 text-center text-4xl font-semibold">
            <span>
              <Image src="/monday-logo.png" width={60} height={60} alt="" />
            </span>
            <span className="font-fjalla text-5xl">
              Monday<span className="text-3xl font-normal">.com</span>
            </span>
          </h1>
          {/* stars  */}
          <Image
            className="twinkling-stars absolute left-14 -z-10 border"
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
