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
  }
  
function handleRemoveContainer() {
  pilha1.pop()
  console.log(pilha1)
  
}

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div className='w-1/2 mx-auto'>
        <h1 className='text-white font-bold text-3xl pt-20 text-center'>Adicione a Descrição do container</h1>
        <div className='mt-8 px-32'>
          <input type="text" className='rounded-md mr-10 py-2 px-1' placeholder='Insira o codigo' value={description} onChange={onChange}/>
          <input type="text" className='rounded-md py-2 px-1' placeholder='Insira a descrição' value={description} onChange={onChange}/>
        </div>
        <div className='mt-4 px-36 space-x-24'>
          <button className='bg-blue-900 rounded-md px-10 py-2 text-white' onClick={handleAddNewContainer}>Adicionar</button>
          <button className='bg-blue-900 rounded-md px-10 py-2 text-white' onClick={handleRemoveContainer}>Remover</button>
          <button className='bg-blue-900 rounded-md px-10 py-2 text-white' onClick={listarPilhas}>Listar</button>
        </div>  
      </div>
      <div className="flex-wrap">
      
        <div className='bg-slate-400 w-96 mx-auto mt-4 rounded-lg border border-blue-500'>
          { pilha1.map( (pilha1) => <h1 className='' key={ pilha1.cod }>{pilha1.descricao}</h1>) }
        </div>
        
        <br/>
        
        <div className='bg-slate-500 w-96 mx-auto rounded-lg border border-blue-500'>
        { pilha2.map( (pilha2) => <h1 key={ pilha2.cod }>{pilha2.descricao}</h1>) }
        </div>
        
        <br/>
        <div className='bg-slate-600 w-96 mx-auto rounded-lg border border-blue-500'>
        { pilha3.map( (pilha3) => <h1 key={ pilha3.cod }>{pilha3.descricao}</h1>) }
        </div>
        <br/>
        <div className='bg-slate-700 w-96 mx-auto rounded-lg border border-blue-500'>
        { pilha4.map( (pilha4) => <h1 key={ pilha4.cod }>{pilha4.descricao}</h1>) }
        </div>
      </div>
    </div>
  );
}

export default App;
