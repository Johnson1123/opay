import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

export default function Login() {
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
    <div>
      {" "}
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
    </div>
  );
}
