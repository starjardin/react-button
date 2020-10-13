import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.scss";

export class App extends Component {
  render () {
    const src = "./assets/arrow-left.svg"
    return (
      <div>
        <ButtonComponent 
          variant="text"
        >Default</ButtonComponent>
        <ButtonComponent 
          variant="outline"
        >Default</ButtonComponent>
        <ButtonComponent 
          variant="outline"
          size="lg"
        >Default</ButtonComponent>
        <ButtonComponent 
          variant="text"
        >Default</ButtonComponent>
        <ButtonComponent 
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          startIcon="
            startIcon
            icon 
            shopping"
            bgColor="primary"
            color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          startIcon="
            startIcon
            icon
            arrow-left"
            bgColor="primary"
            color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            shopping
          "
          bgColor="primary"
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          endIcon="
            endIcon 
            icon
            duplicate
          "
          bgColor="primary"
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent  disabled
        >Disabled</ButtonComponent>
        <ButtonComponent 
          size="sm" 
          bgColor="primary"
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          size="md" 
          bgColor="primary"
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          size="lg" 
          bgColor="primary"
          color="white"
        >Default</ButtonComponent>
        <ButtonComponent 
          bgColor="primary" 
          color="white"
        >primary</ButtonComponent>
        <ButtonComponent 
          bgColor="secondary" 
          color="white"
        >Secondary</ButtonComponent>
        <ButtonComponent bgColor="danger" color="white"
        >danger</ButtonComponent>
        <ButtonComponent bgColor="danger" color="white" size="lg"
        >danger</ButtonComponent>
        <ButtonComponent 
          disabled
        >Disabled</ButtonComponent>
        <ButtonComponent 
          disabledShadow
        >Default</ButtonComponent>
      </div>
    )
  }
}