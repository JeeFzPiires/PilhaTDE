import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  const Pilha1 = [1,2,3]
  const Pilha2 = [1,2,3]
  const Pilha3 = [1,2,3]
  const Pilha4 = [1,2,3]

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <div>
        <h1 className='text-white'>Adicione o código do container</h1>
        <input type="text" />
        <button>Adicionar</button>
      </div>
      <div className="bg-blue-500 flex flex-wrap">
        <div className='basis-1/2'>
          <h1>{Pilha1}</h1>
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
