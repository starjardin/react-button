import React from "react";

function ButtonComponent (props) {
  return (
    <button 
      className={
        `${props.color && props.color} 
         ${props.size && props.size}
         ${props.variant && props.variant}
        `
      }
    >
      button
    </button>
  )
}

export default ButtonComponent;