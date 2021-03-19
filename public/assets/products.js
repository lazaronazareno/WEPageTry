import imagen1 from "./photosProductsModel/life.png";
import imagen2 from "./photosProductsModel/slave.png";
import imagen3 from "./photosProductsModel/sleep.png";
import imagen4 from "./photosProductsModel/something.png";
import mask1 from "./photosProductsModel/mask1.png";
import mask2 from "./photosProductsModel/mask2.png";
import mask3 from "./photosProductsModel/mask3.png";


const productsList = [
  {
    src: imagen1,
    name: "Life is What you Make it",
    index: 1
  },
  {
    src: imagen2,
    name: "Slave to Wage",
    index: 2
  },
  {
    src: imagen3,
    name: "Sleeping with Ghost",
    index: 3
  },
  {
    src: imagen4,
    name: "Something Rotten",
    index: 4
  }
];

const productsListRequest = [
  {
    src: mask1,
    name: "Helena",
    index: 1
  },
  {
    src: mask2,
    name: "Second Sight",
    index: 2
  },
  {
    src: mask3,
    name: "Death of Me",
    index: 3
  }
];
export { productsList, productsListRequest };
