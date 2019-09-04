import React from 'react'
import Notification from './Notification'

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
