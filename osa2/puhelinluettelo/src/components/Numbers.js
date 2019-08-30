import React from 'react'

const Number = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const Numbers = ({phonebook: persons}) => persons.map(person => {
    return (
      <Number key={person.name} person={person} />
    )
  }
)

export default Numbers