import React, { useState } from "react";

function Carousel({ images }) {
  /*const [currentImageIndex, setImageIndex] = useState(0);

   const handleLeftClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={images[currentImageIndex]} alt="Carousel" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  ); */

  const [index, setIndex] = useState(0);
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex((index - 1) % images.length);
    } else {
      setIndex((index + 1) % images.length);
    }
  };
  return (
    <div className="carousel">
      <button onClick={() => handleClick("left")}>Left</button>
      <img src={images[index]} />
      <button onClick={() => handleClick("right")}>Right</button>
    </div>
  );
}

export default Carousel;
