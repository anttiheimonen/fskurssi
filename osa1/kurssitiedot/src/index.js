import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )

}


const Content = (props) => {
    return (
        <div>
            <Part p={props.p1} />
            <Part p={props.p2} /> 
            <Part p={props.p3} /> 
        </div>
    )
}


const Part = (props) => {
    return (
        <p>{props.p['name']} {props.p['exercises']} </p>
    )
}


const Total = (props) => {
    return (
        <p>yhteensä {props.p1 + props.p2 + props.p3 } tehtävää</p>
    )
}


const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content p1={part1} p2={part2} p3={part3} />
            <Total p1={part1['exercises']} p2={part2['exercises']} p3={part3['exercises']}  />   
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
