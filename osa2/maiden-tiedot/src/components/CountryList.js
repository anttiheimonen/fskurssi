import React from 'react'

// {countries.map(country => country.name)}
const CountryList = ({countries}) => {
  const row = (country) => <div key={country.name}>{country.name}</div>

  return (
    <div>
      {countries.map(country => row(country) )}
    </div>
  )
}

export default CountryList