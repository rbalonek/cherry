import React, { useState } from "react";
import "./ClickableSliderCell.css";
import { Carousel } from "react-responsive-carousel";
import ModalProject from "../../../components/ModalProject/ModalProject";
import zenscroll from "zenscroll";
// import arrowDown from "../../../assets/logo/Website-Asset_DownArrow.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Animated } from "react-animated-css";
import { useLockBodyScroll, useToggle } from "react-use";

export default function ClickableSliderCell(props) {
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");
  // const [locked, toggleLocked] = useToggle(true);
  useLockBodyScroll(true);
  console.log(props);
  const toggleOpen = () => {
    modalToggle("modalOpen-cell clickable-modal");
    modalTextToggle("modal-text-open");
    // toggleLocked();
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
    // toggleLocked();
  };

  // let pageHeight = window.innerHeight;
  let prevSlide = document.getElementById(props.PrevSlide);
  let nextSlide = document.getElementById(props.NextSlide);
  console.log("next", nextSlide);
  console.log("prev", prevSlide);
  // var up = props.scrollToUp;
  // var scrollingDown = props.scrollToDown;
  // // console.log("up", props.scrollToUp);
  // // console.log("up", props.scrollToUp);
  // // console.log("down", scrollingDown);
  const ArrowUp100Vh = () => {
    zenscroll.center(document.getElementById(props.PrevSlide));
  };
  // // console.log(pageHeight * props.scrollToDown);
  // // console.log("down scrolls", props.scrollToDown);

  const ArrowDown100Vh = () => {
    zenscroll.center(document.getElementById(props.NextSlide));
  };
  // const ScrollUp100Vh = () => {
  //   // zenscroll.toY(window.innerHeight * props.scrollToUp);
  //   // zenscroll.toY(pageHeight);
  //   // zenscroll.intoView(chi);
  //   // zenscroll.to(up);
  //   // window.scrollBy(0, pageHeight);
  //   // console.log("up");
  // };
  // const ScrollDown100Vh = () => {
  //   // zenscroll.toY(pageHeight);
  //   zenscroll.intoView(common);
  //   // zenscroll.to(scrollingDown);
  //   // zenscroll.toY(0, pageHeight);
  //   // console.log("down");
  //   // window.scrollBy(0, pageHeight);
  // };

  // var scrollableElement = document.body; //document.getElementById("carousel-container-cell"); //

  // scrollableElement.addEventListener("wheel", checkScrollDirection);

  // function checkScrollDirection(event) {
  //   if (checkScrollDirectionIsUp(event)) {
  //     console.log("UP");
  //     zenscroll.toY(0, pageHeight);
  //   } else {
  //     console.log("Down");
  //     zenscroll.toY(0, -pageHeight);
  //   }
  // }

  // function checkScrollDirectionIsUp(event) {
  //   if (event.wheelDelta) {
  //     // return event.wheelDelta > 0;
  //   }
  //   // return event.deltaY < 0;
  // }
  // // onClick={ScrollDown100Vh}
  return (
    <div>
      <div id="carousel-container-cell" className="carousel-container-cell">
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
            <div onClick={toggleOpen} className="clickable-cell">
              <img className="car-img-cell" alt="1" src={props.img1} />
            </div>
            <div>
              <div onClick={toggleOpen} className="clickable-cell">
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
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
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
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img className="car-img-cell " alt="2" src={props.img2} />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img className="car-img-cell " alt="3" src={props.img3} />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img className="car-img-cell " alt="4" src={props.img4} />
                  </div>
                </div>
              </Carousel>
            )}
          </>
        )}
      </div>
      <div onClick={ArrowUp100Vh} className="arrow-up-cell-container">
        <img
          style={{
            textAlign: "center",
            position: "relative",
            top: "2px",
          }}
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_30,w_30/v1611017756/Cherry/Cherry%20Clients/Graphic%20Assets/UpArrow_pefwf1.png"
          alt="cursor-up"
        />
      </div>
      <div onClick={ArrowDown100Vh} className="arrow-down-cell-container">
        <img
          style={{ position: "relative", justifyContent: "center", top: "2px" }}
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/c_scale,h_30,w_30/v1611016884/CursorDown.png"
          alt="cursor-down"
        />
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
