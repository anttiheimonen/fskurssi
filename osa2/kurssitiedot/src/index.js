import React from 'react'
import ReactDOM from 'react-dom'

// Pohjana tehtävälle käytetty kurssin mallivastausta 1-5
const Header = props =>
  <h1>{props.course}</h1>

/* const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  return <p>yhteensä {total} tehtävää</p>
} */
  

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
    //console.log(course)
    
    return (
        <div>
            <Header course={course.name} />
            <Content courses={course.parts} />
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