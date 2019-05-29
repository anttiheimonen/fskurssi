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


const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td><td>{props.value} {props.unit}</td>
      </tr>
    </tbody>
  )
}


const Statistics = ({scoreGood, scoreNeutral, scoreBad}) => {
  const numOfScores = scoreGood + scoreNeutral + scoreBad
  if (numOfScores === 0) return <div>No feedback given</div>
  const average = (scoreGood - scoreBad) / numOfScores 
  const goodPercentage = scoreGood / numOfScores * 100
  return (
    <table>
      <Statistic text='good' value={scoreGood} />
      <Statistic text='neutral' value={scoreNeutral} />
      <Statistic text='bad' value={scoreBad} />
      <Statistic text='all' value={numOfScores} />
      <Statistic text='average' value={average} />
      <Statistic text='positive' value={goodPercentage} unit='%' />
    </table>
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

      <h1>statistics</h1>
      <Statistics scoreGood={good} scoreNeutral={neutral} scoreBad={bad} />
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)