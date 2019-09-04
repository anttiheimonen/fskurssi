import React from 'react'

const Notification = ({message}) => {
  const notificationStyle = {
    color: 'red'
  }
  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification