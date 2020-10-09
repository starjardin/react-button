import React from "react";

function ButtonComponent (props) {
  console.log(props.disabled);
  return (
  <button
      className={
        `${props.bgColor ? props.bgColor : "default-bgColor"} 
         ${props.size ? props.size : "default-size"}
         ${props.variant ? props.variant : "default-variant"}
         ${props.startIcon ? props.startIcon : ""}
         ${props.endIcon ? props.endIcon : ""}
         ${props.shadow ? props.shadow : "default-shadow"}
         ${props.color ? props.color : "default"}
        `
      }

      disabled={props.disabled && "disabled"}
    >
      {props.icon && <img scr={props.icon}/>}button
    </button>
  )
}

export default ButtonComponent;