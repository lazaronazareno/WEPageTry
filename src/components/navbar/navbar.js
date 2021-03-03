import "./styles.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";

const history = createBrowserHistory;

function Navbar() {
  return (
    <Router history={history} forceRefresh>
      <div className="menuClasses">
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
