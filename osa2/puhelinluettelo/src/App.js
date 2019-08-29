import React, { useState } from 'react'

const PhoneEntry = ({info}) => {
  return (
    <li>{info.name}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addEntry = (event) => {
    event.preventDefault()
    console.log("painettu")
    const entry = {
      name: newName
    }
    console.log(persons.concat(entry))
    setPersons(persons.concat(entry))
  }

  const numbers = () => persons.map(person =>
    <PhoneEntry info="person" />
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <PhoneEntry numbers={persons} />
      </ul>
    </div>
  )

}

export default App