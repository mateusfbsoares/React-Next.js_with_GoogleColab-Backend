import React, { useState } from "react";

function Home(props) {
  const [outputImageUrl, setOutputImageUrl] = useState<string>();
  const [inputColor, setInputColor] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://127.0.0.1:5000";

  function generateImage_and_getImageUrl() {
    const fetchApi = async () => {
      const response = await fetch(
        `${url}/generateImage?inputColor=${inputColor}`
      );
      setOutputImageUrl(response.url);
      setIsLoading(false);
    };
    fetchApi();
  }

  const handleFormChange = (e) => {
    setInputColor(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateImage_and_getImageUrl();
  };

  return (
    <div className="font-serif">
      {/* título */}
      <div className="w-full text-center text-3xl font-bold pt-8">
        Criatividade Computacional - Grupo 3
      </div>

      {/* conteúdo */}
      <div className="px-12">
        {/* descrição (cards do topo) */}
        <div className="flex py-12">
          {/* card da esquerda */}
          <div className="bg-gray-200 w-full mr-2 text-black text-xl p-2">
            <div className="w-full text-center font-bold">A ferramenta</div>{" "}
            <div>
              Esta ferramenta te ajuda a criar uma capa para o seu álbum
              musical.
            </div>
            <div>
              Forneça o nome do artista e palavras-chave, que podem ser
              retiradas dos títulos das músicas ou de suas letras, e receba uma
              imagem gerada só para você.
            </div>
          </div>

          {/* card da direita */}
          <div className="bg-gray-200 w-full mr-2 text-black text-xl p-2">
            <div className="w-full text-center font-bold">Como utilizar</div>{" "}
          </div>
        </div>

        {/* card central */}
        <div className="w-full flex bg-gradient-to-b from-gray-800 to-gray-900">
          {/* inputs */}
          <div className="py-2 text-2xl text-center w-full border-r-2 border-dashed border-gray-300">
            <div>Inputs</div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-center items-center"
            >
              <label>
                <input
                  type="text"
                  name="name"
                  className="w-full text-white border-2 border-transparent hover:border-gray-300 duration-100 bg-black rounded-xl p-2 ml-3 mr-1 font-bold"
                  onChange={(e) => handleFormChange(e)}
                />
              </label>
              <div className="w-full my-2">
                <input
                  type="submit"
                  value="Clique aqui para gerar a imagem"
                  className="text-black bg-gray-400 font-bold p-1 text-xl rounded-xl cursor-pointer"
                />
              </div>
            </form>
          </div>

          {/* outpu */}
          <div className="py-2 text-2xl text-center w-full">
            {/* title */}
            <div>Output</div>
            {/* content */}
            <div className="flex justify-center py-4">
              {isLoading && <div>Loading...</div>}

              {!isLoading && <img src={outputImageUrl}></img>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
