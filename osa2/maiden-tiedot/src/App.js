import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"

const App = () => {

  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
    })
  }, [])


  return (
    <div>
      <Filter />
    </div>
  )
}


export default App;
