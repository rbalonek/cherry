import React from "react";
import "./ModalProject.css";
import { useHistory } from "react-router-dom";

export default function ModalProject(props) {
  const Name = props.name;
  const Client = props.client;

  // console.log(props);

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
        <h2 className="bold-text">WHAT WE DID</h2>
        <div className="what-did-container">
          <div className="what-did-left">
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
                onClick={() => {
                  history.push("/keyart");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Key Art
              </p>
            )}

            {props.Branding === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/branding");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Branding
              </p>
            )}

            {props.BookDesign === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Book Design
              </p>
            )}

            {props.OutOfHome === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Out of Home
              </p>
            )}

            {props.Apparel === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Apparel
              </p>
            )}

            {props.Digital === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Digital
              </p>
            )}
          </div>

          <div className="what-did-right">
            {props.CustomType === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Custom Type
              </p>
            )}

            {props.MotionGFX === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Motion GFX
              </p>
            )}

            {props.OpeningCredits === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Opening Credits
              </p>
            )}

            {props.Packaging === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Packaging
              </p>
            )}

            {props.PhotoArtDirection === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Photo Art Direction
              </p>
            )}

            {props.Copy === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Copy
              </p>
            )}

            {props.Retouching === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/design");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Retouching
              </p>
            )}

            {props.BsidesPage === true && (
              <p
                className="modal-text project-keywords"
                onClick={() => {
                  history.push("/bsides");
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  });
                }}
              >
                Unused Concepts
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
