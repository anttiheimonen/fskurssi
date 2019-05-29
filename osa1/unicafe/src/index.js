import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// handler = käytettävä funktio
// valua = asetettava arvo
const addReview = (handler, value) => {
  return () => {
    handler(value)
  }
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 


const Display = ({scoreGood, scoreNeutral, scoreBad}) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {scoreGood}</p>
      <p>neutral {scoreNeutral}</p>
      <p>bad {scoreBad}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addReview(setGood, good + 1)}
        text='good' />
      <Button handleClick={addReview(setNeutral, neutral + 1)}
        text='neutral' />
      <Button handleClick={addReview(setBad, bad + 1)}
        text='bad' />

      <Display scoreGood={good} scoreNeutral={neutral} scoreBad={bad} />
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)