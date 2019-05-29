import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  // Adds vote and sets mostVoted
  const vote = (voted) => {
    const copy = { ...points }
    copy[voted] += 1 
    console.log(copy)
    if (copy[voted] > copy[mostVoted]) setMostVoted(voted)
    return copy
  }

  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote show={selected} anecdotes={props.anecdotes} votes={points}  />
      <Button handleClick={ () => setPoints( vote(selected) ) }
        text='vote' />
      <Button handleClick={ () => setSelected( nextAnecdote(anecdotes.length, selected) )}
        text='next anectode' />
      <h1>Anecdote with most votes</h1>
      <Anecdote show={mostVoted} anecdotes={props.anecdotes} votes={points} />
    </div>
  )
}


const Anecdote = ({show, anecdotes, votes}) => {
  return (
    <div>
        <div>{anecdotes[show]}</div>
        <div>has {votes[show]} votes</div>
    </div>
  )
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 


// Picks up a number for next anecdote. Won't return the number
// given as current.
const nextAnecdote = (numOfItems, current) => {
  const next = Math.floor(Math.random() * (numOfItems - 1) )
  if (next >= current) return next + 1
  return next
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)