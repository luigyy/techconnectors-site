import React from "react";

const _index = () => {
  return (
    <div>
      <div className="dotted-bg h-screen px-32 py-12">
        <h1 className="pb-16 text-center font-fjalla text-5xl font-semibold">
          Quienes somos?
        </h1>

        <div className="flex flex-wrap justify-around gap-4 gap-y-7">
          <p className=" glow-on-hover max-w-[400px] rounded-2xl bg-white px-6 py-2   ">
            Somos una empresa enfocada en acelerar la transformación digital
            Preparamos a las empresas para el uso de tecnologías que humanizan
            las operaciones empresariales .
          </p>
          <br />
          <p className=" glow-on-hover max-w-[400px] rounded-2xl bg-white  px-6 py-2 ">
            Todo comienza por la estrategia, es por eso que nuestras soluciones
            permiten aplicar implementaciones ágiles con tecnología de punta.
          </p>
          <br />
          <p className="glow-on-hover max-w-[400px] rounded-2xl border bg-white px-6  py-2 shadow-md ">
            Nos enfocamos en crear estrategias integrales para las empresas.
            Basados en un modelo ágil de mejora continua de 6 etapas logramos
            acelerar la implementación de tecnología y aumentar la experiencia
            del usuario a través de talleres de humanización y el descubrimiento
            de las necesidades reales organizacionales.
          </p>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-center font-fjalla text-5xl tracking-wide">
          Connectors:
        </h1>
      </div>
    </div>
  );
};

export default _index;
