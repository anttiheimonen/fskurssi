import React from 'react'
import Notification from './Notification'

// ErrorNotification adds it own error style to
// Notification-component.
const ErrorNotification = ({message}) => {
    const errorStyle = {
        color: 'red'
      }
      if (message === null) {
        return null
      }

      return (
          <Notification message={message} style={errorStyle} />
      )
}

export default ErrorNotification
