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
      <div className="new-header-container">
        <Header />
      </div>
      <StickyHeader></StickyHeader>
      <div className="sticky-section">
        <Slider img1={ChiOne} img2={ChiTwo} />
      </div>
      <div className="sticky-section">
        <Project img={Common} />
      </div>
      <div className="sticky-section">
        <Project img={Shameless} />
      </div>
      <div className="sticky-section">
        <Project img={Affair} />
      </div>
      <div className="sticky-section">
        <ClickableSlider
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
      <div className="sticky-section-last">
        <Project img={commonx} />
      </div>
    </div>
  );
}
