import { type NextPage, NextComponentType } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

interface TestimonialProps {
  test: string;
}

const TestimonialCard = ({}) => {
  return <div>test</div>;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techconnectors</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/techconnectors-logo.png" />
        {/* catamaran font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran&display=swap"
          rel="stylesheet"
        />
        {/* catamaran font  */}
        {/* fjalla font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap"
          rel="stylesheet"
        />
        {/* fjalla font  */}
      </Head>
      <Navbar />
      <main className="">
        {/* hero section  */}
        <div className="dotted-bg flex flex-col items-center justify-center  gap-3 pb-28 pt-28 ">
          <h1 className="font-fjalla text-6xl font-semibold tracking-tight">
            Conectando tecnología con tus necesidades.
          </h1>
          <h1 className="font-fjalla text-6xl font-semibold tracking-tight">
            Experimenta el poder de la tecnología en tu negocio.
          </h1>
          <p className="text-xl font-semibold text-zinc-600">
            Hacemos el trabajo de las personas mas fácil a través de nuestras
            soluciones tecnológicas.
          </p>
          <div className="mt-5 flex gap-4">
            <button className="rounded-lg border bg-zinc-50 px-3 py-2 font-semibold tracking-tight text-zinc-800 shadow">
              Siguenos
            </button>
            <button className="glow-on-hover rounded-lg border bg-[#BF1922] px-3 py-2 font-semibold tracking-tight text-white shadow-sm">
              Contáctanos
            </button>
          </div>
        </div>
        {/* hero section  */}

        {/* trusted by section  */}
        <div>
          <h1 className="text-tracking-tight pb-10 text-center text-3xl  text-zinc-400">
            Estas compañias confían en nuestras soluciones
          </h1>
          <div className="mx-auto flex w-2/3 flex-wrap justify-center ">
            {[
              "genpact",
              "lionsgate",
              "monday",
              "hulu",
              "coca-cola",
              "canva",
              "glossier",
            ].map((item) => (
              <img
                src={`${item}.png`}
                className="mx-7 w-36 object-contain grayscale"
                alt=""
              />
            ))}
          </div>
        </div>
        {/* trusted by section  */}
      </main>
    </>
  );
};

export default Home;
