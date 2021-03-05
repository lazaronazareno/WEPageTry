import React, { useState, useEffect } from "react";

import arrow from "../../assets/icons.png";

import "./styles.scss";

function Carousel(props) {
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (props.images.length - 1)) : setX(x + 100);
    console.log(props.images.index);
  };
  const goRight = () => {
    x === -100 * (props.images.length - 1) ? setX(0) : setX(x - 100);
  };

  useEffect(() => {
    const goRight = () => {
      x === -100 * (props.images.length - 1) ? setX(0) : setX(x - 100);
    };
    const id = setTimeout(() => setX(goRight), 5000);
    return () => clearTimeout(id);
  }, [x]);

  return (
    <div className="slider">
      {props.images.map(({ src, index, name }) => (
        <div
          key={index}
          className="slide"
          style={{ transform: `translateX(${x}%)` }}
        >
          <img alt={index} className="image" src={src} />
        </div>
      ))}
      <button type="button" className="goLeft" onClick={goLeft}>
        <img className="arrowLeft" alt="arrowleft" src={arrow} />
      </button>
      <button type="button" className="goRight" onClick={goRight}>
        <img className="arrowRight" alt="arrowright" src={arrow} />
      </button>
    </div>
  );
}

export default Carousel;
