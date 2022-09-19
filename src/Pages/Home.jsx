import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Home() {
  const [description, setDescription] = useState("");
  const [codigo, setCodigo] = useState(0)
  const idRandom = Math.floor(100);

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
    let tamanhoArray1 = pilha1.length;
    let tamanhoArray2 = pilha2.length;
    let tamanhoArray3 = pilha3.length;
    let tamanhoArray4 = pilha4.length;

    var menor = Math.min(
      tamanhoArray1,
      tamanhoArray2,
      tamanhoArray3,
      tamanhoArray4
    );
    if(description === '' || codigo === 0){
      alert("Infome uma descrição e um codigo")
      return;
    }

    const newPilha = {
      codigoContainer: codigo,
      id: idRandom * Math.floor(Math.random() * idRandom),
      descricao: description,
    };

    const newPilhas = [...pilha1, newPilha];

    if (menor === tamanhoArray1 && pilha1.length >= 0 && pilha1.length < 3) {
      setPilha1(newPilhas);
    } else if (
      menor === tamanhoArray2 &&
      pilha2.length >= 0 &&
      pilha2.length < 3
    ) {
      const newPilhas2 = [...pilha2, newPilha];
      setPilha2(newPilhas2);
    } else if (
      menor === tamanhoArray3 &&
      pilha3.length >= 0 &&
      pilha3.length < 3
    ) {
      const newPilhas3 = [...pilha3, newPilha];
      setPilha3(newPilhas3);
    } else if (
      menor === tamanhoArray4 &&
      pilha4.length >= 0 &&
      pilha4.length < 3
    ) {
      const newPilhas4 = [...pilha4, newPilha];
      setPilha4(newPilhas4);
    } else {
      return alert(
        "Todas Pilhas estão cheias remova, para adicionar um novo container"
      );
    }

    setDescription("");
  }

  function handleRemoveContainer() {
    pilha1.pop();
    console.log(pilha1);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeCod = (e) => {
    setCodigo(e.target.value);
  };

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div className="w-1/2 mx-auto flex flex-col">
        <h1 className="text-white font-bold text-3xl pt-20 text-center">
          Adicione a Descrição do container
        </h1>

        <div className="mt-8 px-32 grid grid-cols-2">
          <Input placeholder="Insira o codigo" onChange={onChangeCod} />
          <Input placeholder="Insira a descrição" value={description} onChange={onChangeDescription} />
        </div>

        <div className="mt-4 px-24 gap-2 grid grid-cols-3">
          <Button description="Adicionar" onClick={handleAddNewContainer} />
          <Button description="Remover" onClick={handleRemoveContainer} />
          <Button description="Listar" onClick={listarPilhas} />
        </div>
      </div>

      <div className="flex-wrap">
        <div className="bg-slate-400 w-96 mx-auto mt-6 rounded-lg border border-blue-500 px-2">
          {pilha1.map((pilha1) => (
            <h1 key={pilha1.id}>{pilha1.cod} {pilha1.descricao}</h1>
          ))}
        </div>

        <div className="bg-slate-400 w-96 mx-auto rounded-lg border border-blue-500 px-2 mt-6">
          {pilha2.map((pilha2) => (
            <h1 key={pilha2.id}>{pilha2.descricao}</h1>
          ))}
        </div>

        <div className="bg-slate-400 w-96 mx-auto rounded-lg border border-blue-500 px-2 mt-6">
          {pilha3.map((pilha3) => (
            <h1 key={pilha3.id}>{pilha3.descricao}</h1>
          ))}
        </div>
        
        <div className="bg-slate-400 w-96 mx-auto rounded-lg border border-blue-500 px-2 mt-6">
          {pilha4.map((pilha4) => (
            <h1 key={pilha4.id}>{pilha4.descricao}</h1>
          ))}
        </div>


      </div>
    </div>
  );
}
