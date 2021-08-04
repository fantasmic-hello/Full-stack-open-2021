import React, {useState} from "react";

const Display = (props) => {
    return(
      <div>{props.text} {props.value}</div>
    )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () =>{
    console.log('Hello good');
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log('Hello neutral');
  }
  const handleBad = () => {
    setBad(bad + 1);
    console.log('Hello bad');

  }
 
  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <div>
        <h1>statistics</h1>
        <Display value={good} text = "Good"/>
        <Display value={neutral} text = "Neutral" />
        <Display value={bad} text = "Bad" />
      </div>  
    </div>

  )

}

export default App;
