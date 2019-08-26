import React from 'react'
import ReactDOM from 'react-dom'

// Pohjana tehtävälle käytetty kurssin mallivastausta 1-5

const Header = props =>
  <h1>{props.course}</h1>


const Total = ({parts}) => {
    const sumFunction = (sum, cur) => sum + cur.exercises
    // Reduce-funktion alkuarvon (0) asettaminen estää tyhjän taulukon
    // muutoin aiheuttamat virheilmoitukset
    const total = parts.reduce(sumFunction, 0)    
    return <p>total of {total} excercises</p>
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>


const Content = ({courses}) => {
    //console.log(courses)
    return  (
        <div>
            {courses.map(course => <Part key={course.id} part={course} /> )}
        </div>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content courses={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)