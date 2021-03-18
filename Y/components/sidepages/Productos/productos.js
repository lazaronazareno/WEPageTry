import "./styles.scss";
import React, { useState } from "react";
import Sidebar from "../../sidebar/sidebar";
import { productsList } from "../../../assets/products";
import { productsListRequest } from "../../../assets/products";
import CarouselProductos from "../../carousel/carouselProductos";

function Productos() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [current, setCurrent] = useState(0);
  const [current2, setCurrent2] = useState(0);

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
                key={index}
                className="productsImage"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setCurrent(index - 1);
                }}
                src={src}
              />
              <h3 className="productsName">{name}</h3>
            </div>
          ))}
        </div>
        {isOpen && (
          <dialog className="dialog" open>
            <CarouselProductos images={productsList} index={current} />
            <button
              className="buttonProducts"
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </button>
          </dialog>
        )}
        <h1>Modelos A Pedido </h1>
        <div className="imagesDiv">
          {productsListRequest.map(({ src, index, name }) => (
            <div>
              <img
                alt={index}
                key={index}
                className="productsImage"
                onClick={() => {
                  setIsOpen2(!isOpen2);
                  setCurrent2(index - 1);
                  console.log(index);
                }}
                src={src}
              />
              <h3 className="productsName">{name}</h3>
            </div>
          ))}
        </div>
        {isOpen2 && (
          <dialog className="dialog" open>
            <CarouselProductos images={productsListRequest} index={current2} />
            <button
              className="buttonProducts"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              x
            </button>
          </dialog>
        )}
      </div>
    </div>
  );
}

export default Productos;
