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
            <Part p={props.p1} e={props.e1} />
            <Part p={props.p2} e={props.e2} />
            <Part p={props.p3} e={props.e3} />
        </div>
    )
}


const Part = (props) => {
    return (
        <p>{props.p} {props.e} </p>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.p1 + props.p2 + props.p3 }  tehtävää</p>
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    return (
        <div>
            <Header course={course} />
            <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} 
            p3={part3} e3={exercises3} />
            <Content part={part2} exercises={exercises2} />
            <Content part={part3} exercises={exercises3} />    
            <Total p1={exercises1} p2={exercises2} p3={exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
