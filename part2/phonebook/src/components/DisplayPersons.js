import React, { useState, useEffect } from "react";
import personService from "../services/PersonService";


const DisplayPersons = ({all, filtered, filterInput, buttonHandle}) =>{
   
  const [personList, setPersonList] = useState(all);

  useEffect(()=>{
    setPersonList(all)
  },[all])

  console.log("all", all);
  console.log("PersonList", personList)
  

     /* const display = filterInput.length === 0 ?
        all.map(p => 
        <div>
        <li key={p.id}>{p.name} {p.number}</li>
        <button onClick={deletePerson(p)}>Delete</button>
        </div>
        )
        : filtered.map(p =>
           <li key={p.id}>{p.name} {p.number}</li>)
      */

    useEffect( () =>{
      setPersonList(all.filter(p =>
        p.name.toLowerCase().includes(filterInput.toLowerCase() )
        )
        )

    }, [filterInput]) 

    return(
      <div>
        {personList.map (person => 
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick ={buttonHandle(person)}>Delete</button>
          </li> 
          
          )}
      </div>
    )
  }

  export default DisplayPersons