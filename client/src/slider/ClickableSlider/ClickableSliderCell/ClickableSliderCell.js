import React, { useState } from "react";
import "./ClickableSliderCell.css";
import { Carousel } from "react-responsive-carousel";
import ModalProject from "../../../components/ModalProject/ModalProject";
import zenscroll from "zenscroll";
import arrowDown from "../../../assets/logo/Website-Asset_DownArrow.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Animated } from "react-animated-css";

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

  let pageHeight = window.innerHeight;

  // var up = document.getElementById(`#${props.scrollToUp}`);
  // var scrollingDown = document.getElementById(`#${props.scrollToDown}`);
  const ArrowUp100Vh = () => {
    zenscroll.toY(pageHeight * props.scrollToUp);
    // zenscroll.intoView(chi);
    // zenscroll.to(up);
    // window.scrollBy(0, pageHeight);
    console.log("up");
  };

  const ArrowDown100Vh = () => {
    zenscroll.toY(pageHeight * props.scrollToDown);
    // zenscroll.intoView(chi);
    // zenscroll.to(scrollingDown);
    // window.scrollBy(0, pageHeight);
    console.log("down");
  };

  return (
    <div>
      <div className="carousel-container-cell">
        <div className={modal} onClick={toggleClosed}></div>

        <div className={modalText} onClick={toggleClosed}>
          <Animated
            animationIn="fadeIn"
            animationInDuration={2000}
            animationOut="fadeOut"
            animationOutDuration={100}
          >
            <ModalProject
              client={props.client}
              name={props.name}
              description={props.description}
              descriptionTwo={props.descriptionTwo}
              keyart={props.keyart}
              identity={props.identity}
              motiongfx={props.motiongfx}
              copy={props.copy}
              retouching={props.retouching}
              photoartdirection={props.photoartdirection}
            />
          </Animated>
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
            <div className="clickable-cell">
              <img className="car-img-cell" alt="1" src={props.img1} />
            </div>
            <div>
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
                <div className="clickable-cell">
                  <img className="car-img-cell" alt="1" src={props.img1} />
                </div>
                <div>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div>
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
                <div className="clickable-cell">
                  <img className="car-img-cell" alt="1" src={props.img1} />
                </div>
                <div>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="3" src={props.img3} />
                  </div>
                </div>
                <div>
                  <div className="clickable-cell">
                    <img className="car-img-cell " alt="4" src={props.img4} />
                  </div>
                </div>
              </Carousel>
            )}
          </>
        )}
      </div>
      <div className="AiOutlineInfoCircle-container" onClick={toggleOpen}>
        <AiOutlineInfoCircle color="white" size="2em" />
      </div>
    </div>
  );
}

// <a href={`#${props.scrollToUp}`}>
// <div className="arrow-up-container-cell">
//   <img
//     className="arrow-up-cell"
//     alt="arrowUp"
//     src={arrowDown}
//     onClick={ArrowUp100Vh}
//   />
// </div>
// </a>

// <a href={`#${props.scrollToDown}`}>
// <div className="arrow-down-container-cell">
//   <img
//     className="arrow-down-cell"
//     alt="arrowDown"
//     src={arrowDown}
//     onClick={ArrowDown100Vh}
//   />
// </div>
// </a>
