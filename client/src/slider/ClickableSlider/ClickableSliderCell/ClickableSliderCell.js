import React, { useState } from "react";
import "./ClickableSliderCell.css";
import { Carousel } from "react-responsive-carousel";
import ModalProject from "../../../components/ModalProject/ModalProject";
import info from "../../../assets/logo/info.png";
export default function ClickableSliderCell(props) {
  const [modal, modalToggle] = useState("modalClosed-cell");
  const [modalText, modalTextToggle] = useState("modal-text-closed-cell");

  const toggleOpen = () => {
    modalToggle("modalOpen-cell clickable-modal-cell");
    modalTextToggle("modal-text-open-cell");
  };

  const toggleClosed = () => {
    modalToggle("modalClosed-cell");
    modalTextToggle("modal-text-closed-cell");
  };

  return (
    <div>
      <div className="carousel-container-cell">
        <a href={`#${props.scrollToUp}`}>
          <div className="arrow-up-container-cell">
            <div className="arrow-up-cell" />
          </div>
        </a>
        <a href={`#${props.scrollToDown}`}>
          <div className="arrow-down-container-cell" />
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
          showIndicators={true}
          showThumbs={false}
          autoPlay={false}
          useKeyboardArrows={true}
          swipeable
          showArrows={true}
        >
          <div className="clickable-cell">
            <img className="car-img-cell" alt="1" src={props.img1} />
          </div>
          <div onClick={toggleOpen}>
            <div className="clickable-cell">
              <img className="car-img-cell " alt="2" src={props.img2} />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
