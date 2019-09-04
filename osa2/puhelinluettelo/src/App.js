import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import FilterField from './components/FilterField'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
          console.log(initialPersons)

          setPersons(initialPersons)
        })
  }, [])

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) =>
    setFilterText(event.target.value)

  // Removes person with given id-number
  const removePerson = (personID) => {
    console.log('poistetaan ' + personID)
    personService
      .remove(personID)
      .then(
        setPersons(persons.filter(person => person.id !== personID))
      )
  }

  const addNewPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    personService
      .create(newPerson)
      .then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson))
      })
  }

  const updatePerson = UpdatePerson => {
    const answer = confirm(`${UpdatePerson.name} is already added to ` +
      `phonebook. Replace the old number with a new one?`)
    if (!answer) return
    const updatedPerson = { ...UpdatePerson, number: newNumber}
    personService
      .update(updatedPerson.id, updatedPerson)
      .then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.map(person =>
          person.id !== returnedPerson.id ? person : returnedPerson
        ))
      })
      .catch(error => {
        console.log(`Error while updating person`)
      })
  }

  // Updates existing or adds a new person
  const handlePersonSubmit = event => {
    event.preventDefault()
    // Look for the existing person
    const oldPerson = persons.find(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )
    oldPerson === undefined ?
        addNewPerson()
      : updatePerson(oldPerson)

    // Input fields will be cleared even if user cancels
    // the update. Not ideal.
    setNewName('')
    setNewNumber('')
  }

  const phonebookRows = () => {
    const lowerCaseFilter = filterText.toLowerCase()
    // Filter compares person name on low case with filter word
    // on low case.
    return <Numbers persons={persons.filter(
      person => person.name.toLowerCase().includes(lowerCaseFilter)
    )}
    handleDelete={(person) => removePerson(person)}/>
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterField
          handleFilterChange={handleFilterChange}
        />
      <h3>add a new</h3>
        <PersonForm
          handleSubmit={handlePersonSubmit}
          valueName={newName}
          handleNameChange={handleNameChange}
          valueNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h3>Numbers</h3>
      <div>
        {phonebookRows()}
      </div>
    </div>
  )
}

export default App