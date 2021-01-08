import React from "react";
import Logo from "../../../assets/logo/Cherry-Logo.png";
import { useHistory } from "react-router-dom";
export default function ProjectsStickyHeader() {
  const history = useHistory();
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <img
        onClick={() => history.push("/")}
        style={{ width: "150px" }}
        src={Logo}
        alt="logo"
      />
    </div>
  );
}
