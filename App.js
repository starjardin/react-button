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
        <ButtonComponent  disabled
        >Disabled</ButtonComponent>
        <div className="container">
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
        </div>
        <div className="container">
          <ButtonComponent bgColor="danger" color="white" size="lg"
          >danger</ButtonComponent>
          {`<Button disabled />`}
          <ButtonComponent 
            disabled
          >Disabled</ButtonComponent>
          {`<Button disableShadow />`}
          <ButtonComponent 
            disabledShadow
          >Default</ButtonComponent>
        </div>
      </div>
    )
  }
}