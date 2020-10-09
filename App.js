import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.css";

export class App extends Component {
  render () {
    return (
      <div>
        <ButtonComponent variant="text" />
        <ButtonComponent variant="outline" />
        <ButtonComponent variant="text" />
        <ButtonComponent startIcon="text" />
        <ButtonComponent endIcon={<img src="./assets/shopping.svg" alt="shopping"/>}/>
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