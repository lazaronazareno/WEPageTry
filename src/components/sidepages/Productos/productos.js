import "./styles.scss";
import React, { useState } from "react";
import Sidebar from "../../sidebar/sidebar";
import { productsList } from "../../../assets/products";
import { productsListRequest } from "../../../assets/products";
import photos from "../../../assets/photos";
import Carousel from "../../carousel/carousel";

function Productos() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="products">
      <Sidebar />
      <div className="productsMain">
        <h1>PRODUCTOS</h1>
        <h1>Modelos Originales</h1>
        <div className="imagesDiv">
          {productsList.map(({ src, index, name }) => (
            <div>
              <img
                alt={index}
                className="productsImage"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                src={src}
              />
              <h3 className="productsName">{name}</h3>
            </div>
          ))}
        </div>
        {isOpen && (
          <dialog className="dialog" open>
            <Carousel images={photos} />
            <button onClick={() => setIsOpen(!isOpen)}>x</button>
          </dialog>
        )}
        <h1>Modelos A Pedido </h1>
        <div className="imagesDiv">
          {productsListRequest.map(({ src, index, name }) => (
            <div>
              <img
                alt={index}
                className="productsImage"
                onClick={() => {
                  setIsOpen2(!isOpen2);
                }}
                src={src}
              />
              <h3 className="productsName">{name}</h3>
            </div>
          ))}
        </div>
        {isOpen2 && (
          <dialog className="dialog" open>
            <Carousel images={photos} />
            <button onClick={() => setIsOpen2(!isOpen2)}>x</button>
          </dialog>
        )}
      </div>
    </div>
  );
}

export default Productos;
