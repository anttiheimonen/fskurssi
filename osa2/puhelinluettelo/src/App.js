import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

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
    console.log(persons.indexOf("Arto Hellas"))

    // findIndex() vaikuttaisi parhaalta tarkistamaan onko nimi jo taulukossa

    persons.forEach()

    const entry = {
      name: newName
    }
    console.log(persons.concat(entry))
    setPersons(persons.concat(entry))
    setNewName('')
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        handleSubmit={addEntry}
        handleNameChange={handleNameChange}
        valueName={newName}
      />
      <h2>Numbers</h2>
      <ul>
        <Numbers phonebook={persons}/>
      </ul>
    </div>
  )
}

export default App