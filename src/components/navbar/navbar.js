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
        className={`menu ${burgerOpen ? "open" : ""}`}
        onClick={() => {
          setBurgerOpen(!burgerOpen);
        }}
      >
        <Burger
          onClick={() => {
            setBurgerOpen(!burgerOpen);
          }}
        />
        <Link to="/" className={`menuText ${burgerOpen ? "menuOpen" : ""}`}>
          FrontPage
        </Link>
        <Link
          to="/Nosotros"
          className={`menuText ${burgerOpen ? "menuOpen" : ""}`}
        >
          Nosotros
        </Link>
        <Link
          to="/Fotos"
          className={`menuText ${burgerOpen ? "menuOpen" : ""}`}
        >
          Fotos
        </Link>
        <Link
          to="/Productos"
          className={`menuText ${burgerOpen ? "menuOpen" : ""}`}
        >
          Productos
        </Link>
        <Link
          to="/Contacto"
          className={`menuText ${burgerOpen ? "menuOpen" : ""}`}
        >
          Contacto
        </Link>
      </div>
    </Router>
  );
}

export default Navbar;
