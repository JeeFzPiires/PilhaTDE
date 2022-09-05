import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [pilhas, setPilhas] = useState([]);
  const [description, setDescription] = useState('')
  const Pilha1 = []
  const Pilha2 = []
  const Pilha3 = []
  const Pilha4 = []

  function handleAddNewContainer() {
    const maxLength = 5;
  
    if(description.length == 0){
      alert("A descrição não pode ser vazia")
    } else {
      setPilhas(pilhas.push(description));
      setDescription("")
    }
    if(pilhas != null){
      Pilha1.push(pilhas)
    }

    console.log(Pilha1)
  }

  
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div>
        <h1 className='text-white'>Adicione o código do container</h1>
        <input type="text" placeholder='Insira a descrição do container' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button className='bg-red-700' onClick={handleAddNewContainer}>Adicionar</button>
      </div>
      <div className="bg-blue-500 flex flex-wrap">
        <div className='basis-1/2'>
          <h1>{description}</h1>
        </div>
        <div className='basis-1/2'>
          <h1>Pilha 2</h1>
        </div>
        <div className='basis-1/2'>
          <h1>Pilha 3</h1>
        </div>
        <div className='basis-1/2'>
          <h1>Pilha 4</h1>
        </div>
      </div>
    </div>
  )
}

export default App
