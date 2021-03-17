import { BrowserRouter as Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";
import { useState } from "react";
import "./styles.scss";
import Burger from "./navbarResponsive";

const history = createBrowserHistory;

function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <Router history={history} forceRefresh>
      <div
        className={burgerOpen ? "open" : "menu"}
        onClick={() => {
          setBurgerOpen(!burgerOpen);
        }}
      >
        <Burger
          onClick={() => {
            setBurgerOpen(!burgerOpen);
          }}
        />
        <Link to="/" className={burgerOpen ? "menuOpen" : "menuText"}>
          FrontPage
        </Link>
        <Link to="/Nosotros" className={burgerOpen ? "menuOpen" : "menuText"}>
          Nosotros
        </Link>
        <Link to="/Fotos" className={burgerOpen ? "menuOpen" : "menuText"}>
          Fotos
        </Link>
        <Link to="/Productos" className={burgerOpen ? "menuOpen" : "menuText"}>
          Productos
        </Link>
        <Link to="/Contacto" className={burgerOpen ? "menuOpen" : "menuText"}>
          Contacto
        </Link>
      </div>
    </Router>
  );
}

export default Navbar;
