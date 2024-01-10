import React, { useState } from "react";
import Featurescontainer from "./Features.container";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
// import Button from "./Button";
// import Logout from "./Logout";

const Main = () => {
  let [count, setCount] = useState(1);

  // const handleCount = () => {
  //   setCount(() => count + 1);
  //   console.log(count);
  // };

  return (
    // <div>
    //   Categories
    //   <Featurescontainer />
    //   {true && <Button />}
    //   {false && <Button />}
    //   {login ? <Logout /> : <Button />}
    //   <p>{count}</p>
    //   {login ? <Logout /> : <Login />}
    //   <button onClick={handle}>Change</button>
    // </div>
    <p className="">Home Page</p>
  );
};

export default Main;
