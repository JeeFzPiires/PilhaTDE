import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  const [codContainer, setCodContainer] = useState(0)

  function handleAddPilha() {
    Pilha1.push(codContainer)

    console.log(Pilha1)
  }

  const Pilha1 = []
  const Pilha2 = []
  const Pilha3 = []
  const Pilha4 = []

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div>
        <h1 className='text-white'>Adicione o código do container</h1>
        <input type="text" placeholder='Insira o código' value={codContainer} onChange={(e) => setCodContainer(e.target.value)}/>
        <button className='bg-red-700' onClick={handleAddPilha}>Adicionar</button>
      </div>
      <div className="bg-blue-500 flex flex-wrap">
        <div className='basis-1/2'>
          <h1>{codContainer}</h1>
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
