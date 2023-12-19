import React from "react";
import Featurescontainer from "./Features.container";
import Button from "./Button";
import Logout from "./Logout";

const Main = () => {
  let loggin = true;
  const handle = () => {
    if (loggin) {
      loggin = false;
    } else {
      loggin = true;
    }
    console.log(loggin);
  };
  return (
    <div>
      {/* Categories  */}
      <Featurescontainer />
      {/* {true && <Button />} */}
      {/* {false && <Button />} */}
      {loggin ? <Logout /> : <Button />}
      <br />
      <button onClick={handle}>Change</button>
    </div>
  );
};

export default Main;
