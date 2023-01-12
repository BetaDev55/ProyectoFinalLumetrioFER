import React from "react";
import "../api.css";
import style from "../../src/style.css";

export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: [],
      fetch1: [],
      divisas1: "De",
      divisas2: "A",
      mostrar1: "d-none",
      mostrar2: "d-none",
      amount: "",
    };
  }

  componentDidMount() {
    fetch("https://api.frankfurter.app/latest")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          fetch: result.rates,
        });
      });
  }

  changeD1 = (event) => {
    this.setState({
      divisas1: event.target.value,
      mostrar1: "d-flex",
    });
  };
  changeD2 = (event) => {
    this.setState({
      divisas2: event.target.value,
      mostrar2: "d-flex",
    });
  };
  changeA = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };
  submit = (event) => {
    if (this.state.divisas1 !== "De" && this.state.divisas2 !== "A") {
      fetch(
        `https://api.frankfurter.app/latest?amount=${this.state.amount}&from=${this.state.divisas1}&to=${this.state.divisas2}`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            fetch1: result.rates,
          });
        });
    }
  };

  render() {
    var array = Object.keys(this.state.fetch);
    var conversion = Object.values(this.state.fetch1);

    return (
      <>
        <h1 className="mar-top d-flex justify-content-center me-5 ms-5">
          Conversor De
        </h1>
        <h1 className="d-flex justify-content-center me-5 ms-5">Divisas</h1>
        <div className="container-fluid d-inline-flex gap-5 justify-content-center ">
          <img
            src={`recursos/${this.state.divisas1}.png`}
            className={`${this.state.mostrar1} widthC img-fluid `}
            alt={`${this.state.divisas1} coin`}
          ></img>
          <img
            src={`recursos/${this.state.divisas2}.png`}
            className={`${this.state.mostrar2} widthC img-fluid `}
            alt={`${this.state.divisas2} coin`}
          ></img>
        </div>
        <div className="d-flex container-fluid justify-content-center align-items-center mb-3 mt-2">
          <div className="dropdown ms-5 order-1">
            <button
              className="bg-dark btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {this.state.divisas2}
            </button>
            <ul className="dropdown-menu bg-dark">
              {array.map((conversion, index) => (
                <li key={index}>
                  <a className="text-light dropdown-item text" href="#">
                    <option onClick={this.changeD2}>{conversion}</option>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown me-5">
            <button
              className="bg-dark btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {this.state.divisas1}
            </button>
            <ul value={this.state.divisas1} className="dropdown-menu bg-dark">
              {array.map((conversion, index) => (
                <li key={index}>
                  <a className="text-light dropdown-item text" href="#">
                    <option onClick={this.changeD1}>{conversion}</option>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <input
            type="text"
            className="width form-control me-5"
            onChange={this.changeA}
          ></input>
          <input
            disabled
            className="width form-control ms-5"
            placeholder={conversion}
          ></input>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-end mb-3 ">
          <button className="mar-t button btn btn-light" onClick={this.submit}>
            Calcular
          </button>
        </div>
      </>
    );
  }
}
