import React from 'react'

// Creates a list of countries
const CountryList = ({countries, onClick}) => {
  const row = (country) => {
    return (
      <div key={country.name}>
        {country.name}
        <button onClick={() => onClick(country.name)}>show</button>
      </div>
    )
  }

  return (
    <div>
      {countries.map(country => row(country) )}
    </div>
  )
}

export default CountryList