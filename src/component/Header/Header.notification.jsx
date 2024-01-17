import React from "react";
import { Link } from "react-router-dom";

function Headernotification() {
  return (
    <div>
      {/* <a href="/login">Login</a> */}
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Headernotification;
