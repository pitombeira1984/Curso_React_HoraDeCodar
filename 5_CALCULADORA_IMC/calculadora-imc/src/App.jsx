
import {useState} from 'react'
import './App.css'
import ImcCalc from './compomente/ImcCalc'
import ImcTable from './compomente/ImcTable'
import {data} from './data/Data'

function App() {

  const CalcImc = (e, height, weight) => {
    e.preventDefault();

    console.log('Calculando IMC com altura:', height, 'e peso:', weight);
    
    if (!height || !weight) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const heightInMeters = parseFloat(height.replace(',', '.'));
    const weightInKg = parseFloat(weight.replace(',', '.'));

    const imc = weightInKg / (heightInMeters * heightInMeters);

    console.log('IMC calculado:', imc.toFixed(2));

    setImc(imc.toFixed(1));

    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        setInfo(item.info);
        setInfoclass(item.infoclass);
      }
    });

    if(!info) return;

  }

  const resetCalc = (e) => {
    e.preventDefault();

    setImc('');
    setImc('');
    setInfoclass('');
  }
  
  const [imc , setImc] = useState('');
  const [info, setInfo] = useState('');
  const [infoclass, setInfoclass] = useState('');

  return (
    <div className='container'>
      {!imc ? (
        <ImcCalc CalcImc = {CalcImc}/>
      ) : (
        <ImcTable 
          data = {data} 
          imc={imc} 
          info={info} 
          infoclass={infoclass} 
          resetCalc={resetCalc}
        />
      )}
    </div>
  )
}

export default App
