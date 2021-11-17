import React from "react";

const Part =  ({part, exercise}) =>{
    console.log(part, exercise)
    return (
        <div>
            <p>{part} {exercise} </p>
        </div>
    )
}

export default Part