import React from "react";
import "./ModalProject.css";
import { useHistory } from "react-router-dom";

export default function ModalProject(props) {
  const Name = props.name;
  const Client = props.client;

  console.log(props);

  const history = useHistory();
  return (
    <div className="modal-container clickable-modal">
      <div className="modal-project-text-container">
        <h2 className="show-name-modal upper-case">{Name}</h2>
        <p className="modal-text client-name upper-case">{Client}</p>

        <div className="description-text-container">
          <p className="description-text"> {props.description} </p>

          <p className="description-text"> {props.descriptionTwo} </p>
        </div>
        <div className="what-did-container">
          <h2 className="bold-text">WHAT WE DID</h2>

          {props.Logo === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/branding")}
            >
              Logos
            </p>
          )}

          {props.keyart === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/keyart")}
            >
              Key Art
            </p>
          )}

          {props.Branding === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/branding")}
            >
              Branding
            </p>
          )}

          {props.BookDesign === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Book Design
            </p>
          )}

          {props.OutOfHome === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Out of Home
            </p>
          )}

          {props.Apparel === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Apparel
            </p>
          )}

          {props.Digital === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Digital
            </p>
          )}

          {props.CustomType === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Custom Type
            </p>
          )}

          {props.MotionGFX === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Motion GFX
            </p>
          )}

          {props.OpeningCredits === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Opening Credits
            </p>
          )}

          {props.Packaging === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Packaging
            </p>
          )}

          {props.PhotoArtDirection === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Photo Art Direction
            </p>
          )}

          {props.Copy === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Copy
            </p>
          )}

          {props.Retouching === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/design")}
            >
              Retouching
            </p>
          )}

          {props.BsidesPage === true && (
            <p
              className="modal-text project-keywords"
              onClick={() => history.push("/bsides")}
            >
              Unused Concepts
            </p>
          )}
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
