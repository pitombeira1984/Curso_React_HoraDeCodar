//React Icons
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
// Componentes
import './App.css'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

//Hooks
import { userForm } from './hooks/userForm'

function App() {

  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>]

  const {currentStep, currentComponent, changeStep, isLastStep} = userForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua Avaliação</h2>
        <p>
          Ficamos felizes com sua compra, 
          utilize o formulario abaixopara avaliar o produto
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            <button type='button' onClick={() => changeStep(currentStep - 1)} disabled={currentStep === 0}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            {!isLastStep && (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
          {isLastStep && (
            <div className="submit-area">
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default App
