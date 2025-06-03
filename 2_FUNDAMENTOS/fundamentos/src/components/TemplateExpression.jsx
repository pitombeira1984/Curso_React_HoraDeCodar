// Component: TemplateExpression

const TemplateExpression = () => {

    const name = "Pitombeira"
    const data = {
        idade: 41,
        profissao: "Programador"
    }

  return (
    <div>
        <p>A soma de 2+2 é: {2+2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.idade} e sua profissão é {data.profissao}</p>
    </div>
  )
}

export default TemplateExpression