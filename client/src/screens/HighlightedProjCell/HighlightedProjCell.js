import React, { useState } from "react";
import "./HighlightedProjCell.css";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Animated } from "react-animated-css";
import { useLockBodyScroll, useToggle } from "react-use";
import ModalProjectProjName from "../../components/ModalProject/ModalProjectProjName/ModalProjectProjName";
import ModalProject from "../../components/ModalProject/ModalProject";
import AboutHamburger from "../../components/Hamburger/AboutHamburger/AboutHamburger";
// import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";

export default function HighlightedProjCell(props) {
  const history = useHistory();
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  let projName = window.location.pathname;
  let n = 11;
  projName = projName.substring(n);
  // console.log(projName);

  const arr = [];
  props.highlightedProjects.map(
    (project) => project.fields.idname === projName && arr.push(project)
  );
  // console.log(arr[0].fields.cellimg1);

  useLockBodyScroll(true);
  // console.log(props);
  const toggleOpen = () => {
    modalToggle("modalOpen-cell clickable-modal");
    modalTextToggle("modal-text-open-cell");
    // toggleLocked();
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
    // toggleLocked();
  };

  return (
    <div style={{ width: "100vw" }}>
      <div onClick={() => history.goBack()} className="highlight-proj-cell-x">
        <AboutHamburger />
      </div>
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
              client={arr[0].fields.client}
              name={arr[0].fields.name}
              description={arr[0].fields.description}
              descriptionTwo={arr[0].fields.descriptionTwo}
              keyart={arr[0].fields.keyart}
              identity={arr[0].fields.identity}
              motiongfx={arr[0].fields.motiongfx}
              copy={arr[0].fields.copy}
              retouching={arr[0].fields.retouching}
              photoartdirection={arr[0].fields.photoartdirection}
            />
          </Animated>
        </div>

        {arr[0].fields.cellimg3 === undefined ? (
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
              <img
                className="car-img-cell"
                alt="1"
                src={arr[0].fields.cellimg1}
              />
            </div>
            <div>
              <div onClick={toggleOpen} className="clickable-cell">
                <img
                  className="car-img-cell "
                  alt="2"
                  src={arr[0].fields.cellimg2}
                />
              </div>
            </div>
          </Carousel>
        ) : (
          <>
            {arr[0].fields.cellimg4 === undefined ? (
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
                  <img
                    className="car-img-cell"
                    alt="1"
                    src={arr[0].fields.cellimg1}
                  />
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img
                      className="car-img-cell "
                      alt="2"
                      src={arr[0].fields.cellimg2}
                    />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img
                      className="car-img-cell "
                      alt="3"
                      src={arr[0].fields.cellimg3}
                    />
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
                  <img
                    className="car-img-cell"
                    alt="1"
                    src={arr[0].fields.cellimg1}
                  />
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img
                      className="car-img-cell "
                      alt="2"
                      src={arr[0].fields.cellimg2}
                    />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img
                      className="car-img-cell "
                      alt="3"
                      src={arr[0].fields.cellimg3}
                    />
                  </div>
                </div>
                <div>
                  <div onClick={toggleOpen} className="clickable-cell">
                    <img
                      className="car-img-cell "
                      alt="4"
                      src={arr[0].fields.cellimg4}
                    />
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
