import Sidebar from "../../sidebar/sidebar";
import "./styles.scss";
import nombre from "../../../assets/nombre.png";
import media1 from "../../../assets/socialMedia/instagram.png";
import media2 from "../../../assets/socialMedia/facebook.png";
import media3 from "../../../assets/socialMedia/whatsapp.png";

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
          <img className="mediaLogos" src={media1} alt="instagram" />
          <img className="mediaLogos" src={media2} alt="facebook" />
          <img className="mediaLogos" src={media3} alt="whatsapp" />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
