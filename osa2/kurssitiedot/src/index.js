import React from 'react'
import ReactDOM from 'react-dom'
import Courses from './components/Courses'

// Pohjana tehtävälle käytetty kurssin mallivastausta 1-5

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