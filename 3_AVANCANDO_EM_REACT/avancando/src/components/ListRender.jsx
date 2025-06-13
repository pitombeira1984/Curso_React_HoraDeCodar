import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'João', 'Maria'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 30},
        {id: 2, name: 'Pedro', age: 20},
        {id: 3, name: 'João', age: 25}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* Previous State */}
        <button onClick={deleteRandom}>
          Delete Random User
        </button>
    </div>
  )
}

export default ListRender