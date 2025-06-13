

const ConditionalRender = () => {

    const x = true

    const name = "Pitombeira"

  return (
    <div>
        <h3>Render Condicional</h3>
        <div>
            <h4>Condicional if</h4>
            {x && <p>Se x for true sim !</p>}
        </div>
        <div>
            <h4>Condicional if e else</h4>
            {name === "Pitombeira" ? (
                <div>
                    <p>O nome é Pitombeira</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ConditionalRender