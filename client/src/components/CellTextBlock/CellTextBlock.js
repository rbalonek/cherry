import React from "react";

export default function CellTextBlock(props) {
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
    </div>
  );
}
