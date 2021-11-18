import React from "react";

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

  export default PersonForm