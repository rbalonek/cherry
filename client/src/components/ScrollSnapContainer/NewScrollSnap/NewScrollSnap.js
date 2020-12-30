import React from "react";
import Slider from "../../../slider/Slider";
import Header from "../../header/Header";
import "./NewScrollSnap.css";

import Project from "../../project/Project";
import ChiOne from "../../../assets/chi/chi-carousel-1.jpg";
import ChiTwo from "../../../assets/chi/chi-carousel-2.jpg";
import Common from "../../../assets/theCommon/Common-01.jpg";
import Shameless from "../../../assets/shameless/Portfolio-2019-FILMTV+281.jpg";
import Affair from "../../../assets/theAffair/TheAffair-S1PressKit-01.jpg";
import ClickableSlider from "../../../slider/ClickableSlider/ClickableSlider";
import Billions from "../../../assets/billions/1st-carousel-Portfolio-2018-FILMTV174.jpg";
import BillionsTwo from "../../../assets/billions/onClick-Portfolio-2018-FILMTV179.jpg";
import commonx from "../../../assets/commonx/CommonX-01.gif";
import StickyHeader from "../../StickyHeader/StickyHeader";

export default function NewScrollSnap() {
  return (
    <div className="new-scrollsnap-container">
      <div id="header" className="new-header-container">
        <Header />
      </div>
      <StickyHeader></StickyHeader>
      <div id="chi" className="sticky-section">
        <Slider
          img1={ChiOne}
          img2={ChiTwo}
          scrollToUp={"header"}
          scrollToDown={"common"}
        />
      </div>
      <div id="common" className="sticky-section">
        <Project img={Common} scrollToUp={"chi"} scrollToDown={"shameless"} />
      </div>
      <div id="shameless" className="sticky-section">
        <Project
          img={Shameless}
          scrollToUp={"common"}
          scrollToDown={"affair"}
        />
      </div>
      <div id="affair" className="sticky-section">
        <Project
          img={Affair}
          scrollToUp={"shameless"}
          scrollToDown={"billions"}
        />
      </div>
      <div id="billions" className="sticky-section">
        <ClickableSlider
          scrollToUp={"affair"}
          scrollToDown={"commonx"}
          img1={Billions}
          img2={BillionsTwo}
          name={"BILLIONS"}
          season={"SEASON 2"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
      <div id="commonx" className="sticky-section-last">
        <Project
          img={commonx}
          scrollToUp={"billions"}
          scrollToDown={"billions"}
        />
      </div>
    </div>
  );
}
