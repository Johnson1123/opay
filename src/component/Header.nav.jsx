import React from "react";
import "./header.nav.css";

import { CgSmartHomeHeat } from "react-icons/cg";
import { FaGift } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
function Headernav() {
  return (
    <nav className="header-nav">
      <li className="">
        <CgSmartHomeHeat />
        <a href="">Home</a>
      </li>
      <li>
        <FaGift />
        <a href="">Rewards</a>
      </li>
      <li>
        <FaChartLine />
        <a href="">Finance</a>
      </li>
      <li>
        <CiCreditCard1 />
        <a href="">Card</a>
      </li>
      <li>
        <CgProfile />
        <a href="">Me</a>
      </li>
    </nav>
  );
}

export default Headernav;
