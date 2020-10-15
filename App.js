import React, { Component } from "react";
import ButtonComponent from "./ButtonComponent.js";
import "./style.scss";

export class App extends Component {
  render () {
    const src = "./assets/arrow-left.svg"
    return (
      <div>
        <div className="container">
          <div>
            <ButtonComponent 
              variant="text"
            >Default</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              variant="outline"
            >Default</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              variant="outline"
              size="lg"
            >Default</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              variant="text"
            >Default</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              startIcon = "fa-shopping-cart"
            >Button </ButtonComponent>
          </div>
          <div>
            <ButtonComponent 
              startIcon = "fa-phone"
            >Button </ButtonComponent>
          </div>
          <div>
            <ButtonComponent 
              startIcon = "fa-search"
            >Button </ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              endIcon = "fa-trash-o"
            >Button </ButtonComponent>
          </div>
          <div>
            <ButtonComponent 
              endIcon = "fa-tablet"
            >Button </ButtonComponent>
          </div>
          <div>
            <ButtonComponent 
              endIcon = "fa-flag"
            >Button </ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            <ButtonComponent 
              color="white"
            >Default</ButtonComponent>
          </div>
          <div>
            <ButtonComponent  disabled
            >Disabled</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            {`<button size="sm" />`}
            <ButtonComponent 
              size="sm" 
              bgColor="primary"
              color="white"
            >Default</ButtonComponent>
          </div>
          <div>
            {`<button size="md" />`}
            <ButtonComponent 
              size="md" 
              bgColor="primary"
              color="white"
            >Default</ButtonComponent>
          </div>
          <div>
            {`<button size="lg" />`}
            <ButtonComponent 
              size="lg" 
              bgColor="primary"
              color="white"
            >Default</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            {`< button primary />`}
            <ButtonComponent 
              bgColor="primary" 
              color="white"
            >primary</ButtonComponent>
          </div>
          <div>
            {`<button secondary />`}
            <ButtonComponent 
              bgColor="secondary" 
              color="white"
            >Secondary</ButtonComponent>
          </div>
          <div>
            {` < button danger />`}
            <ButtonComponent bgColor="danger" color="white"
            >danger</ButtonComponent>
          </div>
        </div>

        <div className="container">
          <div>
            {`< button danger size="lg" />`}
            <ButtonComponent bgColor="danger" color="white" size="lg"
            >danger</ButtonComponent>
          </div>
          <div>
            {`<Button disabled />`}
            <ButtonComponent 
              disabled
            >Disabled</ButtonComponent>
          </div>
          <div>
            {`<Button disableShadow />`}
            <ButtonComponent 
              disabledShadow
            >Default</ButtonComponent>
          </div>
        </div>
      </div>
    )
  }
}