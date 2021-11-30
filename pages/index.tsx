import Head from "next/head";
import Home from "./Home";

export default function index() {
  return (
    <div className="">
      {/* Head */}
      <Head>
        <title>Projeto Final CC - Grupo 3</title>
      </Head>

      {/* Main Content */}
      <main className="h-screen bg-gradient-to-tl from-black to bg-gray-900 text-white overflow-y-hidden">
        <Home />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 flex flex-wrap py-2 items-center justify-center w-full h-16">
        <div className="w-full text-center">
          Projeto de Criatividade Computacional
        </div>
        <div className="w-full text-center">Grupo:</div>
      </footer>
    </div>
  );
}
