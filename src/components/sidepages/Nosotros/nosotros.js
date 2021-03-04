import Sidebar from "../../sidebar/sidebar";
import "./styles.scss";
import nombre from "../../../assets/nombre.png";

function Nosotros() {
  return (
    <div className="us">
      <Sidebar />
      <div className="mainUs">
        <h1>NOSOTROS</h1>
        <h2>Subtitulo</h2>
        <h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </h3>
        <img className="nombreLogo" src={nombre} alt="logonombre" />
      </div>
    </div>
  );
}

export default Nosotros;
