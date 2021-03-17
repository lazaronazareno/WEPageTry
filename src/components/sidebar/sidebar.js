import { BrowserRouter as Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";
import { useState } from "react";
import logo from "../../assets/logo.png";
import Burger from "../navbar/navbarResponsive";
import "./styles.scss";

const history = createBrowserHistory;

function Sidebar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <Router history={history} forceRefresh>
      <div
        className={burgerOpen ? "mainMenuOpen" : "mainMenu"}
        onClick={() => {
          setBurgerOpen(!burgerOpen);
        }}
      >
        <img className="mainLogo" src={logo} alt="logo" />
        <Burger
          onClick={() => {
            setBurgerOpen(!burgerOpen);
          }}
        />
        <Link
          to="/"
          className={burgerOpen ? "mainMenuOpenText" : "mainMenuText"}
        >
          FrontPage
        </Link>
        <Link
          to="/Nosotros"
          className={burgerOpen ? "mainMenuOpenText" : "mainMenuText"}
        >
          Nosotros
        </Link>
        <Link
          to="/Fotos"
          className={burgerOpen ? "mainMenuOpenText" : "mainMenuText"}
        >
          Fotos
        </Link>
        <Link
          to="/Productos"
          className={burgerOpen ? "mainMenuOpenText" : "mainMenuText"}
        >
          Productos
        </Link>
        <Link
          to="/Contacto"
          className={burgerOpen ? "mainMenuOpenText" : "mainMenuText"}
        >
          Contacto
        </Link>
      </div>
    </Router>
  );
}

export default Sidebar;
