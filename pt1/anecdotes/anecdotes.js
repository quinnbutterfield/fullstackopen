import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))



    const getAnecdote = () => {

        let i = Math.floor(Math.random() * anecdotes.length)
        setSelected(i)
    }
    const addVote = () => {
        let copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }


    const mostVotes = () => {

        let sorted = [...points].sort((a, b) => (a - b)).reverse()
        return (points.indexOf(sorted[0]))
    }


    return (

        <div>
            <Header text="Anecdote of the day" />
            <Display anecdote={props.anecdotes[selected]} votes={points[selected]} />
            <div>
                <Button handleClick={addVote} text="vote" />
                <Button handleClick={getAnecdote} text="next anecdote" />
            </div>
            <Header text="Anecdote with most votes" />
        
            <Popular anecdote={props.anecdotes[mostVotes()]} votes={points[mostVotes()]} />
            
        </div>
    )
}


const Display = ({ anecdote, votes }) => (
    <div>
        {anecdote}
        <div>has {votes} votes</div>
    </div>
)

const Popular = ({ anecdote, votes}) => {
    if(votes === 0){
        return(
            <div>
                Start voting to see the most popular anecdote!
            </div>
        )
    }
    return(
        <Display anecdote={anecdote} votes={votes}/>
    )

}

const Header = ({ text }) => (
    <div>
        <h1>{text}</h1>
    </div>
)
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
)
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)