import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="carousel-container">
      <a href={`#${props.scrollToUp}`}>
        <div className="arrow-up-container">
          <div className="arrow-up" />
        </div>
      </a>
      <a href={`#${props.scrollToDown}`}>
        <div className="arrow-down-container" />
      </a>
      <Carousel
        showStatus={false}
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        useKeyboardArrows
        swipeable={true}
        // showArrows={false}
        showIndicators
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
