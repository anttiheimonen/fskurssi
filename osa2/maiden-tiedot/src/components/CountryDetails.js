import React, { useState, useEffect } from 'react'
import Languages from './Languages'
import Weather from './Weather'
import axios from 'axios'

const CountryDetails = ({country}) => {
  const [ weather, setWeather] = useState([])

  const apixuKey = 'ef6337cf757341f19ea142434190209&q'

  // Personal Apixu json key must ne used to get weather grom
  // Apixus service
  useEffect(() => {
    axios
      .get(
        `https://api.apixu.com/v1/current.json?key=${apixuKey}=${country.capital}`
        )
      .then(response => {
        setWeather(response.data)
    })
  }, [])

  return (
    <div>
      <h2>{country.name}</h2>
      <div>
        capital {country.capital} <br />
        population {country.population}
      </div>
      <div>
        <h3>Languages</h3>
      </div>
        <ul>
          <Languages languages={country.languages} />
        </ul>
      <div>
        <img src={country.flag} alt='Flag of the country' />
      </div>
      <div>
        <Weather data={weather} />
      </div>
    </div>
  )
}

export default CountryDetails