import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalProject from "../../components/ModalProject/ModalProject";
import "./ClickableSlider.css";
import ClickableSliderCell from "./ClickableSliderCell/ClickableSliderCell";

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
    <>
      {window.innerWidth > 770 ? (
        <div>
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
              showIndicators={true}
              showThumbs={false}
              autoPlay={false}
              useKeyboardArrows={true}
              swipeable
            >
              <div onClick={toggleOpen} className="clickable">
                <img className="car-img" alt="1" src={props.img1} />
              </div>

              <div onClick={toggleOpen}>
                <div className="clickable">
                  <img className="car-img " alt="2" src={props.img2} />
                </div>
              </div>
              <div onClick={toggleOpen}>
                <div className="clickable">
                  <img className="car-img " alt="2" src={props.img1} />
                </div>
              </div>
              <div onClick={toggleOpen}>
                <div className="clickable">
                  <img className="car-img " alt="2" src={props.img1} />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      ) : (
        <div>
          <ClickableSliderCell
            scrollToUp={props.scrollToUp}
            scrollToDown={props.scrollToDown}
            img1={props.img1}
            img2={props.img2}
            name={props.name}
            season={props.season}
            client={props.client}
            description={props.description}
          />
        </div>
      )}
    </>
  );
}
