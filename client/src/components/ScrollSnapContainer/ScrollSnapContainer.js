import React from "react";
import "./ScrollSnapContainer.css";

import Header from "../header/Header";
import Project from "../project/Project";
import Chi from "../../assets/chi/chi-carousel-1.jpg";
import Shameless from "../../assets/shameless/Portfolio-2019-FILMTV+281.jpg";
import Affair from "../../assets/theAffair/TheAffair-S1PressKit-01.jpg";
import Common from "../../assets/theCommon/Common-01.jpg";
import Billions from "../../assets/billions/1st-carousel-Portfolio-2018-FILMTV174.jpg";

// Chi(carousel), Common, Shameless, Affair, Billions (carousel), gif

export default function ScrollSnapTry() {
  return (
    <div class="scroll-container">
      <section className="fullscreen">
        <Header />
      </section>
      <section className="fullscreen">
        <Project img={Chi} />
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
        <Project img={Billions} />
      </section>
      <section className="fullscreen">
        <Project img={Shameless} />
      </section>
    </div>
  );
}
