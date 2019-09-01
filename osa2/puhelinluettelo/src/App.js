import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import FilterField from './components/FilterField'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log(response.data)
      setPersons(response.data)
    })
  }, [])

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) =>
    setFilterText(event.target.value)

  const addEntry = (event) => {
    event.preventDefault()

    // Look for the array index of person with newName. If person
    // does not exist, -1 is returned and person can be added
    const searchFunction = (person) => person.name === newName
    const idx = persons.findIndex(searchFunction)

    // Function to add the new name
    const addNewName = () => {
      const entry = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(entry))
      setNewName('')
      setNewNumber('')
    }

    // Add to phonebook or alert the error
    (idx < 0) ?
      addNewName()
    : alert(`${newName} is already added to phonebook`)
  }

  const phonebookRows = () => {
    const lowerCaseFilter = filterText.toLowerCase()
    console.log(lowerCaseFilter);
    // Filter compares person name on low case with filter word
    // on low case.
    return <Numbers phonebook={persons.filter(
      person => person.name.toLowerCase().includes(lowerCaseFilter)
    )}/>
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterField
          handleFilterChange={handleFilterChange}
        />
      <h3>add a new</h3>
        <PersonForm
          handleSubmit={addEntry}
          valueName={newName}
          handleNameChange={handleNameChange}
          valueNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h3>Numbers</h3>
      <ul>
        {phonebookRows()}
      </ul>
    </div>
  )
}

export default App