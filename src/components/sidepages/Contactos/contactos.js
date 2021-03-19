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
        <img className="nombreLogo" src={nombre} alt="logonombre" />
        <h1>Datos de contacto:</h1>
        <h3>devildetails.clothing@gmail.com</h3>
        <h3>Celular : 1158445886</h3>
        <h3>Para mas informacion visité nuestras redes :</h3>
        <div className="socialMedia">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/devildetailsclothing/" className="link">
            <img className="mediaLogos" src={media1} alt="instagram" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/devildetailsclothing" className="link">
            <img className="mediaLogos" src={media2} alt="facebook" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/541158445886" className="link">
            <img className="mediaLogos" src={media3} alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
