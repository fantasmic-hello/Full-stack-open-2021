import React from "react";


const ErrorMessage = ({message}) =>{

    const style = {
        color: 'red',
        fontStyle: 'bold',
        background: 'lightgrey',
        fontSize: 16,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(!message){
        return null;
    }

    return (
        <div style={style}>
            {message}
        </div>
    )

}

export default ErrorMessage;