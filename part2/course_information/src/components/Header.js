import React from "react";

const Header = ({header}) => {
   console.log("Props in Header", {header})
    return( 
             <h1>{header}</h1> 
    );
}


export default Header