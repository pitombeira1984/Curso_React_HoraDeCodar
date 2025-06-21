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
// Importando ShowUserName
import ShowUserName from './components/ShowUserName';
// Importando CarDetails
import CarDetails from './components/CarDetails';
// Importando Fragments
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';

// Renderização de Listas com Componente
const cars = [
  {id: 1, marca: "Ferrari", km: 0, cor: "Preto"},
  {id: 2, marca: "Kia", km: 2000, cor: "Branco"},
  {id: 3, marca: "Renault", km: 20000, cor: "Vermelha"},
]

function App() {

  function showMessage() {
    console.log("Mensagem de teste")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
        {/* Props */}
        <ShowUserName name="Pitombeira" />
        {/* DesestruturandoProps */}
        <CarDetails marca="Ford" km={2000} cor="Preto" />
        <h3>Reaproveitamento de componentes(Componente CarDetails)</h3>
        <div className="listcard">
          {/* Reaproveitamento de componentes(Componente CarDetails) */}
          <CarDetails marca="Chevrolet" km="0km" cor="Branco" />
          <CarDetails marca="VW" km={20000} cor="Vermelha" />
        </div>
        <h3>Renderização de listas com Componente</h3>
        <div className="listcard">
          {/* Renderização de listas com Componente */}
          {cars.map((car) => (
            <CarDetails 
              key={car.id} 
              marca={car.marca} 
              km={car.km} 
              cor={car.cor} 
            />
          ))}
        </div>
        {/* Fragment */}
        <h3>Fragment</h3>
        <Fragments />
        {/* Children */}
        <h3>Children</h3>
        <Container>
          <p>Children</p>
          <div>
            <p>Children2</p>
          </div>
        </Container>
        {/* Executando função através de prop*/}
        <h3>Executando função através de prop</h3>
        <ExecuteFunction myFunction={showMessage} />
        {/* State Lift */}
        <h3>State Lift</h3>
        <Message msg={message} />
        <ChangeMessage handleMessage={handleMessage} />
      </div>
    </>
  )
}

export default App
