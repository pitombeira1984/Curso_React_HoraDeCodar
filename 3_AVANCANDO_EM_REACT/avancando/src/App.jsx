import './App.css';
// Importando Imagem de assets
import img1 from './assets/img1.jpg';
// Importando Data
import Data from './components/data';
// Importando ListRender
import ListRender from './components/ListRender';
// Importando Contador
import Contador from './components/PreviousState';
// Importando CondicionalRender
import ConditionalRender from './components/ConditionalRender';


function App() {

  return (
    <>
      <div className="App" style={{paddingBottom: '500px'}}> 
        <h1>Avançando em React</h1>
        {/*imagem em public*/}
        <img src="/city.jpg" alt="ImgCidade" />
        {/*imagem em assets*/}
        <img src={img1} alt="ImgFloresta" />
        {/* useSate */}
        <Data />
        {/* Renderização de listas */}
        <ListRender />
        {/* Previous State */}
        <Contador />
        {/* Renderização Condicional */}
        <ConditionalRender />
      </div>
    </>
  )
}

export default App
