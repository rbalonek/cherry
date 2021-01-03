import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalProject from "../../components/ModalProject/ModalProject";
import "./ClickableSlider.css";
// import { Fade } from "react-awesome-reveal";

export default function ClickableSlider(props) {
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");

  const toggleOpen = () => {
    modalToggle("modalOpen clickable-modal");
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
        <ModalProject
          client={props.client}
          name={props.name}
          description={props.description}
        />
      </div>

      <Carousel
        showStatus={false}
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        autoPlay={false}
        useKeyboardArrows={true}
        swipeable
        showIndicators
      >
        <div onClick={toggleOpen} className="clickable">
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
