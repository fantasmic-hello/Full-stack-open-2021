import React, {useState} from "react";

const StatisticLine = ({text, value}) =>  
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>


const Button = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button> 

const Statistics = ({good, neutral, bad, total}) => {
  let average = (good-bad)/total;
  let positive = (good/total)*100

  if (total === 0 )
  return <div>No feedback given</div>
  
  return (
    <table>
      <tbody> 
        <StatisticLine value={good} text = "Good"/>
        <StatisticLine value={neutral} text = "Neutral" />
        <StatisticLine value={bad} text = "Bad" />
        <StatisticLine value={total} text = "All" /> 
        <StatisticLine value={average} text = "Average"/>
        <StatisticLine value={positive + '%'} text = "Positive"/>
      
      </tbody>
    </table>
  )
  
}



const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
 

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

 
  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={handleGood} text="Good" />
        <Button handleClick={handleNeutral} text="Neutral" />
        <Button handleClick={handleBad} text ="Bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} total={total}  />
      </div>  
    </div>

  )

}

export default App;
