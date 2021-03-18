import "./styles.scss";

function CarouselProductos(props) {
  return (
    <div className="sliderProducts">
      <div key={props.images.index} className="slide">
        <img
          key={props.images[props.index]}
          alt={props.index}
          className="image"
          src={props.images[props.index].src}
        />
      </div>
    </div>
  );
}

export default CarouselProductos;
