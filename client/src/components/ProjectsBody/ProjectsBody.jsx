import React from "react";
import "./ProjectsBody.css";
import zenscroll from "zenscroll";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isSafari,
} from "react-device-detect";
import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";

export default function ProjectsBody(props) {
  let pageHeight = window.innerHeight;
  // var up = document.getElementById({project.fields.scrollToUp});
  // var scrollingDown = document.getElementById(`#${props.scrollToDown}`);
  let common = document.getElementById("common");
  const ScrollUp100Vh = () => {
    // zenscroll.toY(window.innerHeight * props.scrollToUp);
    // zenscroll.toY(pageHeight);
    zenscroll.intoView(common);
    // zenscroll.to(up);
    // window.scrollBy(0, pageHeight);
    // console.log("up");
  };

  const ScrollDown100Vh = () => {
    zenscroll.toY(pageHeight);
    // zenscroll.intoView(chi);
    // zenscroll.to(scrollingDown);
    // window.scrollBy(0, pageHeight);
    // console.log("down");
  };

  return (
    <>
      {isSafari ? (
        <div className="scroll-snap-container-safari">
          {props.highlightedProjects.map((project) => (
            <div id={project.fields.idname} className="non-sticky-section">
              <ClickableSlider
                handleClick={props.handleClick}
                handleClickHamburger={props.handleClickHamburger}
                scrollToUp={project.fields.scrollUp}
                scrollToDown={project.fields.scrollDown}
                img1={project.fields.img1}
                img2={project.fields.img2}
                img3={project.fields.img3}
                img4={project.fields.img4}
                cellimg1={project.fields.cellimg1}
                cellimg2={project.fields.cellimg2}
                cellimg3={project.fields.cellimg3}
                cellimg4={project.fields.cellimg4}
                name={project.fields.name}
                client={project.fields.client}
                description={project.fields.description}
                descriptionTwo={project.fields.descriptionTwo}
                keyart={project.fields.keyart}
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
                PrevSlide={project.fields.PrevSlide}
                NextSlide={project.fields.NextSlide}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="scroll-snap-container">
          {props.highlightedProjects.map((project) => (
            <div id={project.fields.idname} className="non-sticky-section">
              <ClickableSlider
                handleClick={props.handleClick}
                handleClickHamburger={props.handleClickHamburger}
                scrollToUp={project.fields.scrollUp}
                scrollToDown={project.fields.scrollDown}
                img1={project.fields.img1}
                img2={project.fields.img2}
                img3={project.fields.img3}
                img4={project.fields.img4}
                cellimg1={project.fields.cellimg1}
                cellimg2={project.fields.cellimg2}
                cellimg3={project.fields.cellimg3}
                cellimg4={project.fields.cellimg4}
                name={project.fields.name}
                client={project.fields.client}
                description={project.fields.description}
                descriptionTwo={project.fields.descriptionTwo}
                keyart={project.fields.keyart}
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
                PrevSlide={project.fields.PrevSlide}
                NextSlide={project.fields.NextSlide}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
