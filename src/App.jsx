import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [description, setDescription] = useState("");
  const id = Math.floor(100);
  const [pilha1, setPilha1] = useState([]);
  const [pilha2, setPilha2] = useState([]);
  const [pilha3, setPilha3] = useState([]);
  const [pilha4, setPilha4] = useState([]);

  function listarPilhas() {
    console.log(
      "Pilha 1: ",
      pilha1,
      "\n Pilha 2: ",
      pilha2,
      "\n Pilha 3: ",
      pilha3,
      "\n Pilha 4: ",
      pilha4
    );
  }

  function handleAddNewContainer() {
    const newPilha = {
      cod: id * Math.floor(Math.random() * id),
      descricao: description,
    };

    const newPilhas = [...pilha1, newPilha];

    if (pilha1.length >= 0 && pilha1.length < 3) {
      setPilha1(newPilhas);
    } else if (pilha2.length >= 0 && pilha2.length < 3) {
      const newPilhas2 = [...pilha2, newPilha];
      setPilha2(newPilhas2);
    } else if (pilha3.length >= 0 && pilha3.length < 3) {
      const newPilhas3 = [...pilha3, newPilha];
      setPilha3(newPilhas3);
    } else if (pilha4.length >= 0 && pilha4.length < 3) {
      const newPilhas4 = [...pilha4, newPilha];
      setPilha4(newPilhas4);
    } else {
      return alert(
        "Todas Pilhas estão cheias remova, para adicionar um novo container"
      );
    }
    setDescription("");
    console.log(pilha1);
  }

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div>
        <h1 className="text-white">Adicione o código do container</h1>
        <h1 className="text-white">So pra testar</h1>
        <input
          type="text"
          placeholder="Insira a descrição do container"
          value={description}
          onChange={onChange}
        />
        <button className="bg-red-700" onClick={handleAddNewContainer}>
          Adicionar
        </button>
        <div>
          <button className="bg-red-700" onClick={listarPilhas}>
            Listar
          </button>
        </div>
      </div>
      <div className="bg-blue-500 flex flex-wrap">
        <div className="basis-1/2">
          <h1 id="pilha1">{pilha1.cod}</h1>
        </div>
        <div className="basis-1/2">
          <h1>{pilha2.descricao}</h1>
        </div>
        <div className="basis-1/2">
          <h1>{pilha3.descricao}</h1>
        </div>
        <div className="basis-1/2">
          <h1>{pilha4.descricao}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
