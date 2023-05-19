import React from "react";

const _index = () => {
  return (
    <div className="overflow-hidden">
      <div className="dotted-bg relative min-h-[65vh] overflow-hidden  px-12 py-12">
        <h1 className="pb-7 text-center font-fjalla text-5xl font-semibold">
          Quienes somos?
        </h1>
        <p className="mx-auto w-[95%] max-w-[350px] text-center text-2xl md:max-w-[800px] md:text-4xl 2xl:max-w-[1200px]">
          Somos una empresa enfocada en acelerar la transformación digital
          Preparamos a las empresas para el uso de tecnologías que humanizan las
          operaciones empresariales
        </p>
        {/* blobs  */}
        <div className="about-blob-1 absolute left-0 top-0 h-80  w-80 rounded-full bg-[#bf1922] opacity-10 mix-blend-multiply blur-3xl "></div>
        <div className="about-blob-2 absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#bf1922] opacity-10 mix-blend-multiply blur-3xl "></div>
        {/* blobs  */}
      </div>
      <div className="mt-12 py-20 md:mt-0">
        <h1 className="text-center font-fjalla text-5xl tracking-wide">
          Connectors:
        </h1>
      </div>
    </div>
  );
};

export default _index;
