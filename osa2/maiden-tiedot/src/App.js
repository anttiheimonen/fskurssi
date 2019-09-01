import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import CountryList from './components/CountryList'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <div>
        <Filter value={filter} handleChange={handleFilterChange} />
      </div>
      <div>
        <CountryList />
      </div>
    </div>
  )
}


export default App;
