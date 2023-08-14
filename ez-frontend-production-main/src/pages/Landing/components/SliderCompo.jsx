import { useState } from "react";
import Slider from "react-slick";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import community from '../../../assets/ez-logo/communityicon.jpg'

const SliderCompo = () => {
  const [currentCategory, setCurrentCategory] = useState("Category 1");
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };

  const handleButtonClick = (category) => {
    setCurrentCategory(category);
  };

  const renderSliderItems = () => {
    // Replace these images with your own image URLs based on category
    const imageMap = {
      "Category 1": [
        community,
        // Add more images for Category 1
      ],
      "Category 2": [
        community,
        // Add more images for Category 1
      ],
      "Category 3": [
        community,
        // Add more images for Category 1
      ],
      "Category 4": [
        community,
        // Add more images for Category 1
      ],
      // Add more categories and image URLs as needed
    };

    const images = imageMap[currentCategory] || [];

    return images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slider ${index + 1}`} />
      </div>
    ));
  };

  return (
    <div>
      <ButtonGroup color="primary" aria-label="button group">
        <Button onClick={() => handleButtonClick("Category 1")}>
          Category 1
        </Button>
        <Button onClick={() => handleButtonClick("Category 2")}>
          Category 2
        </Button>
        {/* Add more buttons for other categories */}
      </ButtonGroup>

      <Typography variant="h6" gutterBottom>
        {currentCategory}
      </Typography>

      <Slider {...sliderSettings}>{renderSliderItems()}</Slider>
    </div>
  );
};

export default SliderCompo;
