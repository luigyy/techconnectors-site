import Link from "next/link";
const Rpa = () => {
  return (
    <div className="">
      <div className="red-dotted-bg h-[50vh] overflow-hidden px-4 md:px-32">
        <h1 className=" mt-20 rounded-xl bg-white bg-opacity-70 py-6 text-center text-3xl font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          tempore ducimus laboriosam nostrum dolorem illum veritatis adipisci
          laborum reiciendis illo mollitia maiores eligendi obcaecati aliquid
          vitae perferendis molestiae dicta corrupti ullam modi vero, quisquam,
          eius rem maxime! Odit, minus molestiae!
        </h1>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Robocorp Gen2</h1>
        <h1 className="text-center text-lg italic text-zinc-500">
          Lorem, ipsum.
        </h1>

        <p className="px-32 py-5 text-zinc-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          molestiae maiores incidunt recusandae delectus pariatur provident
          aperiam ratione blanditiis molestias culpa facere aliquid totam eaque,
          voluptatum error repudiandae, explicabo dignissimos ad beatae
          temporibus quasi at laudantium. Sapiente cumque nulla adipisci!
        </p>
        <iframe
          className="mx-auto mt-12 max-h-[450px] max-w-[800px]"
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
