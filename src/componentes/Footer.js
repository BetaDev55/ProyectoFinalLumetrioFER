import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-dark py-5">
          <div className="container text-light text-center">
            <p className="display-5 mb-3">BetaDev</p>
            <small className="text-white-50">
              &copy; CopyRight: Beta 2022. Todos los derechos reservados.
            </small>
          </div>
        </footer>
      </>
    );
  }
}
