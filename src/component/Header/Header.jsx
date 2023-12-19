import React from "react";
import { FaCcMastercard } from "react-icons/fa";
import Headerlogo from "./Header.logo";
import Headernav from "./Header.nav";
import Headernotification from "./Header.notification";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px 20px",
      }}
    >
      <Headerlogo />
      <Headernav />
      <Headernotification />
    </header>
  );
}

export default Header;
