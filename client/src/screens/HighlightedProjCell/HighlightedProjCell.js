import React, { useState } from "react";
import "./HighlightedProjCell.css";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Animated } from "react-animated-css";
import { useLockBodyScroll, useToggle } from "react-use";
import ModalProjectProjName from "../../components/ModalProject/ModalProjectProjName/ModalProjectProjName";
// import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";

export default function HighlightedProjCell(props) {
  const history = useHistory();
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");
  const [locked, toggleLocked] = useToggle(true);
  useLockBodyScroll(locked);

  let projName = window.location.pathname;
  let n = 11;
  projName = projName.substring(n);
  // console.log(projName);

  const arr = [];
  props.highlightedProjects.map(
    (project) => project.fields.idname === projName && arr.push(project)
  );
  // console.log(arr);

  const toggleOpen = () => {
    modalToggle("modalOpen clickable-modal");
    modalTextToggle("modal-text-open");
    // props.handleClickHamburger("show-none");
    // props.handleClick("show-none");
    toggleLocked();
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
    // props.handleClick("logo-sticky");
    // props.handleClickHamburger("menu-btn");
    toggleLocked();
  };

  return (
    <div>
      <div className="holder">
        <Carousel
          showStatus={false}
          infiniteLoop
          showIndicators={true}
          showThumbs={false}
          autoPlay={false}
          useKeyboardArrows={true}
          swipeable
        >
          {arr.map((project) => (
            <>
              <div className="centering">
                <div onClick={toggleOpen} className="clickable">
                  <img
                    className="img-center"
                    style={{
                      // width: "100vw",
                      // height: "100vh",

                      // padding: "20px",
                      textAlign: "center",
                      // objectFit: "cover",
                      backgroundPosition: "50% 50%",
                      backgroundRepeat: "no-repeat",
                      // textAlign: "-webkit-center",
                      // display: "flex",
                      // justifyContent: "center",
                    }}
                    alt={project.fields.img1}
                    src={project.fields.img1}
                  />
                </div>
                <div className={modal} onClick={toggleClosed}></div>
                <div className={modalText} onClick={toggleClosed}>
                  <Animated
                    animationIn="fadeIn"
                    animationInDuration={2000}
                    animationOut="fadeOut"
                    animationOutDuration={100}
                  >
                    <ModalProjectProjName
                      name={project.fields.name}
                      client={project.fields.client}
                      description={project.fields.description}
                      descriptionTwo={project.fields.descriptionTwo}
                      keyart={project.fields.keyart}
                      Logo={project.fields.Logo}
                      Branding={project.fields.Branding}
                      BookDesign={project.fields.BookDesign}
                      OutOfHome={project.fields.OutOfHome}
                      Apparel={project.fields.Apparel}
                      Digital={project.fields.Digital}
                      CustomType={project.fields.CustomType}
                      MotionGFX={project.fields.MotionGFX}
                      OpeningCredits={project.fields.OpeningCredits}
                      Packaging={project.fields.Packaging}
                      Copy={project.fields.Copy}
                      Retouching={project.fields.Retouching}
                      PhotoArtDirection={project.fields.PhotoArtDirection}
                      BsidesPage={project.fields.BsidesPage}
                    />
                  </Animated>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
