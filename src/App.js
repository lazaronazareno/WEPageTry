import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "./components/sidepages/Productos/productos";
import "./styles.css";
import Home from "./components/home/home";
import Contact from "./components/sidepages/Contactos/contactos";
import Nosotros from "./components/sidepages/Nosotros/nosotros";
import Fotos from "./components/sidepages/Fotos/fotos";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Fotos" component={Fotos} />
            <Route exact path="/Productos" component={Productos} />
            <Route exact path="/Nosotros" component={Nosotros} />
            <Route exact path="/Contacto" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
