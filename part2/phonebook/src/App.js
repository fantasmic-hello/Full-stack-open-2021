import React, {useEffect, useState } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import DisplayPersons from "./components/DisplayPersons";





const App = () => {
  const [persons, setPerson] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searched, setSearched] = useState(persons);
  const [filterInput, setFilterInput] = useState("");



  useEffect(() =>{

    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        console.log(response)
        setPerson(response.data)
      })

  }, [])


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
    setSearched(filteredList);
  };

  

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterInput} handler={filterChange} />
      <PersonForm onSubmit={addName} name={newName} number={number} nameHandler={nameChange} numberHandler ={numberChange} />      
      <h2>Numbers</h2>
      <DisplayPersons all={persons} filtered ={searched} filterInput={filterInput} />
      
    </div>
  );
};

export default App;
