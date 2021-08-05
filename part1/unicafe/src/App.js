import React, {useState} from "react";

const Display = (props) =>  <div>{props.text} {props.value}</div> 
 

const Statistics = ({good, neutral, bad, total}) => {
  console.log(good);
  return (
    
    <div> Average{(good - bad)/total}</div>
  )
  
}



const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  //const [average, setAverage] = useState(0);
  //const [percent, setPercent] = useState(0);

  const handleGood = () =>{
    console.log('Hello good');
    setGood(good + 1);
    setTotal(total + 1);
    
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log('Hello neutral');
    setTotal(total + 1);
    
  }
  const handleBad = () => {
    setBad(bad + 1);
    console.log('Hello bad');
    setTotal(total + 1);
   
  }

 /* const handleAverage = () => {
    setAverage( (good * 1) + (neutral * 0) + (bad * -1) / allClicks   );
   return average;
  }

  const handlePercent = () => {
    setPercent( (good / allClicks) * 100 )
    return percent;
  }*/

 
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
        <Display value={total} text = "All" />
        <Statistics good={good} neutral={neutral} bad={bad} total={total}  />
      </div>  
    </div>

  )

}

export default App;
