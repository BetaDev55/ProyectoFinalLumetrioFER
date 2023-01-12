import React from "react";
import style from "../../src/style.css";

export default class ContactoPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mensaje: "",
    };
    this.submitted = this.submitted.bind(this);
    this.changed = this.changed.bind(this);
    this.changed1 = this.changed1.bind(this);
  }
  submitted(event) {
    alert(
      "se envio el formulario de " +
        this.state.nombre +
        ", con el mensaje: " +
        this.state.mensaje
    );
    event.preventDefault();
  }

  changed(event) {
    this.setState({
      nombre: event.target.value,
    });
  }
  changed1(event) {
    this.setState({
      mensaje: event.target.value,
    });
  }

  render() {
    return (
      <>
        <h2 className="mar-top">Contacto</h2>
        <form onSubmit={this.submitted}>
          <div className="form-group mb-2">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={this.changed}
            />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              onChange={this.changed1}
              className="form-control"
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-2"
            value="Enviar"
          ></input>
        </form>
      </>
    );
  }
}
