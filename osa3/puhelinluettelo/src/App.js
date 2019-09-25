import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import FilterField from './components/FilterField'
import personService from './services/persons'
import ErrorNotification from './components/ErrorNotification'
import SuccessNotifications from './components/SuccessNotification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)
  const [ successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  }, [])

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) =>
    setFilterText(event.target.value)

  // Shows given message error message for a peroid of time
  const showErrorMessage = message => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)}, 5000
    )
  }

  // Shows given message success message for a peroid of time
  const showSuccessMessage = message => {
    setSuccessMessage(message)
    setTimeout(() => {
      setSuccessMessage(null)}, 5000
    )
  }

  const clearPersonForm = () =>{
    setNewName('')
    setNewNumber('')
  }

  // Removes given person from state
  const removePersonFromList = personToRemove => {
    setPersons(persons.filter(person =>
      person.id !== personToRemove.id
    ))
  }

  // Removes person with given id-number
  const removePerson = (removablePerson) => {
    console.log('poistetaan ' + removablePerson.name)
    personService
      .remove(removablePerson.id)
      .then( () => {
        showSuccessMessage(`Person ${removablePerson.name} removed`)
        removePersonFromList(removablePerson)
      })
      .catch (error => {
        showErrorMessage(
          `Person ${removablePerson.name} was already removed from the server`
          )
          removePersonFromList(removablePerson)
      })
  }

  // Adds new person and sends object to server
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
        showSuccessMessage(`${returnedPerson.name} has been added`)
        clearPersonForm()
      })
      .catch(error => {
        showErrorMessage(`Adding new person failed`)
        // Do not clear person form as user might need that info
      })
  }

  // Updates persons information
  const updatePerson = UpdatePerson => {
    const answer = confirm(
      `${UpdatePerson.name} is already added to ` +
      `phonebook. Replace the old number with a new one?`
    )
    if (!answer) return
    const updatedPerson = { ...UpdatePerson, number: newNumber}
    personService
      .update(updatedPerson.id, updatedPerson)
      .then(returnedPerson => {
        console.log(returnedPerson)
        setPersons(persons.map(person =>
          person.id !== returnedPerson.id ? person : returnedPerson
        ))
        showSuccessMessage(`${returnedPerson.name} has been updated`)
        clearPersonForm()
      })
      .catch(error => {
        showErrorMessage(`${UpdatePerson.name} was already removed from server`)
        removePersonFromList(UpdatePerson)
        // Do not clear person form as user might need that info
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
  }

  const phonebookRows = () => {
    const lowerCaseFilter = filterText.toLowerCase()
    // Filter compares person name on lower case with filter word
    // on lower case.
    return <Numbers persons={persons.filter(
      person => person.name.toLowerCase().includes(lowerCaseFilter)
    )}
    handleDelete={(person) => removePerson(person)}/>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <ErrorNotification message={errorMessage} />
        <SuccessNotifications message={successMessage} />
      </div>
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