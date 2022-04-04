import data from './data';
import React, { Component } from 'react';
import Opciones from './opciones';
import Recordatorio from './recordatorio';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayanteriores: [],
      cantidad: 0,
      seleccionanterior: '',
    };
  }

  // Creo el metodo para manejar el click
  clickHandler = (e) => {
    const cant = this.state.cantidad;
    const selAnt = this.state.seleccionanterior;
    const opcion = e.target.id;
    //Analizo cuanto tengo que sumar a la cantidad y cargo la seleccion anterior
    if (cant >= 7) {
      alert('Felicidades has terminado el juego');
    } else if (opcion=== 'a' && selAnt !== 'a') {
      this.setState({
        cantidad: this.state.cantidad + 1,
        seleccionanterior: 'a',
      });
    } else if (opcion === 'a' && selAnt === 'a') {
      this.setState({
        cantidad: this.state.cantidad + 2,
      });
    } else if (opcion === 'b' && selAnt === 'a') {
      this.setState({
        cantidad: this.state.cantidad + 3,
        seleccionanterior: 'b',
      });
    } else if (opcion === 'b') {
      this.setState({
        cantidad: this.state.cantidad + 2,
        seleccionanterior: 'b',
      });
    }
  };

  //Al actualizar el componente actualizo el arrayanteriores
  componentDidUpdate(prevProps, prevState) {
      console.log("se te actualizo correctamente");
    if (prevState.cantidad !== this.state.cantidad) {
      this.state.arrayanteriores.push(this.state.seleccionanterior);
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="arrayanteriores">{data[this.state.cantidad].arrayanteriores}</h1>
        <Opciones
          botonA={data[this.state.cantidad].opciones.a}
          botonB={data[this.state.cantidad].opciones.b}
          onClick={this.clickHandler}
        />
        <Recordatorio
          seleccionAnterior={this.state.seleccionanterior}
          arrayPrev={this.state.arrayanteriores.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.cantidad].id
          )}
        />
      </div>
    );
  }
}

export default Main;
