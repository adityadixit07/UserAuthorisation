import { useState } from "react";

const SwipeComponent = () => {
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
  };

  const handleMouseMove = (event) => {
    setEndX(event.clientX);
  };

  const handleMouseUp = () => {
    if (startX && endX) {
      const distance = endX - startX;
      if (distance > 0) {
        // Swipe right
        // console.log("Swiped right");
      } else if (distance < 0) {
        // Swipe left
        // console.log("Swiped left");
      }
    }

    // Reset values
    setStartX(null);
    setEndX(null);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: "200px", height: "200px", background: "red" }}
    >
      Swipe me
    </div>
  );
};

export default SwipeComponent;
