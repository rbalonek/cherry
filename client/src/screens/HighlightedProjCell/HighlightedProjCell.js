import React from "react";
import "./HighlightedProjCell.css";
import { Carousel } from "react-responsive-carousel";
import { Animated } from "react-animated-css";
import ClickableSliderCell from "../../slider/ClickableSlider/ClickableSliderCell/ClickableSliderCell";

export default function HighlightedProjCell(props) {
  
  let projName = window.location.pathname;
  let n = 11;
  projName = projName.substring(n);
  // console.log(projName);

  const arr = [];
  props.highlightedProjects.map(
    (project) => project.fields.idname === projName && arr.push(project)
  );
  console.log(arr);

  return (
    <div>
      {props.arr.map((project) => (
        
      ))}
    </div>
  );
}
