import {useState} from 'react'

const data = () => {

    const [data, setData] = useState(10)

  return (
    <div>
        <div>
            <p>Valor: {data}</p>
            <button onClick={() => setData(data + 2)}>
                Mudar Valor
            </button>
        </div>
    </div>
  )
}

export default data