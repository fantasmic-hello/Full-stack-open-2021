import React, {useState} from "react";

const App = () => {
 
 const [persons, setPerson] = useState(
    [
     {name: 'Kalle' }
    ])
  const [newName, setNewName] = useState('')
 
  const addName = (event) => {
    event.preventDefault()
    console.log("Event target", event.target)
  }

  const nameChange = (event) =>{
    
    console.log("Event target", event.target.value)
    setNewName(event.target.value)
  }
  
 
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
          name: <input 
          value={newName} 
          onChange={nameChange} />
       
          <button type='submit'>add</button>
        
      </form>
      <h2>Numbers</h2>
    </div>
  );
}

export default App;
