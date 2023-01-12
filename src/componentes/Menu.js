import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SHMenu: false,
    };
  }

  SHMenu = (event) => {
    if (this.state.SHMenu === false) {
      this.setState({
        SHMenu: "collapse show",
      });
    } else {
      this.setState({
        SHMenu: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container-fluid bg-dark size px-0">
          <nav className="navbar navbar-default">
            <nav className="navbar default fixed-top navbar-expand-xl navbar-dark bg-dark ">
              <div className="container-fluid">
                <Link key={Array.id1} to="/" className="navbar-brand" href="">
                  <span className="text-warning h1 mx-3">Beta</span>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.SHMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${this.state.SHMenu} h-100" id="menu`}
                >
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item active d-flex flex-row">
                      <i className="bi bi-house-door text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id2}
                        onClick={this.SHMenu}
                        to="/"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item d-flex flex-row">
                      <i className="bi bi-laptop text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id3}
                        onClick={this.SHMenu}
                        to="/hacking"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        Hacking
                      </Link>
                    </li>
                    <li className="nav-item d-flex flex-row">
                      <i className="bi bi-code-slash text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id4}
                        onClick={this.SHMenu}
                        to="/Programacion"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        Programación
                      </Link>
                    </li>
                    <li className="nav-item d-flex flex-row">
                      <i className="bi bi-controller text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id5}
                        onClick={this.SHMenu}
                        to="/VideoJuegos"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        VideoJuegos
                      </Link>
                    </li>
                    <li className="nav-item d-flex flex-row">
                      <i className="bi bi-person-lines-fill text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id6}
                        onClick={this.SHMenu}
                        to="/contacto"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        Contacto
                      </Link>
                    </li>
                    <li className="nav-item d-flex flex-row">
                      <i className="bi bi-server text-white mt-1 me-2 me-md-0"></i>
                      <Link
                        key={Array.id7}
                        onClick={this.SHMenu}
                        to="/API"
                        className="me-3 ms-2 mt-1 text-decoration-none"
                      >
                        API
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </nav>
        </div>
      </>
    );
  }
}
