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

    // Look for the array index of the newName. If person does not
    // exist, -1 is returned and person can be added
    const searchFunction = (person) => person.name === newName
    const idx = persons.findIndex(searchFunction)
    // console.log(idx)

    // Function to add the new name
    const addNewName = () => {
      const entry = {
        name: newName
      }
      setPersons(persons.concat(entry))
      setNewName('')
    }

    // Add to phonebook or alert the error
    (idx < 0) ?
      addNewName()
    : alert(`${newName} is already added to phonebook`)
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