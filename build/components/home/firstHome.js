import "./styles.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import media1 from "../../assets/socialMedia/instagram.png";
import media2 from "../../assets/socialMedia/facebook.png";
import media3 from "../../assets/socialMedia/whatsapp.png";

function First() {
  return (
    <div className="firstHome">
      <h1>Devil in the Details</h1>
      <img className="logo" src={logo} alt="logo" />
      <h1>Y aqui habria un eslogan... SI TUVIERA UNO!! </h1>
      <div className="socialMedia">
        <a target="_blank" rel="noopener noreferrer" href="www.instagram.com" className="link">
          <img className="mediaLogos" src={media1} alt="instagram" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="www.facebook.com" className="link">
          <img className="mediaLogos" src={media2} alt="facebook" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="www.whatsapp.com" className="link">
          <img className="mediaLogos" src={media3} alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default First;
