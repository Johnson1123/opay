import React from "react";
import Featuresicon from "./Features.icon";
import "./Feature.css";
import { BiUserPin } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { HiMiniChevronUpDown } from "react-icons/hi2";

function Featurescontainer() {
  const container = {
    padding: "10px",
    boxShadow: "2px, 20px red",
  };
  return (
    <div style={container} className="containerFeature">
      <Featuresicon title="To Opay" icon={BiUserPin} color="green" />
      <Featuresicon title="To Bank" icon={CiBank} color="red" />
      <Featuresicon title="Withdraw" icon={HiMiniChevronUpDown} color="green" />
    </div>
  );
}

export default Featurescontainer;
