import React, { Component } from "react";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button id="a" className="botones" onClick={this.props.onClick}>
            A
          </button>
          <h2>{this.props.botonA}</h2>
        </div>
        <div className="opcion">
          <button id="b" className="botones" onClick={this.props.onClick}>
            B
          </button>
          <h2>{this.props.botonB}</h2>
        </div>
      </div>
    );
  }
}

export default Opciones;
