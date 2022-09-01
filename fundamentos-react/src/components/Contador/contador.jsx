import "./Contador.css";
import React, { Component } from "react";
import Display from "./display";
import Botoes from "./botoes";
import Passoform from "./passoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>
          <strong>Contador</strong>
        </h2>
        <Display numero={this.state.numero}></Display>
        <Passoform passo={this.state.passo} setPasso={this.setPasso}></Passoform>
        <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
