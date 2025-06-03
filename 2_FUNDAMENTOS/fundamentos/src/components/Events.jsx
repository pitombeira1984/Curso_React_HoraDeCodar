// Component: Events

const Events = () => {

    // Função para lidar com o evento de clique
    const handleClick = (e) => {
        console.log(e);
        console.log("Evento de clique c/ função registrado!");
    }
    // Função de Renderização do componente
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }
    return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um Evento")}>
                Clique Aqui
            </button>
        </div>
        {/* Evento de clique com função */}
        <br />
        <div>
            <button onClick={handleClick}>
                Clique Aqui com função
            </button>
        </div>
        {/* Função de Renderização */}
        <br />
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    </div>
  )
}

export default Events