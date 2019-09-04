import React from 'react'

const Number = ({person, handleDelete}) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={() => handleDelete(person.id)}>Delete</button>
    </div>
  )
}

const Numbers = ({persons, handleDelete}) => persons.map(person => {
  return (
    <Number
      key={person.name}
      person={person}
      handleDelete={handleDelete}
    />
    )
  }
)

export default Numbers