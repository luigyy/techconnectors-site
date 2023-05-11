import Image from "next/image";
import { useState } from "react";
import Modal from "../../components/Modal";

//
const asistentesDigitales = () => [
  {
    title: "Financieros",
    description: "",
  },
  {
    title: "Cotización a cobro (QTC)",
    description: "",
  },
  {
    title: "Órdenes de compra  (Procure to pay)",
    description: "",
  },
  {
    title: "Integración de clientes",
    description: "",
  },
  {
    title: "Migración de datos e ingreso",
    description: "",
  },
  {
    title: "Seguros",
    description: "",
  },
  {
    title: "Procesamiento de Préstamos",
    description: "",
  },
  {
    title: "Ejecución Comercial",
    description: "",
  },
  {
    title: "Conciliación de cuentas bancarias",
    description: "",
  },
  {
    title: "Procesamiento de facturas",
    description: "",
  },
  {
    title: "Operación",
    description: "",
  },
  {
    title: "Gestión de gastos",
    description: "",
  },
  {
    title: "Trámites de reclamo",
    description: "",
  },
  {
    title: "Tramitación de apelaciones",
    description: "",
  },
  {
    title:
      "Recopilación y liquidación de primas (emisión de estados de cuenta)",
    description: "",
  },
  {
    title: "Recursos Humanos",
    description: "",
  },
  {
    title: "Preselección de candidatos",
    description: "",
  },
  {
    title: "Verificación de antecedentes",
    description: "",
  },
  {
    title: "Pago de planilla",
    description: "",
  },
  {
    title: "Gestión de ausencias",
    description: "",
  },
];
//
const Rpa = () => {
  const [modal, setModal] = useState({ title: "", description: "" });
  return (
    <div className="">
      <div className="red-dotted-bg flex min-h-[50vh] items-center overflow-hidden px-4 md:px-32">
        <div className="w-full p-1 md:w-1/2 ">
          <h1 className="mt-8 p-1 text-center font-fjalla text-5xl text-[#bf1922]">
            Automatización sin límites
          </h1>

          <h1 className="  rounded-xl bg-white bg-opacity-70  text-center text-xl font-semibold sm:text-lg">
            Los equipos que generan sus procesos de automatización con Robocorp,
            se ahorran hasta un <span className="text-[#bf1922]">80%</span> del
            tiempo en comparación a las implementaciones con herramientas Gen1
            logrando tener una escalabilidad mayor sin costos altos y mayor
            estabilidad.
          </h1>
        </div>
        <div className="hidden w-1/2 md:inline ">
          <Image
            className="mx-auto w-[270px] md:w-[220px] "
            src="/robomonkey.png"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="px-4 py-16 md:px-32">
        <h1 className="text-center font-fjalla text-3xl">Robocorp Gen2</h1>
        <h1 className="text-center text-lg italic text-zinc-500">
          Lorem, ipsum.
        </h1>

        <p className="mx-auto w-[85%] py-5 text-center font-fjalla text-2xl text-zinc-600 md:w-auto md:px-32">
          Robocorp Gen2 de RPA es más rápido, estable y con un costo menor SIN
          LICENCIAMIENTO
        </p>

        <div className="flex flex-wrap justify-around  ">
          <div className="flex w-1/2 flex-col justify-center rounded-2xl border bg-[#faf9f5] p-4 sm:w-1/3">
            <h1 className="text-center font-fjalla text-6xl text-[#bf1922]">
              400%
            </h1>
            <h1 className="text-center text-2xl text-zinc-600 ">ROI</h1>
          </div>
          <div className="flex w-1/2 flex-col justify-center rounded-2xl border bg-[#faf9f5] p-4 sm:w-1/3">
            <h1 className="text-center font-fjalla text-6xl text-[#bf1922]">
              80%
            </h1>
            <h1 className="text-center text-2xl text-zinc-600 ">
              Ahorro de tiempo en procesamientos
            </h1>
          </div>
          <div className="flex w-1/2 flex-col  justify-center rounded-2xl border bg-[#faf9f5] p-4 sm:w-1/3">
            <h1 className="text-center font-fjalla text-6xl text-[#bf1922]">
              10
            </h1>
            <h1 className="text-center text-2xl text-zinc-600 ">
              Robots simultáneos por proceso
            </h1>
          </div>
        </div>

        <p className="mx-auto w-[85%] py-5 text-center text-lg text-zinc-500 md:w-auto md:px-32">
          {" "}
          Los equipos que corren sus procesos de automatización en Robocorp, se
          ahorran hasta un 80% del tiempo de lo que lo harían usando
          herramientas Gen1
        </p>
        <iframe
          className="mx-auto mt-12 aspect-[800/450] max-h-[450px] w-[85%] max-w-[800px]"
          src="https://www.youtube.com/embed/_kevv1KtGyQ"
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      {/* sectores  */}
      <div className="mx-auto w-[95%] max-w-[900px] rounded-2xl border-2 bg-[#faf9f5] py-16">
        <h1 className="text-center font-fjalla text-3xl text-zinc-600">
          Sectores que implementan RPA gen2
        </h1>
        <div className="mx-auto mt-12 grid w-full max-w-[800px] grid-cols-2 gap-5 sm:grid-cols-3">
          <div className="">
            <h1 className="text-center font-fjalla text-lg uppercase">
              Logística y distribución
            </h1>
            <Image
              src="/logistica.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-center font-fjalla text-lg uppercase">Salud</h1>
            <Image
              src="/salud.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div className="">
            <h1 className="text-center font-fjalla text-lg uppercase ">
              Consumo masivo
            </h1>
            <Image
              src="/consumo.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center font-fjalla text-lg uppercase">
              Banca y finanzas
            </h1>
            <Image
              src="/bank.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center font-fjalla text-lg uppercase">
              Seguros
            </h1>
            <Image
              src="/seguros.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-center font-fjalla text-lg uppercase">
              Retail
            </h1>
            <Image
              src="/retail.png"
              className="mx-auto"
              width={64}
              height={64}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* sectores  */}

      {/* asistentes digitales  */}
      <div className="py-28">
        <h1 className="font-fjalla text-5xl font-semibold">
          Asistentes digitales
        </h1>
      </div>

      {/* asistentes digitales  */}
    </div>
  );
};

export default Rpa;
