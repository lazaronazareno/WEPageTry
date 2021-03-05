import "./styles.scss";
import Sidebar from "../../sidebar/sidebar";
import productsList from "../../../assets/products";

function Productos() {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsMain">
        <h1>PRODUCTOS</h1>
        <h1>Modelos Originales</h1>
        <div className="imagesDiv">
          {productsList.map(({ src, index, name }) => (
            <div>
              <img alt={index} className="productsImage" src={src} />
              <h3 className="productsName">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productos;
