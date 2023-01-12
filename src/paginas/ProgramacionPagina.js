import React from "react";
import Root from "../componentes/ListaRoots";
import style from "../../src/style.css";

export default class RootPagina extends React.Component {
  Roots = [
    {
      nombre: "Holos",
      img: "/recursos/holo.png",
      descripcion:
        "Termine muy metido en el mundo de los holos una vez que supe que existian, todo el tiempo me la pasaba en los mismos y siempre buscaba hacer entrevistas para ser parte del staff, en este punto tenía conocimientos de hackeo de juegos y aparte de eso bases de html y css, muchas veces me encargué yo de editar la pagina del habbo original y hacerla un poco como la imagen de arriba, más personalizada para varios holos de la epoca.",
      descripcion1:
        "Nota: Un holo era una copia del habbo original con distinto equipo administrativo, muchas veces cambios de cara a favorecer al usuario y la característica principal, los 'Creditos' la moneda de pago en habbo, era gratis aquí.",
    },
    {
      nombre: "Aprendiendo más",
      img: "/recursos/codigofacilito.png",
      descripcion:
        "Terminé usando mucho los cursos en youtube de la epoca y aprendiendo un montón en especial de un naciente bootstrap 3 con la ayuda de un canal de youtube llamado CodigoFacilito",
    },
    {
      nombre: "Otro tipo de programación",
      img: "/recursos/excel.png",
      descripcion:
        "Uff, a esta epoca le tengo cariño y agradecimiento pero a la ves no, cree un base de datos muy grande estuve unos 3 meses trabajando en ella y al final no me pagaron, solo me quedó lo que aprendí que un montón pero la verdad, más alla de eso de que no me pagarán, ame todo el proceso y lo que aprendí por eso lo recuerdo con cariño aún así.",
    },
    {
      nombre: "Actualidad",
      img: "/recursos/lumetrio.png",
      descripcion:
        "En la actualidad hace un tiempo, intenté volver a programar con un curso de Platzi, sin embargo no me sentí nada comodo... Por otra parte actualmente estoy haciendo el curso de lumetrio en el cual estoy realmente comodo y a gusto y espero lograr despegar mi carrera programando aquí.",
    },
  ];
  render() {
    return (
      <>
        <h1 className="mar-top text-center">Programación</h1>
        <hr style={{ borderWidth: "3px" }}></hr>
        <Root Roots={this.Roots} />
      </>
    );
  }
}
