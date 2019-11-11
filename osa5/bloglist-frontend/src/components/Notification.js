import React from 'react'

// Returns message in div-element.
// If message is null, returns just null.
const Notification = ({ message }) => {
  // console.log(message)

  if (message === null) {
    return null
  }
  return (<div>{message}</div>)
}

export default Notification