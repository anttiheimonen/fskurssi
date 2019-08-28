import React from 'react'
import ReactDOM from 'react-dom'
import './components/Courses'

// Pohjana tehtävälle käytetty kurssin mallivastausta 1-5

const CourseHeader = props =>
  <h2>{props.course}</h2>


const Total = ({parts}) => {
    const sumFunction = (sum, cur) => sum + cur.exercises
    // Reduce-funktion alkuarvon (0) asettaminen estää tyhjän taulukon
    // muutoin aiheuttamat virheilmoitukset
    const total = parts.reduce(sumFunction, 0)   
    // Lihavaitu <b> tagilla, mutta olisiko css oikea ratkaisu? 
    return <b>total of {total} excercises</b>
}
  

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>


const Content = ({courses}) => {
    return  (
        <div>
            {courses.map(course => <Part key={course.id} part={course} /> )}
        </div>
    )
}


const Course = ({ course }) => {
    return (
        <div>
            <CourseHeader course={course.name} />
            <Content courses={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


const Courses = ({ courses }) => {
  // Kurssien tiedoissa ei ole saatavilla hyvää luontevaa
  // key-arvoa, joten käytetään kurssin nimeä avaimina.
  return (
      <div>
          {courses.map(course => <Course key={course.name} course={course} />)}
      </div>
  )
}


const PageHeader = ({header}) => <h1>{header}</h1>


const App = () => {
    const courses = [
      {
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

    const mainHeader = 'Web development curriculum'
  
    return (
      <div>
        <PageHeader header={mainHeader}/>
        <Courses courses={courses} />
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)