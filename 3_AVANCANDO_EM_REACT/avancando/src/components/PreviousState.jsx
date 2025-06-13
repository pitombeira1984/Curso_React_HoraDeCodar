import { useState, useEffect } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0); // Estado inicial: 0

  useEffect(() => {
    // Este efeito roda toda vez que 'contagem' muda
    if (contagem > 0) {
      console.log(`Contagem atual: ${contagem}. Previous State (era): ${contagem - 1}`);
      // Aqui, 'contagem - 1' seria uma forma de inferir o previous state se não tivéssemos acesso direto
      // Em funções de atualização de estado, o React nos DÁ o previous state
    }
  }, [contagem]);

  const incrementar = () => {
    // Aqui está a forma como o React te dá o previous state
    setContagem(prevContagem => {
      console.log(`Função de atualização: Previous state era ${prevContagem}, novo será ${prevContagem + 1}`);
      return prevContagem + 1; // Retorna o novo estado
    });
  };

  return (
    <div>
      <h1>Contagem: {contagem}</h1>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;