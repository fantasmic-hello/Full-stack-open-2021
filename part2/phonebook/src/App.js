import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import DisplayPersons from "./components/DisplayPersons";
import personService from "./services/PersonService";
import Message from "./components/Message";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [persons, setPerson] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searched, setSearched] = useState(persons);
  const [filterInput, setFilterInput] = useState("");
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    /* console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response =>{
        console.log(response)
        setPerson(response.data)
      }) */

    personService.getAll().then((initialPersons) => {
      setPerson(initialPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    setFilterInput("");

    const person = {
      name: newName,
      // id: persons.length + 1,
      number: number,
    };

    if (persons.includes(persons.find((p) => p.name === newName))) {
      const result = window.confirm(
        `${person.name} is already in phonebook, replace number?`
      );
      updateNumber(result, person);
      setNewName("");
      setNumber("");

      return;
    }

    /*axios.post('http://localhost:3001/persons', person)
      .then( (response) =>{
        setPerson(persons.concat(response.data))
        setNewName('');
        setNumber("");
      } 
      ) */

    personService
      .create(person)
      .then((response) => {
        setPerson(persons.concat(response));
        setNewName("");
        setNumber("");
      })
      .then(() => {
        setMessage(`${person.name} successfully added!`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((error) =>{
        setErrorMessage("Could not create")
        console.log(error)
        setTimeout( () => {
          setErrorMessage(null)
        }, 4000);
      })
  };

  const deletePerson = (person) => {
    return () => {
      const result = window.confirm(
        `Are you sure you want to delete ${person.name}?`
      );
      if (result) {
        personService
          .deletePerson(person)
          .then((response) =>
            setPerson(persons.filter((p) => p.id !== person.id))
          )
          .then(() =>{
            setMessage(`${person.name} was succesfully deleted`)
            setTimeout( ()=>{
              setMessage(null);
            }, 5000)
          })
          .catch(error =>{
            setErrorMessage(`could not delete ${person.name}`)
            console.log(error);
          })
          
      }
    };
  };

  const updateNumber = (result, person) => {
    if (result) {
      const oldPerson = persons.find((n) => n.name === person.name);
      const newPerson = { ...oldPerson, number: person.number };
      console.log(newPerson);
      personService
        .updatePerson(newPerson)
        .then((response) => {
          setPerson(persons.map((p) => (p.id !== response.id ? p : response)));
        })
        .catch((error) => {
          setErrorMessage(`${person.name} has already been removed from server`)
          setPerson(persons.filter((p) => p.id !== newPerson.id));
        });
    }
  };

  const nameChange = (event) => {
    setNewName(event.target.value);
  };

  const numberChange = (event) => {
    setNumber(event.target.value);
  };

  const filterChange = (event) => {
    setFilterInput(event.target.value);
    /* const filteredList = event.target.value.length === 0 
     ? persons
     : persons.filter(person => person.name.toLowerCase().startsWith(event.target.value.toLowerCase()))

    console.log("filteredList", filteredList);
    setSearched(filteredList); */
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterInput} handler={filterChange} />

      <PersonForm
        onSubmit={addName}
        name={newName}
        number={number}
        nameHandler={nameChange}
        numberHandler={numberChange}
      />
      <Message message={message}></Message>
      <ErrorMessage message={errorMessage}></ErrorMessage>

      <h2>Numbers</h2>
      <DisplayPersons
        all={persons}
        filtered={searched}
        filterInput={filterInput}
        buttonHandle={deletePerson}
      />
    </div>
  );
};

export default App;
