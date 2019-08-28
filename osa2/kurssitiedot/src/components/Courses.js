import React from 'react'

// Courses-komponentit sisältävä React-moduuli.
// Tehtävässä 2.5 opastettiin määrittelemään Course-
// komponentti, mutta koska tein tehtävän luomalla 
// useamman kurssin käsittelevän Courses-komponentin,
// niin olettaisin, että Courses-moduulin tekeminen on 
// oikea ratkaisu ohjelman rakenteen kannalta.
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


export default Courses