import React from "react";
import Root from "../componentes/ListaRoots";
import style from "../../src/style.css";

export default class RootPagina extends React.Component {
  Roots = [
    {
      nombre: "Ragnarok",
      img: "/recursos/ragnarok.png",
      descripcion:
        "Posteriormente, unos años despúes empecé a jugar el MMORPG Ragnarok Online, lo jugué por varios años, nunca fui muy bueno pero me gustaba mucho.",
    },
    {
      nombre: "League Of Legends",
      img: "/recursos/lol.png",
      descripcion:
        "Aquí, llegó mi mayor vicio y lo que yo considero que más me alejó del mundo de la informática. Pase años en esto, desde el 2014 quería ser profesional y a falta de lograr ser profesional, logré ser semiprofesional, pero ya estoy en una edad y es hora de desperatar, no logré lo que quería con el videojuego, debo redireccionar mi enfoque y considero que volver a la programación, es el camino correcto.",
    },
  ];
  render() {
    return (
      <>
        <h1 className="mar-top text-center">Video Juegos</h1>
        <hr style={{ borderWidth: "3px" }}></hr>
        <Root Roots={this.Roots} />
      </>
    );
  }
}
