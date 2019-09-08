import React from 'react'

const Weather = ({data}) => {
  // Take data out of object to more usable form
  const location = {...data.location}
  const current = {...data.current}
  const condition = {...current.condition}

  return (
    <div>
    <div>
        <h3>Weather in {location.name}</h3>
    </div>
    <div>
      <b>temperature:</b> {current.temp_c} <br />
      <img src={condition.icon} alt={condition.text} /> <br />
      <b>wind: </b> {current.wind_kph} kph direction {current.wind_dir}
    </div>
  </div>
  )
}

export default Weather