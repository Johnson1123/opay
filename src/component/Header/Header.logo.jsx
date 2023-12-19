import React from "react";
import { FaReact } from "react-icons/fa6";
import opayLogo from "../../assets/opay.png";

function Headerlogo() {
  const logoName = "Opay";
  const pointer = "pointer";
  const container = {
    cursor: pointer,
  };
  const logoStyle = {
    height: "50px",
    width: "150px",
    objectFit: "cover",
  };
  return (
    <div style={container}>
      <a
        href=""
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          gap: "5px",
          height: "50px",
        }}
      >
        {/* <span>
          <FaReact />
        </span>
        {logoName} */}
        <img src={opayLogo} style={logoStyle} />
      </a>
    </div>
  );
}

export default Headerlogo;
