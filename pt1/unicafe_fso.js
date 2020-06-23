import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <Heading text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Heading text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  let total = (good + bad + neutral)
  let average = (total / 3)
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Stat name="good" value={good} />
        <Stat name="neutral" value={neutral} />
        <Stat name="bad" value={bad} />
        <Stat name="all" value={total} />
        <Stat name="average" value={average} />
        <Stat name="positive" value={(100 * good / total) + "%"} />
      </tbody>
    </table>
  )
}
const Stat = ({ name, value }) =>
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)
const Heading = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
)


ReactDOM.render(<App />,
  document.getElementById('root')
)