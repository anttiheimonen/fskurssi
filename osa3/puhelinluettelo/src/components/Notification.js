import React from 'react'

// Notification adds given style to its basic style and returns
// the given message in styled <div>. This way basic Notification
// can be customized with other components.
const Notification = ({message, style}) => {
  // Notifications basic style
  const basicStyle = {
    fontSize: 22,
    fontStyle: 'italic',
    background: 'FloralWhite',
    padding: 5,
    border: '8px ridge',
    margin: 10,
  }
  return (
    <div style={{...basicStyle, ...style}}>
      {message}
    </div>
  )
}

export default Notification