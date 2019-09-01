import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
    })
  })


  return (
    <div>
      hello
    </div>
  )
}


export default App;
