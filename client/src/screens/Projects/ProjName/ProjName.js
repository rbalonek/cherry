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
  // console.log(arr);

  let keywordArray = [];

  var branding;
  for (branding = 0; branding < arr.length; branding++) {
    if (arr[branding].fields.Branding === true) {
      keywordArray.push("Branding");
    }
  }
  var KeyArt;
  for (KeyArt = 0; KeyArt < arr.length; KeyArt++) {
    if (arr[KeyArt].fields.keyart === true) {
      keywordArray.push("keyart");
    }
  }

  var OpeningCredits;
  for (OpeningCredits = 0; OpeningCredits < arr.length; OpeningCredits++) {
    if (arr[OpeningCredits].fields.OpeningCredits === true) {
      keywordArray.push("OpeningCredits");
    }
  }
  var Packaging;
  for (KeyArt = 0; Packaging < arr.length; Packaging++) {
    if (arr[Packaging].fields.Packaging === true) {
      keywordArray.push("Packaging");
    }
  }
  var CustomType;
  for (CustomType = 0; CustomType < arr.length; CustomType++) {
    if (arr[CustomType].fields.CustomType === true) {
      keywordArray.push("CustomType");
    }
  }
  var Digital;
  for (Digital = 0; Digital < arr.length; Digital++) {
    if (arr[Digital].fields.Digital === true) {
      keywordArray.push("Digital");
    }
  }
  var Apparel;
  for (Apparel = 0; Apparel < arr.length; Apparel++) {
    if (arr[Apparel].fields.Apparel === true) {
      keywordArray.push("Apparel");
    }
  }
  var OutOfHome;
  for (OutOfHome = 0; OutOfHome < arr.length; OutOfHome++) {
    if (arr[OutOfHome].fields.OutOfHome === true) {
      keywordArray.push("OutOfHome");
    }
  }
  var BookDesign;
  for (BookDesign = 0; BookDesign < arr.length; BookDesign++) {
    if (arr[BookDesign].fields.BookDesign === true) {
      keywordArray.push("BookDesign");
    }
  }
  var Design;
  for (Design = 0; Design < arr.length; Design++) {
    if (arr[Design].fields.Design === true) {
      keywordArray.push("Design");
    }
  }
  var PhotoArtDirection;
  for (
    PhotoArtDirection = 0;
    PhotoArtDirection < arr.length;
    PhotoArtDirection++
  ) {
    if (arr[PhotoArtDirection].fields.PhotoArtDirection === true) {
      keywordArray.push("PhotoArtDirection");
    }
  }
  var Retouching;
  for (Retouching = 0; Retouching < arr.length; Retouching++) {
    if (arr[Retouching].fields.Retouching === true) {
      keywordArray.push("Retouching");
    }
  }
  var Copy;
  for (Copy = 0; Copy < arr.length; Copy++) {
    if (arr[Copy].fields.Copy === true) {
      keywordArray.push("Copy");
    }
  }
  var MotionGFX;
  for (MotionGFX = 0; MotionGFX < arr.length; MotionGFX++) {
    if (arr[MotionGFX].fields.MotionGFX === true) {
      keywordArray.push("MotionGFX");
    }
  }
  var Logo;
  for (Logo = 0; Logo < arr.length; Logo++) {
    if (arr[Logo].fields.Logo === true) {
      keywordArray.push("Logo");
    }
  }
  var BsidesPage;
  for (BsidesPage = 0; BsidesPage < arr.length; BsidesPage++) {
    if (arr[BsidesPage].fields.BsidesPage === true) {
      keywordArray.push("BsidesPage");
    }
  }

  // console.log(keywordArray);

  let uniqueChars = keywordArray.filter((c, index) => {
    return keywordArray.indexOf(c) === index;
  });

  // console.log(uniqueChars);

  // if (keywordArray.includes("Branding")) {
  //   console.log("Yeaaah we got branding");
  //   return thisBranding=true
  // }
  // if (keywordArray.includes("keyart")) {
  //   console.log("AND Keyart");
  // }

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
                      keywordsArray={uniqueChars}
                      projectname={project.fields.projectname}
                      // name={project.fields.name}
                      client={project.fields.client}
                      description={project.fields.description}
                      descriptionTwo={project.fields.descriptionTwo}
                      // keyart={project.fields.keyart}
                      // Logo={project.fields.Logo}
                      // Branding={project.fields.Branding}
                      // BookDesign={project.fields.BookDesign}
                      // OutOfHome={project.fields.OutOfHome}
                      // Apparel={project.fields.Apparel}
                      // Digital={project.fields.Digital}
                      // CustomType={project.fields.CustomType}
                      // MotionGFX={project.fields.MotionGFX}
                      // OpeningCredits={project.fields.OpeningCredits}
                      // Packaging={project.fields.Packaging}
                      // Copy={project.fields.Copy}
                      // Retouching={project.fields.Retouching}
                      // PhotoArtDirection={project.fields.PhotoArtDirection}
                      // BsidesPage={project.fields.BsidesPage}
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
