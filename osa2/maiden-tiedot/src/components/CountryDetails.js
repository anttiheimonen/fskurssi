import React from 'react'
import Languages from './Languages'

const CountryDetails = ({country}) => {
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
        <img src={country.flag} alt='Flag of the country'    />
      </div>
    </div>
  )
}


export default CountryDetails