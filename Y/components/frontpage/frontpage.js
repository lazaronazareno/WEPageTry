import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.png";

function Frontpage() {
  return (
    <div className="frontpage">
      <img className="logo" src={logo} alt="logo" />
      <h1>¡Bienvenidos a nuestra Pagina!</h1>
      <button className="button">Click aqui para Continuar</button>
      <h1 className="footer">
        Todos los derechos reservados. Devil in the Details 2021{" "}
      </h1>
    </div>
  );
}

export default Frontpage;
