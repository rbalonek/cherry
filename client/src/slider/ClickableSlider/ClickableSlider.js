import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ClickableSlider.css";
// import { Fade } from "react-awesome-reveal";

export default function ClickableSlider(props) {
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");

  const toggleOpen = () => {
    modalToggle("modalOpen");
    modalTextToggle("modal-text-open");
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
  };

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
      <div className={modal} onClick={toggleClosed}></div>

      <div className={modalText} onClick={toggleClosed}>
        <div className="modal-text-container clickable">
          <p className="modal-text project">Project</p>
          <h2 className="modal-text name">{props.name}</h2>
          <p className="modal-text season">{props.season}</p>
          <div className="client-container">
            <p className="modal-text client">CLIENT</p>
            <p className="modal-text client-name">{props.client}</p>
          </div>
          <div className="proj-description">
            <p className="description-text"> {props.description} </p>
          </div>
        </div>
      </div>

      <Carousel
        showStatus={false}
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        useKeyboardArrows
        swipeable
        showIndicators
      >
        <div>
          <img className="car-img" alt="1" src={props.img1} />
        </div>
        <div onClick={toggleOpen}>
          <div className="clickable">
            <img className="car-img " alt="2" src={props.img2} />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
