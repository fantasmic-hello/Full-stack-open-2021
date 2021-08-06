import React, {useState} from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () =>{

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  const [max, setMax] = useState(0);
  const [maxAnecdote, setMaxAnecdote] = useState(0);

  const handleVote = () => {
    const points = {...vote}
    points[selected]++
    setVote(points)
    if(checkMax(points[selected])){
      setMaxAnecdote(selected)
    }
  }

  const nextAnecdote = () => {
    let randomNumber = Math.floor(Math.random()*(anecdotes.length));
   // console.log(randomNumber);
    setSelected(randomNumber);
    
  }

  const checkMax = (contestant) => {
    if(contestant>max){ 
    setMax(contestant)
    return true;
    }
  }

return (
  <div>
    <h3>Anecdote of the day</h3>
    <p>{anecdotes[selected]}</p>
    <p>has {vote[selected]} votes</p>
    <Button handleClick={handleVote} text="Vote" />
    <Button handleClick={nextAnecdote} text="Next Anecdote" />
    <div>
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[maxAnecdote]}</p>
      <p>has {vote[maxAnecdote]} votes</p>
    </div>
  </div>
)

}



export default App;
