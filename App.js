import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.css";

export class App extends Component {
  render () {
    return (
      <div>
        <ButtonComponent class="danger"/>
        <ButtonComponent icon={<img src="./assets/shopping.svg"/>}/>
        <ButtonComponent variant="outline" />
        <ButtonComponent variant="text" />
      </div>
    )
  }
}