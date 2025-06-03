import MyComponent from "./MyComponent"

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu Primeiro Componente</h1> {/* Criando um componente */}
            <MyComponent/> {/* Importando outro componente */}
        </div>
    )
}

export default FirstComponent