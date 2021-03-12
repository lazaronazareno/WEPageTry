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
        className={`menu ${burgerOpen ? "closed" : ""}`}
        onClick={() => {
          setBurgerOpen(!burgerOpen);
        }}
      >
        <Burger
          onClick={() => {
            setBurgerOpen(!burgerOpen);
          }}
        />
        <Link to="/" className="menuText">
          FrontPage
        </Link>
        <Link to="/Nosotros" className="menuText">
          Nosotros
        </Link>
        <Link to="/Fotos" className="menuText">
          Fotos
        </Link>
        <Link to="/Productos" className="menuText">
          Productos
        </Link>
        <Link to="/Contacto" className="menuText">
          Contacto
        </Link>
      </div>
    </Router>
  );
}

export default Navbar;
