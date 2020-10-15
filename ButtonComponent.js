import React from 'react';
import "./assets/arrow-left.svg";

function ButtonComponent (props) {
  const label = `${props.label || props.children}`
  const startIcon = `${props.startIcon && props.startIcon} startIcon`
  const endIcon = `${props.endIcon && props.endIcon} endIcon`
  return (
  <button
      className={
        `${props.bgColor ? props.bgColor : "default-bgColor"} 
         ${props.size ? props.size : "default-size"}
         ${props.variant ? props.variant : "default-variant"}
         ${props.shadow ? props.shadow : "default-shadow"}
         ${props.color ? props.color : "default-color"}
         ${props.disabledShadow ? "disabledBoxShadow" : ""}
        `
      }
      disabled={props.disabled}
    >
      {props.startIcon && <i className={`fa ${startIcon}`}></i>}
      {label}
      {props.endIcon && <i className={`fa ${endIcon}`}></i>}
    </button>
  )
}

export default ButtonComponent;