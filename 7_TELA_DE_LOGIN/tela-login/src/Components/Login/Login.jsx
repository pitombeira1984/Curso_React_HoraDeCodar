import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './login.css'


const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    alert(`Enviando Dados -> Usuário: ${userName} \nSenha: ${password}`)

    setUserName('');
    setPassword('');
  }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesso ao Sistema</h1>
            <div className='input-field'>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='E-mail'
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                />
                <FaUser className='icon'/>
            </div>
            <div className='input-field'>
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <FaLock className='icon'/>
            </div>
            <div className="recall-forget">
              <label>
                <input type="checkbox" name="checkbox" id="checkbox" />
                Lembrar-me
              </label>
              <a href="#">Esqueceu a Senha ?</a>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
              <p>
                Não possui conta ? <a href="#">Cadastre-se</a>
              </p>
            </div>
        </form>
    </div>
  )
}

export default Login