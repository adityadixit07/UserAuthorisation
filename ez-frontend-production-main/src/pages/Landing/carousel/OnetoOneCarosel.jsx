import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import "./carousel.css";

export default function OneToOneCarosel() {
  const product = productData.map((item, index) => (
    <Product
      key={index}
      name={item.name}
      url={item.imageurl}
      objective={item.objective}
      company={item.company}
    />
  ));
  return (
    <div className="mt-10">
      
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={700}
        responsive={responsive}
      >
        {product}
      </Carousel>
    </div>
  );
}
