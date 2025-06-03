import './App.css';
// Importando o componente Events
import Events from './components/Events';
// Importando o componente FirstComponent
import FirstComponent from './components/FirstComponent'
// Importando o componente MyComponent
import MyComponent from './components/MyComponent';
// Importando o componente TemplateExpression
import TemplateExpression from './components/TemplateExpression';

function App() {

  return (
    <>
      <div className="App"> 
        <h1>Fundamentos React</h1>
        <FirstComponent /> {/* Componente criado */}
        <TemplateExpression /> {/* Componente criado */}
        <MyComponent/>
        <Events/>
        <p>Começando com React</p>
      </div>
    </>
  )
}

export default App
