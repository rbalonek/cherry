import React from "react";
// import ClickableSlider from "../../slider/ClickableSlider/ClickableSlider";

export default function ModalCarousel(props) {
  // console.log(props);
  console.log(props.Thisid);
  return (
    <div className="modal-carousel-container">
      <h1 style={{ color: "white", textAlign: "center" }}>Hi {props.Thisid}</h1>
    </div>
  );
}
// <img
// style={{ height: "200px", width: "200px" }}
// alt="blah"
// src={props.img1}
// />
// <img
// style={{ height: "200px", width: "200px" }}
// alt="blah2"
// src={props.img2}
// />
