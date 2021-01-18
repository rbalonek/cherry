import React from "react";
import { FiChevronDown } from "react-icons/fi";
import zenscroll from "zenscroll";

export default function CellTextBlock(props) {
  // let pageHeight = window.innerHeight;

  const DownArrowCell = () => {
    let pageHeight = window.innerHeight;
    zenscroll.toY(pageHeight * 2);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        alignItems: "center",
        scrollSnapAlign: "start",
      }}
    >
      <p
        style={{
          color: "white",
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          width: "100%",
          fontSize: "calc(15px + 1vw)",
          fontFamily: "deregular",
        }}
      >
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
