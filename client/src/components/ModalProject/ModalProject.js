import React from "react";
import "./ModalProject.css";

export default function ModalProject(props) {
  return (
    <div className="modal-container clickable-modal">
      <div className="bold-container">
        <h2 className="bold-text">Client</h2>
        <h2 className="bold-text">Project</h2>
        <h2 className="bold-text">Information</h2>
      </div>
      <div className="props-container">
        <p className="modal-text client-name">{props.client}</p>
        <p className="modal-text project-name">{props.name}</p>
        <div className="description-text-container">
          <p className="description-text"> {props.description} </p>
          <br />
          <p className="description-text"> {props.descriptionTwo} </p>
        </div>
      </div>
    </div>
  );
}
