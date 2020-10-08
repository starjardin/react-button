import React from "react";

function ButtonComponent (props) {
  console.log(props);
  return (
    <button className={props.class}>
      {props.icon && props.icon} button
    </button>
  )
}

export default ButtonComponent;