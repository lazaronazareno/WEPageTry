import "./styles.scss";
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
        <img className="mediaLogos" src={media1} alt="instagram" />
        <img className="mediaLogos" src={media2} alt="facebook" />
        <img className="mediaLogos" src={media3} alt="whatsapp" />
      </div>
    </div>
  );
}

export default First;
