import React from "react";
import "./CellTextBlock.css";
import { FiChevronDown } from "react-icons/fi";
import zenscroll from "zenscroll";

export default function CellTextBlock(props) {
  // let pageHeight = window.innerHeight;

  const DownArrowCell = () => {
    zenscroll.center(document.getElementById("chi"));
    // let pageHeight = window.innerHeight;
    // zenscroll.toY(pageHeight * 2.4);
  };

  return (
    <div id="cell-text-block" className="cell-text-block-container">
      <p className="cell-text-block-text">
        {props.headerText.length ? (
          <p>{props.headerText[0].fields.cellBlurb}</p>
        ) : (
          <>
            <p>
              We're an art & design studio specializing in branding for film &
              television.
            </p>
          </>
        )}
      </p>

      <div className="cell-down-arrow-container" onClick={DownArrowCell}>
        <FiChevronDown
          className="cell-down-arrow"
          color="white"
          opacity=".5"
          alt="cell-down"
        />
      </div>
    </div>
  );
}
