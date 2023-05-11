import Image from "next/image";
import { useState } from "react";
import Modal from "../../components/Modal";

//
const asistentesDigitales = [
  {
    title: "Cotización a cobro (QTC)",
    description:
      "Cada negocio necesita vender para sobrevivir. Los problemas en el lado de las operaciones de venta pueden resultar en quejas de los clientes o ventas a precios reducidos debido a errores administrativos. La automatización del proceso completo de operaciones de venta elimina estos errores y brinda un servicio rápido a sus clientes. Al automatizar el proceso, las ventas se procesan más rápido que mediante procesos manuales, lo que permite que los clientes reciban las facturas de manera más oportuna y mejore el flujo de efectivo. Además, este proceso puede ser más fácil de automatizar, ya que se basa principalmente en datos estructurados de la empresa para generar facturas que se enviarán a los clientes",
  },
  {
    title: "Órdenes de compra  (Procure to pay)",
    description:
      "Dado que el proceso de compra a pago implica extraer datos de facturas y pagos de múltiples sistemas como el planificador de recursos empresariales (ERP), la gestión de relaciones con clientes (CRM), bancos, proveedores y empresas de logística, y dado que no todos estos sistemas proporcionan métodos de integración fáciles, a menudo involucra cierto grado de trabajo manual. Los bots RPA pueden llenar las brechas de integración. Al trabajar en el front-end, pueden ofrecer una forma sencilla de automatizar las integraciones.Con un proceso de compra a pago totalmente automatizado, puede garantizar el cumplimiento de las mejores prácticas de adquisición y tener una única fuente de verdad para todas las transacciones",
  },
  {
    title: "Integración de clientes",
    description:
      "El proceso de integración de clientes es crucial para las empresas B2C, ya que permite reducir la deserción y facilitar que los clientes comiencen a utilizar los productos. Mediante el uso de tecnologías como OCR y automatización cognitiva, es posible realizar de manera instantánea muchas de las tareas asociadas a la integración de clientes, incluso en empresas que dependen de sistemas heredados. Esto tiene un impacto significativo en la experiencia del cliente, mejorándola notablemente. Hemos logrado implementar con éxito el Procesamiento Directo (STP) en el proceso de integración de clientes de un importante banco, lo que ha permitido reducir el tiempo de incorporación de 20 días a tan solo  minutos. Esta optimización ha generado un aumento significativo en la eficiencia y satisfacción de los clientes",
  },
  {
    title: "Migración de datos e ingreso",
    description:
      "Los sistemas heredados continúan desempeñando un papel crítico en las empresas. Por ejemplo, los sistemas de facturación heredados deben interactuar con otros sistemas y es posible que estos no tengan la capacidad de extraer datos relevantes a través de API. En tales casos, los empleados realizan la migración de datos manualmente utilizando formatos como CSV. Sin embargo, la RPA puede evitar el trabajo manual y los posibles errores administrativos asociados.Además, contar con sistemas que mantengan los datos actualizados permite realizar un análisis más preciso y tomar decisiones más informadas. En un mundo en el que incluso el área de marketing cuenta con 5000 aplicaciones para elegir, la RPA puede ayudar a integrar estas aplicaciones y permitir un análisis más holístico.",
  },

  {
    title: "Procesamiento de Préstamos",
    description:
      "Al igual que con la mayoría de las tareas de procesamiento de documentos, este proceso es adecuado para la automatización mediante RPA, ya que la lógica empresarial compleja se puede integrar en los robots que automatizan parcialmente las decisiones de préstamos y los procesos manuales que siguen a dicha decisión.",
  },
  {
    title: "Ejecución Comercial",
    description:
      "En los casos en los que los sistemas heredados no pueden manejar órdenes de compra complejas, los bots RPA pueden ser de gran ayuda. Sin embargo, esta solución es más una medida temporal, ya que a largo plazo, migrar hacia un sistema de comercio sofisticado y capaz sería una inversión acertada, ya que podría mejorar el comercio y reducir la carga de los operadores.",
  },
  {
    title: "Conciliación de cuentas bancarias",
    description: "",
  },
  {
    title: "Procesamiento de facturas",
    description:
      "Los sistemas heredados continúan desempeñando un papel crítico en las empresas. Por ejemplo, los sistemas de facturación heredados deben interactuar con otros sistemas y es posible que estos no tengan la capacidad de extraer datos relevantes a través de API. En tales casos, los empleados realizan la migración de datos manualmente utilizando formatos como CSV. Sin embargo, la RPA puede evitar el trabajo manual y los posibles errores administrativos asociados. Además, contar con sistemas que mantengan los datos actualizados permite realizar un análisis más preciso y tomar decisiones más informadas. En un mundo en el que incluso el área de marketing cuenta con 5000 aplicaciones para elegir, la RPA puede ayudar a integrar estas aplicaciones y permitir un análisis más holístico",
  },

  {
    title: "Gestión de gastos",
    description:
      "La gestión de gastos implica el seguimiento y control de los gastos incurridos por la empresa, incluidos los reembolsos de empleados y los gastos relacionados con viajes y entretenimiento. La automatización de este proceso permite capturar y categorizar automáticamente los gastos, verificar las políticas de gastos y facilitar la presentación de informes",
  },
  {
    title: "Trámites de reclamo",
    description:
      "El proceso de trámites de reclamo en el sector de seguros implica la presentación, evaluación y resolución de reclamaciones por parte de los asegurados. Tradicionalmente, este proceso ha sido manual y requiere una gran cantidad de tiempo y recursos. Sin embargo, mediante la automatización robótica de procesos (RPA), es posible agilizar y mejorar significativamente este proceso.Con la implementación de RPA, los bots pueden encargarse de recopilar la información necesaria de los asegurados, verificar la validez de los reclamos, procesar la documentación requerida y realizar las correspondientes notificaciones a las partes involucradas. Esto reduce la carga de trabajo manual, acelera los tiempos de respuesta y mejora la precisión en la evaluación de los reclamos.Además, la automatización de los trámites de reclamo permite una mayor transparencia y seguimiento del proceso. Los asegurados pueden recibir actualizaciones en tiempo real sobre el estado de sus reclamos y acceder a la información relevante de manera más rápida y eficiente.",
  },
  {
    title: "Tramitación de apelaciones",
    description:
      "La tramitación de apelaciones en el ámbito de los seguros implica revisar y resolver las apelaciones presentadas por los asegurados que no están satisfechos con las decisiones iniciales tomadas en relación con sus reclamos. Este proceso puede ser complejo y requiere un análisis exhaustivo de la documentación y la legislación aplicable.Mediante la automatización robótica de procesos (RPA), es posible agilizar y mejorar la tramitación de apelaciones en el sector de seguros. Los bots pueden encargarse de recopilar y analizar la información relevante, aplicar las normativas y políticas correspondientes, y generar informes detallados que respalden las decisiones tomadas.La implementación de RPA en la tramitación de apelaciones proporciona una mayor eficiencia en el proceso, reduciendo los tiempos de respuesta y mejorando la consistencia en la toma de decisiones. Además, permite un seguimiento más preciso y transparente de las apelaciones, brindando a los asegurados una mayor confianza en el proceso y una experiencia más satisfactoria.",
  },
  {
    title:
      "Recopilación y liquidación de primas (emisión de estados de cuenta)",
    description:
      "La recopilación y liquidación de prima es un proceso fundamental en el sector de seguros, que implica la recaudación de las primas de los asegurados y la correcta asignación de los pagos correspondientes. Este proceso puede ser propenso a errores y requiere una gestión precisa y eficiente.Mediante la automatización robótica de procesos (RPA), es posible optimizar y agilizar la recopilación y liquidación de prima en el sector de seguros. Los bots pueden encargarse de recopilar los datos de los asegurados, calcular las primas de manera automática, generar las facturas correspondientes y gestionar los pagos y la asignación de los mismos.",
  },
  {
    title: "Preselección de candidatos",
    description: "",
  },
  {
    title: "Verificación de antecedentes",
    description:
      "es un proceso que implica varios pasos rutinarios, como programar entrevistas y mantener registros actualizados. Robocorp presenta un caso de estudio en el que implementaron un programa de automatización en 8 semanas, reduciendo el trabajo manual en un 40%.La automatización proporcionada por Robocorp permite agilizar y simplificar este proceso de verificación. Mediante la implementación de un programa de automatización en tan solo 8 semanas, Robocorp logró reducir el trabajo manual asociado a la verificación del historial laboral en un 40%.La implementación de la automatización optimiza la gestión de entrevistas, al programarlas de manera eficiente y mantener un seguimiento adecuado de los registros. Esto resulta en un proceso más ágil y preciso, evitando posibles errores humanos y asegurando una verificación confiable del historial laboral de los candidatos.",
  },
  {
    title: "Pago de planilla",
    description: "",
  },
  {
    title: "Gestión de ausencias",
    description:
      "El registro preciso de las ausencias y vacaciones por parte del personal suele ser deficiente. Los empleados pueden estar confundidos o no estar familiarizados con el sistema de gestión de ausencias. Además, pueden evitar aprender o recordar cómo utilizar el sistema, ya que una vez que lo hagan, se les exigirá completar todas sus ausencias, lo cual puede resultar desalentador.La solución más sencilla es permitir que las personas decidan sus vacaciones siempre que cumplan con sus responsabilidades laborales. Esto se conoce como política de vacaciones ilimitadas y puede aumentar la autonomía del equipo y ahorrarles una gran cantidad de trámites burocráticos.Un ejemplo real es proporcionado por Robocorp. Implementaron la automatización para la gestión de certificados médicos en SAP en 3 meses para un proveedor de servicios de recursos humanos en Alemania. La implementación de RPA redujo el esfuerzo manual al 10% de los niveles anteriores a la automatización y disminuyó el tiempo de procesamiento en un 85%.",
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
      <div className=" py-28">
        <h1 className="mb-12 text-center font-fjalla text-5xl font-semibold">
          Asistentes digitales
        </h1>
        <div className="mx-auto grid w-[95%] max-w-[900px] grid-cols-2 gap-5  px-2 md:grid-cols-4 2xl:max-w-[1200px]">
          {asistentesDigitales.map((item, index) => (
            <span
              onClick={() =>
                setModal({ title: item.title, description: item.description })
              }
              key={index}
              className="gradient-border flex cursor-pointer items-center justify-center  rounded-2xl  p-3 text-center text-lg  font-semibold tracking-wide 2xl:text-xl"
            >
              {item.title}
            </span>
          ))}
        </div>
        <Modal
          title={modal.title}
          description={modal.description}
          setModal={setModal}
        />
      </div>
      {/* asistentes digitales  */}
    </div>
  );
};

export default Rpa;
