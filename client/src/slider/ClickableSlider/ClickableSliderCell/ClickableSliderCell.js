import React, { useState } from "react";
import "./ClickableSliderCell.css";
import { Carousel } from "react-responsive-carousel";
import ModalProject from "../../../components/ModalProject/ModalProject";
import info from "../../../assets/logo/info.png";
export default function ClickableSliderCell(props) {
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

        {props.img3 === undefined ? (
          <Carousel
            showStatus={false}
            infiniteLoop
            showIndicators={true}
            showThumbs={false}
            autoPlay={false}
            useKeyboardArrows={false}
            swipeable
          >
            <div onClick={toggleOpen} className="clickable-cell">
              <img className="car-img-cell" alt="1" src={props.img1} />
            </div>
            <div onClick={toggleOpen}>
              <div className="clickable-cell">
                <img className="car-img-cell " alt="2" src={props.img2} />
              </div>
            </div>
          </Carousel>
        ) : (
          <>
            {props.img4 === undefined ? (
              <Carousel
                showStatus={false}
                infiniteLoop
                showIndicators={true}
                showThumbs={false}
                autoPlay={false}
                useKeyboardArrows={false}
                swipeable
              >
                <div onClick={toggleOpen} className="clickable-cell">
                  <img className="car-img-cell" alt="1" src={props.img1} />
                </div>
                <div onClick={toggleOpen}>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div onClick={toggleOpen}>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="3" src={props.img3} />
                  </div>
                </div>
              </Carousel>
            ) : (
              <Carousel
                showStatus={false}
                infiniteLoop
                showIndicators={true}
                showThumbs={false}
                autoPlay={false}
                useKeyboardArrows={false}
                swipeable
              >
                <div onClick={toggleOpen} className="clickable-cell">
                  <img className="car-img-cell" alt="1" src={props.img1} />
                </div>
                <div onClick={toggleOpen}>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div onClick={toggleOpen}>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="3" src={props.img3} />
                  </div>
                </div>
                <div onClick={toggleOpen}>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="4" src={props.img4} />
                  </div>
                </div>
              </Carousel>
            )}
          </>
        )}
      </div>
    </div>
  );
}
