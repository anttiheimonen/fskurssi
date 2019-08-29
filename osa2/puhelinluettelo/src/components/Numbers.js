import React from 'react'

const Number = ({info}) => {
  return (
    <li>{info.name}</li>
  )
}

const Numbers = ({phonebook}) => phonebook.map(person => {
    return (
      <Number key={person.name} info={person} />
    )
  }
)

export default Numbers