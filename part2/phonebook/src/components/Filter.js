import React from "react";


//Completeley useless
const Filter = (props) =>{
    console.log("Props in Filter: ", props)
    return(
      <div>
       filter shown with <input value={props.value} onChange={props.handler} />
      </div>
    )
  }

  export default Filter