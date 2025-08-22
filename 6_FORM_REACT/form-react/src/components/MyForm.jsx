import './MyForm.css';

import { useState } from 'react';

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [role, setRole] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(`Nome: ${name}, E-mail: ${email}`, `Mensagem: ${bio}`, `Função: ${role}`);

        setName('');
        setEmail('');
        setBio('');
        setRole('');
    }

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder='Digite seu Nome' 
                        onChange={handleName}
                        value={name} 
                    />
                </div>
                {/*label envolvendo input*/}
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='Digite seu E-mail'
                        // Simplifcando a função de onChange
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Mensagem:</span>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder='Digite sua Mensagem' 
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></textarea>
                </label>
                <label>
                    <span>Função no Sistema:</span>
                    <select name="funcao" id="funcao" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm;