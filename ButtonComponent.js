import React from 'react';
import "./assets/arrow-left.svg";

function ButtonComponent (props) {
  return (
  <button
      className={
        `${props.bgColor ? props.bgColor : "default-bgColor"} 
         ${props.size ? props.size : "default-size"}
         ${props.variant ? props.variant : "default-variant"}
         ${props.startIcon ? props.startIcon : ""}
         ${props.endIcon ? props.endIcon : ""}
         ${props.shadow ? props.shadow : "default-shadow"}
         ${props.color ? props.color : "default-color"}
         ${props.disabledShadow ? "disabledBoxShadow" : ""}
        `
      }
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default ButtonComponent;