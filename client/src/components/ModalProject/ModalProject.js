import React from "react";
import "./ModalProject.css";

export default function ModalProject(props) {
  return (
    <div className="modal-container clickable-modal">
      <div className="modal-text-container">
        <div className="client-container">
          <h2 className="modal-text client">CLIENT</h2>
          <p className="modal-text client-name">{props.client}</p>
        </div>

        <div className="project-container">
          <h2 className="modal-text project">Project</h2>
          <p className="modal-text project-name">{props.name}</p>
        </div>

        <div className="proj-description">
          <h2 className="modal-text information">Information</h2>
          <p className="description-text"> {props.description} </p>
        </div>
      </div>
    </div>
  );
}
