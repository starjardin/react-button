import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.scss";

export class App extends Component {
  render () {
    return (
      <div>
        <ButtonComponent variant="text" />
        <ButtonComponent variant="outline" />
        <ButtonComponent variant="text" />
        <ButtonComponent 
          startIcon="
            startIcon
            icon 
            shopping
        "/>
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            arrow-left"
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            arrow-right
          "
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            duplicate
          "
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            filter
          "
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            arrow-left
          "
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            arrow-right
          "
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            filter
          "
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            shopping
          "
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            duplicate
          "
        />
        <ButtonComponent  disabled/>
        <ButtonComponent size="sm" />
        <ButtonComponent size="md" />
        <ButtonComponent size="lg" />
        <ButtonComponent color="default"/>
        <ButtonComponent color="primary"/>
        <ButtonComponent color="secondary"/>
        <ButtonComponent color="danger"/>
      </div>
    )
  }
}