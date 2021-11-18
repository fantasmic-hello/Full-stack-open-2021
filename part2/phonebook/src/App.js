import React, { useState } from "react";

const App = () => {
  const [persons, setPerson] = useState([
    { name: "Kalle", id: 1, number: "32382912" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filtered, setFiltered] = useState(persons);
  const [filterInput, setFilterInput] = useState("");

  const addName = (event) => {
    event.preventDefault();
    console.log("Event target in addName", newName);
    const person = {
      name: newName,
      id: persons.length + 1,
      number: number,
    };

    persons.includes(persons.find((person) => person.name === newName))
      ? alert(`${newName} is already in book`)
      : setPerson(persons.concat(person));
    setNewName("");
    setNumber("");
  
  };

  const nameChange = (event) => {
    console.log("Event target", event.target.value);
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

  const personList = persons.map((p) => (
    <li key={p.id}>
      {p.name} {p.number}
    </li>
  ));
 

  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with <input value={filterInput} onChange={filterChange} />
      <form onSubmit={addName}>
        name: <input value={newName} onChange={nameChange} /> <br></br>
        number: <input value={number} onChange={numberChange} /> <br></br>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {filterInput.length === 0 ? personList :  filtered.map(p => <li key={p.id}>{p.name} {p.number}</li>)}
      
      
    </div>
  );
};

export default App;
