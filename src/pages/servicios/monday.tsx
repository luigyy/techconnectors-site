import Image from "next/image";
//
const Monday = () => {
  return (
    <div className="">
      <div className="red-dotted-bg  h-[50vh] overflow-hidden  px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-60 py-6 text-center  text-6xl font-semibold">
          We're official partners of
        </h1>
        <h1 className="flex items-center justify-center gap-x-2 bg-white bg-opacity-60 py-2 text-center text-4xl font-semibold">
          <span>
            <Image src="/monday-logo.png" width={60} height={60} alt="" />
          </span>
          <span className="text-5xl">
            Monday<span className="text-3xl font-normal">.com</span>
          </span>
        </h1>
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
