import React from 'react'
import Notification from './Notification'

const SuccessNotification = ({message}) => {
    const successStyle = {
        color: 'green'
      }
      if (message === null) {
        return null
      }

      return (
          <Notification message={message} style={successStyle} />
      )
}

export default SuccessNotification
