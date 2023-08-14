import "../../pages/main/Startup/Startup.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./ImageSlider.css";
import image1 from "../../assets/bangalorestartup.png";

const ImageSlider = () => {
  return (
    <div className="slider eyeOpenInverse">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="slider image1" />
        <img src={image1} className="sliderimg" alt="slider image2" />
        <img src={image1} className="sliderimg" alt="slider image3" />
        <img src={image1} className="sliderimg" alt="slider image4" />
        <img src={image1} className="sliderimg" alt="slider image5" />
        <img src={image1} className="sliderimg" alt="slider image6" />
        <img src={image1} className="sliderimg" alt="slider image7" />
        <img src={image1} className="sliderimg" alt="slider image8" />
        <img src={image1} className="sliderimg" alt="slider image9" />
        <img src={image1} className="sliderimg" alt="slider image55" />
      </AliceCarousel>
    </div>
  );
};

export default ImageSlider;
