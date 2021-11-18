import React, { useState } from 'react';

const App = () => {
  const [persons, setPerson] = useState([{ name: 'Kalle', id: 1 }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();
    console.log('Event target in addName', newName);
    const person = {
      name: newName,
      id: persons.length + 1,
    };
    persons.includes(persons.find((person) => person.name === newName))
      ? alert(`${newName} is already in book`)
      : setPerson(persons.concat(person));
    setNewName('');
  };

  const nameChange = (event) => {
    console.log('Event target', event.target.value);
    setNewName(event.target.value);
  };

  const personList = persons.map((p) => <li key={p.id}>{p.name}</li>);

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
        name: <input value={newName} onChange={nameChange} /> <br></br>
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      {personList}
    </div>
  );
};

export default App;
