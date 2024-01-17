import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { login } from "../../data/script";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  login();
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
      navigate("/", { replace: true });
    }
  };
  const handleChange = (e) => {
    const formdata = e.target.value;
    setData(() => ({
      ...data,
      [e.target.name]: formdata,
    }));
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
