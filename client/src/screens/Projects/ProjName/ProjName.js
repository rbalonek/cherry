import React, { useState } from "react";
import ProjectsStickyHeader from "../ProjectsStickyHeader/ProjectsStickyHeader";
import "./ProjName.css";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Animated } from "react-animated-css";
import ModalProject from "../../../components/ModalProject/ModalProject";
import ModalProjectProjName from "../../../components/ModalProject/ModalProjectProjName/ModalProjectProjName";
// import { AttentionSeeker } from "react-awesome-reveal";
import { useLockBodyScroll, useToggle } from "react-use";
import AboutHamburger from "../../../components/Hamburger/AboutHamburger/AboutHamburger";

export default function ProjName(props) {
  // console.log(props);
  const history = useHistory();
  const [modal, modalToggle] = useState("modalClosed");
  const [modalText, modalTextToggle] = useState("modal-text-closed");
  const [locked, toggleLocked] = useToggle(true);
  const [xOut, toggleXOut] = useState("projname-proj-x");
  const [infoText, toggleInfoText] = useState("proj-info-text-projname");
  useLockBodyScroll(locked);
  const carouselArrows = document.getElementsByClassName("control-arrow");
  const controlDots = document.getElementsByClassName("control-dots");
  // console.log(controlDots);
  const toggleOpen = () => {
    modalToggle("modalOpen-projname clickable-modal");
    modalTextToggle("modal-text-open");

    carouselArrows[0].classList.toggle("hide");
    carouselArrows[1].classList.toggle("hide");
    controlDots[0].classList.toggle("hide");
    toggleXOut("hide");
    toggleInfoText("hide");
    // toggleLocked();
  };

  const toggleClosed = () => {
    modalToggle("modalClosed");
    modalTextToggle("modal-text-closed");
    toggleXOut("projname-proj-x");
    toggleInfoText("proj-info-text-projname");

    carouselArrows[0].classList.toggle("hide");
    carouselArrows[1].classList.toggle("hide");
    controlDots[0].classList.toggle("hide");

    // toggleLocked();
  };

  let projName = window.location.pathname;
  let n = 9;
  projName = projName.substring(n);

  const arr = [];
  props.projects.map(
    (project) => project.fields.projectname === projName && arr.push(project)
  );

  return (
    <div>
      <div onClick={() => history.goBack()} className={xOut}>
        <AboutHamburger />
      </div>

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
                <div
                // onClick={toggleOpen}
                // className="clickable"
                >
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
      <div onClick={toggleOpen} className="proj-info-container-projname">
        <h3 className={infoText}>Project Info</h3>
      </div>
    </div>
  );
}
