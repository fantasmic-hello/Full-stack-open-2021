import React from "react";


const DisplayPersons = ({all, filtered, filterInput}) =>{
    console.log("FilterInput:", filterInput.length)
    console.log("Persons to display", all)
      const display = filterInput.length === 0 ?
        all.map(p => <li key={p.id}>{p.name} {p.number}</li>)
        : filtered.map(p => <li key={p.id}>{p.name} {p.number}</li>)
    return(
      <div>
        {display}
      </div>
    )
  }

  export default DisplayPersons