import React from "react";
import "./ModalProjectProjName.css";
import { useHistory } from "react-router-dom";

export default function ModalProjectProjName(props) {
  const Name = props.name;
  const Client = props.client;
  const history = useHistory();

  return (
    <div className="modal-container-proj-name clickable-modal-proj-name">
      <div className="modal-project-text-container-proj-name">
        <h2 className="show-name-modal-proj-name upper-case-proj-name">
          {Name}
        </h2>
        <p className="modal-text-proj-name client-name-proj-name upper-case-proj-name">
          {Client}
        </p>

        <div className="description-text-container-proj-name">
          <p className="description-text-proj-name"> {props.description} </p>

          <p className="description-text-proj-name"> {props.descriptionTwo} </p>
        </div>
        <div className="what-did-container-proj-name">
          <h2 className="bold-text-proj-name">WHAT WE DID</h2>

          {props.Logo === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/branding")}
            >
              Logos
            </p>
          )}

          {props.keyart === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/keyart")}
            >
              Key Art
            </p>
          )}

          {props.Branding === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/branding")}
            >
              Branding
            </p>
          )}

          {props.BookDesign === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Book Design
            </p>
          )}

          {props.OutOfHome === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Out of Home
            </p>
          )}

          {props.Apparel === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Apparel
            </p>
          )}

          {props.Digital === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Digital
            </p>
          )}

          {props.CustomType === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Custom Type
            </p>
          )}

          {props.MotionGFX === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Motion GFX
            </p>
          )}

          {props.OpeningCredits === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Opening Credits
            </p>
          )}

          {props.Packaging === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Packaging
            </p>
          )}

          {props.PhotoArtDirection === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Photo Art Direction
            </p>
          )}

          {props.Copy === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Copy
            </p>
          )}

          {props.Retouching === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
              onClick={() => history.push("/design")}
            >
              Retouching
            </p>
          )}

          {props.BsidesPage === true && (
            <p
              className="modal-text-proj-name project-keywords-proj-name"
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
