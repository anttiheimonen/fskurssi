import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const showCountryDetails = (country) => {
    console.log(country.capital);
    return (
      <div>
        <CountryDetails country={country}/>
      </div>
  )}

  // Returns country filtered country list
  const showCountryList = () => {
    const lowerCaseFilter = filter.toLowerCase()

    // Create a new array that has filtered countries
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(lowerCaseFilter))

    // Return value is based on number search results
    return (filteredCountries.length > 10) ?
          'Too many matches'
      : (filteredCountries.length > 1) ?
          <CountryList
            countries={filteredCountries}
            onClick={(country) => setFilter(country)}
          />
      : (filteredCountries.length > 0) ?
          showCountryDetails(filteredCountries[0])
      :   'No results'
  }

  return (
    <div>
      <div>
        <Filter value={filter} handleChange={handleFilterChange} />
      </div>
      <div>
        {showCountryList()}
      </div>
    </div>
  )
}

export default App