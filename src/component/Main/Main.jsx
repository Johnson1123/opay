import React, { useState } from "react";
import Featurescontainer from "./Features.container";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
// import Button from "./Button";
// import Logout from "./Logout";

const Main = () => {
  let [count, setCount] = useState(1);
  const [login, setLogin] = useState(true);
  const [hide, setHide] = useState(true);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handle = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
    console.log(login);
  };
  // const handleCount = () => {
  //   setCount(() => count + 1);
  //   console.log(count);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email.includes("@")) {
      console.log("Invalid Email");
    } else if (data.email == "" || data.password == "") {
      console.log("Invalid credential");
    } else {
      console.log("u have loggin");
    }
  };
  const handleChange = (e) => {
    const formdata = e.target.value;
    setData(() => ({
      ...data,
      [e.target.name]: formdata,
    }));
    console.log(data);
  };
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
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={handleChange} />
      <div className="">
        <input
          type={hide ? "password" : "text"}
          name="password"
          onChange={handleChange}
        />
        <span>
          {hide ? (
            <FiEye onClick={() => setHide(!hide)} />
          ) : (
            <FaRegEyeSlash onClick={() => setHide(!hide)} />
          )}
        </span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

function Login() {
  return <button>Login</button>;
}

function Logout() {
  return <button>Logout</button>;
}

export default Main;
