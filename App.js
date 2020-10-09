import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.scss";

export class App extends Component {
  render () {
    const src = "./assets/arrow-left.svg"
    return (
      <div>
        <ButtonComponent variant="text" />
        <ButtonComponent variant="outline" />
        <ButtonComponent variant="text" />
        <ButtonComponent shadow="shadow" />
        <ButtonComponent color="white grey blue" />
        <ButtonComponent 
          startIcon="
            startIcon
            icon 
            shopping"
            bgColor="primary"
            color="white"
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            arrow-left"
            bgColor="primary"
            color="white"
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            arrow-right
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            duplicate
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            filter
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            arrow-left
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            arrow-right
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            filter
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            shopping
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            duplicate
          "
          bgColor="primary"
          color="white"
        />
        <ButtonComponent  disabled/>
        <ButtonComponent />
        <ButtonComponent 
          size="sm" 
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          size="md" 
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          size="lg" 
          bgColor="primary"
          color="white"
        />
        <ButtonComponent 
          bgColor="primary" 
          color="white"
        />
        <ButtonComponent 
          bgColor="secondary" 
          color="white"
        />
        <ButtonComponent bgColor="danger" color="white"/>
        <ButtonComponent 
          disabled
        />
      </div>
    )
  }
}