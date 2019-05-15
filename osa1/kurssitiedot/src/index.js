import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )

}


const Content = (props) => {

    const partlist = props.parts.map( value  => <Part part={value} />)
    // Antaa varoituksen:
    // Warning: Each child in a list should have a unique "key" prop.
    // Liittyy Reactin haluamaan key atribuuttiin. Ei liene tärkeä tässä 
    // harjoituksessa.

    return (
        <div>
            {partlist}
        </div>
    )
}


const Part = (props) => {
    return (
        <p>{props.part['name']} {props.part['exercises']} </p>
    )
}


const Total = (props) => {
    let score = 0
    props.parts.map( value  => score += value['exercises'])
    return (
        <p>yhteensä {score} tehtävää</p>
    )
}


const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
        {
            name: 'Reactin perusteet',
            exercises: 10
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}  />   
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
