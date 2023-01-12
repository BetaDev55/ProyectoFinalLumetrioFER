import React from "react";
import { Link } from "react-router-dom";
import style from "../../src/style.css";

export default class InicioPagina extends React.Component {
  render() {
    return (
      <>
        <div className="mar-top d-flex w-100 justify-content-center mt-n5">
          <h1 className="mb-2 text-white">
            Bienvenido a mi web sobre mi camino por el internet.
          </h1>
        </div>
        <div>
          <p
            style={{ fontSize: "calc(1em + 1vw)", color: "gray" }}
            className="mx-2"
          >
            Hola, en esta página, quiero mostrarte mi trayecto por el mundo de
            la informática / el internet, para que conozcas más a detalle a
            "Beta" (Mi nickname) y que cosas me han traído hasta este punto,
            vamos a ver un repaso por mi trayecto en la seguridad informática,
            en programación, en VideoJuegos y finalmente; un par de añadidos que
            son requisitos del curso en cuestión al cual va dirigido este
            proyecto.
          </p>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <Link to="/hacking">
            <img
              src="/recursos/hacking.png"
              className="img-fluid me-3 mb-2"
              style={{ width: "350px", height: "450px" }}
            ></img>
          </Link>
          <Link to="/programacion" style={{ width: "350px", height: "450px" }}>
            <img
              src="/recursos/programacion.png"
              className="img-fluid me-3 mb-2"
              style={{ width: "350px", height: "450px" }}
            ></img>
          </Link>
          <Link to="/VideoJuegos" style={{ width: "350px", height: "450px" }}>
            <img
              src="/recursos/gaming.png"
              className="img-fluid me-3 mb-2"
              style={{ width: "350px", height: "450px" }}
            ></img>
          </Link>
        </div>
      </>
    );
  }
}
