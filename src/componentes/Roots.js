import React from "react";

export default class Roots extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="d-flex justify-content-center flex-wrap col-12 mb-5 w-100">
          <div style={{ height: "300px", width: "400px" }} className="mb-3">
            <img
              style={{ height: "300px", width: "400px" }}
              className="rounded img-fluid flex-wrap"
              src={this.props.img}
              alt={this.props.nombre}
            />
          </div>
          <div className="ps-3">
            <h2 className="fs-2 text-center">{this.props.nombre}</h2>
            <p style={{ fontSize: "calc(1em + 1vw)", color: "gray" }}>
              {this.props.descripcion}
            </p>
            <p style={{ fontSize: "calc(1em + 1vw)", color: "gray" }}>
              {this.props.descripcion1}
            </p>
          </div>
        </div>
        <hr style={{ borderWidth: "3px" }}></hr>
      </div>
    );
  }
}
