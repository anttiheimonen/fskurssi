import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import FilterField from './components/FilterField'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterText, setFilterText ] = useState('')

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) =>
    setFilterText(event.target.value)


  const addEntry = (event) => {
    event.preventDefault()

    // Look for the array index of the newName. If person does not
    // exist, -1 is returned and person can be added
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
      <h2>add a new</h2>
        <PersonForm
          handleSubmit={addEntry}
          valueName={newName}
          handleNameChange={handleNameChange}
          valueNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <ul>
        {phonebookRows()}
      </ul>
    </div>
  )
}

export default App