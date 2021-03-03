import "./styles.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";
import logo from "../../assets/logo.png";

const history = createBrowserHistory;

function Sidebar() {
  return (
    <Router history={history} forceRefresh>
      <div className="mainMenu">
        <img className="mainLogo" src={logo} alt="logo" />
        <Link to="/" className="mainMenuText">
          FrontPage
        </Link>
        <Link to="/Nosotros" className="mainMenuText">
          Nosotros
        </Link>
        <Link to="/Fotos" className="mainMenuText">
          Fotos
        </Link>
        <Link to="/Productos" className="mainMenuText">
          Productos
        </Link>
        <Link to="/Contacto" className="mainMenuText">
          Contacto
        </Link>
      </div>
    </Router>
  );
}

export default Sidebar;
