import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";
import nombre from "../../../assets/nombre.png";
import media1 from "../../../assets/socialMedia/instagram.png";
import media2 from "../../../assets/socialMedia/facebook.png";
import media3 from "../../../assets/socialMedia/whatsapp.png";
import "./styles.scss";

function Contacto() {
  return (
    <div className="contact">
      <Sidebar />
      <div className="contactMain">
        <h1>titulo</h1>
        <h2>Datos de contacto</h2>
        <h3>aquivaunmail@mail.com.ar</h3>
        <h3>telfono:12345678</h3>
        <h3>otra informacion que podria necesitar</h3>
        <img className="nombreLogo" src={nombre} alt="logonombre" />
        <div className="socialMedia">
          <Link to="www.instagram.com" className="link">
            <img className="mediaLogos" src={media1} alt="instagram" />
          </Link>
          <Link to="www.facebook.com" className="link">
            <img className="mediaLogos" src={media2} alt="facebook" />
          </Link>
          <Link to="www.whatsapp.com" className="link">
            <img className="mediaLogos" src={media3} alt="whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
