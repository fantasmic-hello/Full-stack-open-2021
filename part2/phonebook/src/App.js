import React, { useState } from "react";


const FilteredList = ({filtered}) =>{
  
  return (
    <ul>
      {filtered.map(p => <li key={p.id}>{p.name} {p.number}</li>)}
    </ul>
  );
}

const AllPersons = ({persons}) =>{
  return (
    <ul>
      {persons.map(p => <li key={p.id}>{p.name} {p.number}</li>)}
    </ul>
);
}

const Filter = (props) =>{
  console.log("Props in Filter: ", props)
  return(
    <div>
     filter shown with <input value={props.value} onChange={props.handler} />
    </div>
  )
}

const PersonForm = (props) => {
  console.log("Props in PersonForm", props)
  return(
    <div>
      <h2>add a new</h2>
      <form onSubmit={props.onSubmit}>
        name: <input value={props.name} onChange={props.nameHandler} /> <br></br>
        number: <input value={props.number} onChange={props.numberHandler} /> <br></br>
        <button type="submit">add</button>
      </form>
    </div>
  )

}

const DisplayPersons = ({persons, filtered}) =>{
    const display = filtered.size === 0 ?
      persons.map(p => <li key={p.id}>{p.name} {p.number}</li>)
      : filtered.map(p => <li key={p.id}>{p.name} {p.number}</li>)
  return(
    <div>
      {display}
    </div>
  )
}

const App = () => {
  const [persons, setPerson] = useState([
    { name: "Kalle", id: 1, number: "32382912" },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filtered, setFiltered] = useState(persons);
  const [filterInput, setFilterInput] = useState("");

  const addName = (event) => {
    event.preventDefault();
    setFilterInput('')
    console.log("Event target in addName", newName);
    const person = {
      name: newName,
      id: persons.length + 1,
      number: number,
    };
    persons.includes(persons.find((p) => p.name === newName))
      ? alert(`${newName} is already in book`)
      : setPerson(persons.concat(person));
    setNewName('');
    setNumber("");
    
  
  };

  const nameChange = (event) => {
    setNewName(event.target.value);
  };

  const numberChange = (event) => {
    setNumber(event.target.value);
  };

  const filterChange = (event) => {
    setFilterInput(event.target.value);
    const filteredList = event.target.value.length === 0 
     ? persons
     : persons.filter(person => person.name.toLowerCase().startsWith(event.target.value.toLowerCase()))

    console.log("filteredList", filteredList);
    setFiltered(filteredList);
  };

  
 
  //{filterInput.length === 0 ? personList :  filtered.map(p => <li key={p.id}>{p.name} {p.number}</li>)}

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterInput} handler={filterChange} />
      <PersonForm onSubmit={addName} name={newName} number={number} nameHandler={nameChange} numberHandler ={numberChange} />      
      <h2>Numbers</h2>
      <DisplayPersons all={persons} filtered ={filtered} />
      
    </div>
  );
};

export default App;
