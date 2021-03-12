import CarouselFotos from "../../carousel/carouselFotos";
import Sidebar from "../../sidebar/sidebar";
import "./styles.scss";
import photos from "../../../assets/photos";

function Fotos() {
  return (
    <div className="photos">
      <Sidebar />
      <div className="photosMain">
        <h1>FOTOS</h1>
        <h2 className="subtitulo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h2>
        <CarouselFotos images={photos} />
        <h3 className="text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </h3>
      </div>
    </div>
  );
}

export default Fotos;
