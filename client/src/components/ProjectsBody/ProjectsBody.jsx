import React from "react";
import "./ProjectsBody.css";

import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
import ChiOne from "../../assets/chi/chi-carousel-1.jpg";
import ChiTwo from "../../assets/chi/chi-carousel-2.jpg";
import Common from "../../assets/theCommon/Common-01.jpg";
import Shameless from "../../assets/shameless/Portfolio-2019-FILMTV+281.jpg";
import Affair from "../../assets/theAffair/TheAffair-S1PressKit-01.jpg";
import Billions from "../../assets/billions/1st-carousel-Portfolio-2018-FILMTV174.jpg";
import BillionsTwo from "../../assets/billions/onClick-Portfolio-2018-FILMTV179.jpg";
import commonx from "../../assets/commonx/CommonX-01.gif";

export default function ProjectsBody() {
  return (
    <div>
      <div id="chi" className="non-sticky-section">
        <ClickableSlider
          scrollToUp={"header"}
          scrollToDown={"common"}
          img1={ChiOne}
          img2={ChiTwo}
          name={"Chi"}
          season={"SEASON 2"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
      <div id="common" className="non-sticky-section">
        <ClickableSlider
          scrollToUp={"chi"}
          scrollToDown={"shameless"}
          img1={Common}
          img2={Common}
          name={"Common"}
          season={"SEASON 2"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
      <div id="shameless" className="non-sticky-section">
        <ClickableSlider
          scrollToUp={"common"}
          scrollToDown={"affair"}
          img1={Shameless}
          img2={Shameless}
          name={"Shameless"}
          season={"SEASON 2"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
      <div id="affair" className="non-sticky-section">
        <ClickableSlider
          scrollToUp={"shameless"}
          scrollToDown={"billions"}
          img1={Affair}
          img2={Affair}
          name={"AFFAIR"}
          season={"SEASON 2"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
      <div id="billions" className="non-sticky-section">
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
        <ClickableSlider
          scrollToUp={"billions"}
          scrollToDown={"billions"}
          img1={commonx}
          img2={commonx}
          name={"COMMON X"}
          season={"SEASON 1"}
          client={"Showtime"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
    </div>
  );
}
