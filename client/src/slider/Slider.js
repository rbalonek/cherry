import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="carousel-container">
      <Carousel
        showStatus={false}
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        useKeyboardArrows
        swipeable
        // showArrows={false}
      >
        <div>
          <img className="car-img" alt="1" src={props.img1} />
        </div>
        <div>
          <img className="car-img" alt="2" src={props.img2} />
        </div>
      </Carousel>
    </div>
  );
}
