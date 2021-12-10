import React from "react";


const Message = ({message}) =>{

    const messageStyle ={
        color: 'green',
        fontStyle: 'italic',
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
        <div style={messageStyle}>
            {message}
        </div>
    )

}

export default Message;