import React from "react";
import "./ScrollSnapContainer.css";

import Header from "../header/Header";
import Project from "../project/Project";
import ChiOne from "../../assets/chi/chi-carousel-1.jpg";
import ChiTwo from "../../assets/chi/chi-carousel-2.jpg";
import Shameless from "../../assets/shameless/Portfolio-2019-FILMTV+281.jpg";
import Affair from "../../assets/theAffair/TheAffair-S1PressKit-01.jpg";
import Common from "../../assets/theCommon/Common-01.jpg";
import Billions from "../../assets/billions/1st-carousel-Portfolio-2018-FILMTV174.jpg";
import BillionsTwo from "../../assets/billions/onClick-Portfolio-2018-FILMTV179.jpg";
import Slider from "../../slider/Slider";
import commonx from "../../assets/commonx/CommonX-01.gif";
import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";
import StickyHeader from "../StickyHeader/StickyHeader";

// Chi(carousel), Common, Shameless, Affair, Billions (carousel), gif

export default function ScrollSnapTry() {
  return (
    <div class="scroll-container">
      <section className="fullscreen">
        <Header />
      </section>
      <StickyHeader></StickyHeader>
      <section id="sectionOne" className="fullscreen">
        <Slider img1={ChiOne} img2={ChiTwo} />
      </section>

      <section className="fullscreen">
        <Project img={Common} />
      </section>
      <section className="fullscreen">
        <Project img={Shameless} />
      </section>
      <section className="fullscreen">
        <Project img={Affair} />
      </section>
      <section className="fullscreen">
        <ClickableSlider img1={Billions} img2={BillionsTwo} />
      </section>
      <section className="fullscreen">
        <Project img={commonx} />
      </section>
    </div>
  );
}
