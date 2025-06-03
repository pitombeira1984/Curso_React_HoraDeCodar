import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App"> 
        <h1>Avançando em React</h1>
        {/*imagem em public*/}
        <img src="/city.jpg" alt="ImgCidade" />
      </div>
    </>
  )
}

export default App
