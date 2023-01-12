import React from "react";
import Root from "./Roots";

export default class listaRoots extends React.Component {
  4;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.Roots.map((Roots, index) => (
          <Root
            key={Roots.nombre}
            nombre={Roots.nombre}
            img={Roots.img}
            descripcion={Roots.descripcion}
            descripcion1={Roots.descripcion1}
          />
        ))}
      </>
    );
  }
}
