import React from "react";
import "./NewHeader.css";

export default function NewHeader() {
  var Chi = document.getElementById("chi");

  return (
    <div className="new-header-container" onClick={() => Chi.scrollIntoView()}>
      <div className="new-header-text-container">
        <p className="new-header-text">
          In Option 2 the Cherry logo and hamburger only appear as the first
          project is visible. Note: The video is a little too ethereal but just
          to see how the color animation would work.
        </p>
      </div>
    </div>
  );
}
