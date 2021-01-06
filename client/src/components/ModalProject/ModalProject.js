import React from "react";
import "./ModalProject.css";

export default function ModalProject(props) {
  return (
    <div className="modal-container clickable-modal">
      <div className="modal-project-text-container">
        <h2 className="bold-text">CLIENT</h2>
        <p className="modal-text client-name">{props.client}</p>
        <h2 className="bold-text">CHALLENGE</h2>
        <div className="description-text-container">
          <p className="description-text"> {props.description} </p>

          <p className="description-text"> {props.descriptionTwo} </p>
        </div>
        <div className="what-did-container">
          <h2 className="bold-text">WHAT WE DID</h2>
          <p className="modal-text project-keywords">{props.keyart}</p>
          <p className="modal-text project-keywords">{props.identity}</p>
          <p className="modal-text project-keywords">{props.motiongfx}</p>
          <p className="modal-text project-keywords">{props.copy}</p>
          <p className="modal-text project-keywords">{props.retouching}</p>
          <p className="modal-text project-keywords">
            {props.photoartdirection}
          </p>
        </div>
      </div>
    </div>
  );
}

// <div className="bold-container">
//         <h2 className="bold-text">CLIENT</h2>
//         <h2 className="bold-text">CHALLENGE</h2>
//         <h2 className="bold-text">WHAT WE DID</h2>
//       </div>
//       <div className="props-container">
//         <p className="modal-text client-name">{props.client}</p>
//         <p className="modal-text project-name">{props.name}</p>
//         <div className="description-text-container">
//           <p className="description-text"> {props.description} </p>
//           <br />
//           <p className="description-text"> {props.descriptionTwo} </p>
//         </div>
//       </div>
