import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalProject from "../../components/ModalProject/ModalProject";
import "./ClickableSlider.css";
import ClickableSliderCell from "./ClickableSliderCell/ClickableSliderCell";
import zenscroll from "zenscroll";
import { Animated } from "react-animated-css";
import { useLockBodyScroll, useToggle } from "react-use";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isSafari,
} from "react-device-detect";

export default function ClickableSlider(props) {
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");
  const [locked, toggleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  const toggleOpen = () => {
    modalToggle("modalOpen clickable-modal");
    modalTextToggle("modal-text-open");
    props.handleClickHamburger("show-none");
    props.handleClick("show-none");
    toggleLocked();
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
    props.handleClick("logo-sticky");
    props.handleClickHamburger("menu-btn");
    toggleLocked();
  };

  let pageHeight = window.innerHeight;

  // var up = document.getElementById(`#${props.scrollToUp}`);
  // var scrollingDown = document.getElementById(`#${props.scrollToDown}`);
  const ArrowUp100Vh = () => {
    let pageHeight = window.innerHeight;
    // zenscroll.toY(pageHeight * props.scrollToUp);

    // zenscroll.intoView(chi);
    // zenscroll.to(up);
    window.scrollBy(0, -pageHeight);
    // console.log("up");
  };

  const ArrowDown100Vh = () => {
    let pageHeight = window.innerHeight;
    // zenscroll.toY(pageHeight * props.scrollToDown);

    // zenscroll.intoView(chi);
    // zenscroll.to(scrollingDown);
    window.scrollBy(0, pageHeight);
    // console.log("down");
  };

  // console.log(props.img3);

  return (
    <>
      {isSafari ? (
        <div>
          <div className="carousel-container-safari">
            <div className="arrow-up-container-safari" onClick={ArrowUp100Vh}>
              <div className="arrow-up-safari" />
            </div>

            <div
              className="arrow-down-container-safari"
              onClick={ArrowDown100Vh}
            />
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
                  Branding={props.Branding}
                  BookDesign={props.BookDesign}
                  OutOfHome={props.OutOfHome}
                  Apparel={props.Apparel}
                  Digital={props.Digital}
                  CustomType={props.CustomType}
                  MotionGFX={props.MotionGFX}
                  OpeningCredits={props.OpeningCredits}
                  Packaging={props.Packaging}
                  Copy={props.Copy}
                  Retouching={props.Retouching}
                  PhotoArtDirection={props.PhotoArtDirection}
                  BsidesPage={props.BsidesPage}
                  // img1={props.img1}
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
                        <img className="car-img " alt="3" src={props.img3} />
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
                        <img className="car-img " alt="3" src={props.img3} />
                      </div>
                    </div>
                    <div onClick={toggleOpen}>
                      <div className="clickable">
                        <img className="car-img " alt="4" src={props.img4} />
                      </div>
                    </div>
                  </Carousel>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="carousel-container">
            <div className="arrow-up-container" onClick={ArrowUp100Vh}>
              <div className="arrow-up" />
            </div>

            <div className="arrow-down-container" onClick={ArrowDown100Vh} />

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
                  Branding={props.Branding}
                  BookDesign={props.BookDesign}
                  OutOfHome={props.OutOfHome}
                  Apparel={props.Apparel}
                  Digital={props.Digital}
                  CustomType={props.CustomType}
                  MotionGFX={props.MotionGFX}
                  OpeningCredits={props.OpeningCredits}
                  Packaging={props.Packaging}
                  Copy={props.Copy}
                  Retouching={props.Retouching}
                  PhotoArtDirection={props.PhotoArtDirection}
                  BsidesPage={props.BsidesPage}
                  // img1={props.img1}
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
                        <img className="car-img " alt="3" src={props.img3} />
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
                        <img className="car-img " alt="3" src={props.img3} />
                      </div>
                    </div>
                    <div onClick={toggleOpen}>
                      <div className="clickable">
                        <img className="car-img " alt="4" src={props.img4} />
                      </div>
                    </div>
                  </Carousel>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
