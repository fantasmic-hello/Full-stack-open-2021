import React from "react";
import Part from "./Part";


const Content = ({parts}) =>{
    console.log("props in content ", parts)
    return(
        <div>
        {parts.map(part =>
            <Part key={part.id} part = {part.name} exercise={part.exercises} ></Part>
            )}

      {/*  <Part part={props.part[0].name} exercise={props.part[0].exercises}/>
        <Part part={props.part[1].name} exercise={props.part[1].exercises}/>
        <Part part={props.part[2].name} exercise={props.part[2].exercises}/> */}
       </div>
    )
}

export default Content