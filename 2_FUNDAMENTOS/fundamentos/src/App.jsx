import './App.css'
import FirstComponent from './components/FirstComponent'
// Importando o componente FirstComponent
function App() {

  return (
    <>
      <div className="App"> 
        <h1>Fundamentos React</h1>
        <FirstComponent /> {/* Componente criado */}
        <p>Começando com React</p>
      </div>
    </>
  )
}

export default App
