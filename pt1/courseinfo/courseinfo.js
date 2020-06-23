import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
const Header = (props) => {
  //console.log(props)
  return <h1>{props.course}</h1>
}
const Total = (props) => {
  return (
    <p>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}
const Part = (props) => {
  //console.log(props)
  return <p>{props.class.name} {props.class.exercises}</p>

}
const Content = (props) => {
  console.log(props)
  console.log(props.parts[0])
  return (
    <div>
      <Part class={props.parts[0]}/>
      <Part class={props.parts[1]}/> 
      <Part class={props.parts[2]}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))