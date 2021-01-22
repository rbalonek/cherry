import React, { useState, useEffect } from "react";
import "./ProjectsBody.css";
import axios from "axios";
import zenscroll from "zenscroll";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isSafari,
} from "react-device-detect";
// import LogoSticky from "../StickyHeader/LogoSticky.js";
import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";
import NewHeader from "../header/NewHeader/NewHeader";

export default function ProjectsBody(props) {
  const [fetchFullScreenProjects, invokeFetch] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appVey7bH2bLRXZsC/HighlightedProjects?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      invokeFetch(data.data.records);
      // console.log(fetchFullScreenProjects);
    };
    apiCall();
  }, [invokeFetch]);

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
          {fetchFullScreenProjects.map((project) => (
            <div id={project.fields.idname} className="non-sticky-section">
              {isBrowser ? (
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
                />
              ) : (
                <div>
                  <ClickableSliderCell
                    scrollToUp={project.fields.scrollUp}
                    scrollToDown={project.fields.scrollDown}
                    img1={project.fields.cellimg1}
                    img2={project.fields.cellimg2}
                    img3={project.fields.cellimg3}
                    img4={project.fields.cellimg4}
                    name={project.fields.name}
                    season={project.fields.season}
                    client={project.fields.client}
                    description={project.fields.description}
                    descriptionTwo={project.fields.descriptionTwo}
                    keyart={project.fields.keyart}
                    identity={project.fields.identity}
                    motiongfx={project.fields.motiongfx}
                    copy={project.fields.copy}
                    retouching={project.fields.retouching}
                    photoartdirection={project.fields.photoartdirection}
                    PrevSlide={project.fields.PrevSlide}
                    NextSlide={project.fields.NextSlide}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="scroll-snap-container">
          {fetchFullScreenProjects.map((project) => (
            <div id={project.fields.idname} className="non-sticky-section">
              {isBrowser ? (
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
                />
              ) : (
                <div>
                  <ClickableSliderCell
                    scrollToUp={project.fields.scrollUp}
                    scrollToDown={project.fields.scrollDown}
                    img1={project.fields.cellimg1}
                    img2={project.fields.cellimg2}
                    img3={project.fields.cellimg3}
                    img4={project.fields.cellimg4}
                    name={project.fields.name}
                    season={project.fields.season}
                    client={project.fields.client}
                    description={project.fields.description}
                    descriptionTwo={project.fields.descriptionTwo}
                    keyart={project.fields.keyart}
                    identity={project.fields.identity}
                    motiongfx={project.fields.motiongfx}
                    copy={project.fields.copy}
                    retouching={project.fields.retouching}
                    photoartdirection={project.fields.photoartdirection}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
