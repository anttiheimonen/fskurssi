import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  // Object that can be used with spread syntax on input elements
  const inputs = {
    type: type,
    value: value,
    onChange: onChange
  }

  return {
    value,
    reset,
    inputs
  }
}
