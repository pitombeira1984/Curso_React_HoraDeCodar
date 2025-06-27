
import './App.css'
import MyComponent from './components/mycomponent/MyComponent'
import Title from './components/mytitle/title';

function App() {
  const n = 9;
  const redTitle = true;
  return (
    <div className='App'>
      {/* 1 - css global */}
      <h1>CSS em React</h1>
      {/* 2 - css componente */}
      <MyComponent />
      <p>Pegou o CSS do Componente</p>
      {/* 3 - css inline */}
      <p style={{ color: 'blue', fontSize: '20px' }}>Este parágrafo tem estilo inline</p>
      {/* 4 - css inline dinâmico */}
      <p style={n < 10 ? { color: 'red' } : { color: 'green' }}>
        Este parágrafo tem estilo inline dinâmico {n}
      </p>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title/>
    </div>
  )
}

export default App
