import React from "react";

export default function CellTextBlock() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        alignItems: "center",
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
        We're an art & design studio specializing in branding for film and
        television.
      </p>
    </div>
  );
}
