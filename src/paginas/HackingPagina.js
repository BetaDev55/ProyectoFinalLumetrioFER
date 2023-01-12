import React from "react";
import Root from "../componentes/ListaRoots";
import style from "../../src/style.css";

export default class RootPagina extends React.Component {
  Roots = [
    {
      nombre: "Habbo",
      img: "/recursos/habbo.png",
      descripcion:
        "Desde el 2009 me adentre en está aventura que llamamos internet, sin saber el mundo de posibilidades que se abriría ante mis ojos. Empecé jugando un videojuego llamado Habbo Hotel. En Colombia, la situación económica no es la mejor. Así que al no poder comprar muchas de las cosas en dicho juego, empecé a buscar maneras de hackearlos y me adentre en el mundo de la seguridad informática, a una muy temprana edad",
    },
    {
      nombre: "Facebook Games",
      img: "/recursos/facebook.png",
      descripcion:
        "Posteriormente, tuve mi epoca más activa en el hacking de juegos con los juegos de facebook. Era muy divertido, habian mil programas y mil codigos con los cuales vulnerar la seguridad inexistente de estos juegos. Recuerdo haber usado 'Charles', 'WPE Pro', 'Tamper DATA', el casico 'Cheat Engine' entre otros para hackear juegos entre los cuales estaban 'Maldita Paloma', 'Wild Ones', 'Pet Society', 'Millionaire City', 'Bola' etc. ",
    },
    {
      nombre: "La gran pregunta... '¿White hat?' '¿Gray hat?' '¿Black hat?'",
      img: "/recursos/hacking1.png",
      descripcion:
        "Antes que nada, me gustaría aclarar que en ese entonces no existían las demás variables de 'hats' que existen hoy en día. Puede que en ese entonces no lo supiera, pero creo que era un poco 'Gray hat', en mi busqueda de conocimiento y de aprender cosas nuevas hice muchas cosas, algunas de ellas ilegales. Aparte de hackear juegos, empecé a usar 'inyecciones sql' para vulnerar sitios, 'DORKS', 'DDOS', 'Phishing' 'Carding' a baja escala y 'Binning' a media escala. Sin embargo, la vida me tenía otras cosa preparadas y finalmente, si bien la seguridad informatica es lo que más me gusta, mi rumbo de momento no va por ahí.",
    },
  ];
  render() {
    return (
      <>
        <h1 className="text-center mar-top">Hacking</h1>
        <hr style={{ borderWidth: "3px" }}></hr>
        <Root Roots={this.Roots} />
      </>
    );
  }
}
