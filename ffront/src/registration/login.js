import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./css/register.css";
import Headersection from "../navbar/navbar";
import { AuthContext } from "../contexts/authContext";
function Login() {
  const Navigate = useNavigate();
  const [values, setvalues] = useState({
    user_name: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const handleinput = (e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // axios to the data base and get the id the put it in the localStorage
    // Navigate("/");
    // localStorage.setItem("id",1);
    // localStorage.setItem("type","representative");

    axios
      .post("http://localhost:8080/auth/login", values, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("id", res.data.user.uid);
        localStorage.setItem("type",res.data.user.type);
        console.log(res.data.user.uid);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
        let error;
        let message;
        Array.isArray(err.response.data)
          ? ({ message } = err.response.data[0])
          : ({ error } = err.response.data);
        error ? seterror(error) : seterror(message);
      });
  };
  return (
    <body className="forloggin">
      <div class="login-box">
        <div class="login-header">
          <header>Login</header>
        </div>
        <div class="input-box">
          <input
            type="text"
            name="user_name"
            id="email"
            className="input-field"
            onChange={handleinput}
            placeholder="username:"
          ></input>
        </div>
        <div class="input-box">
          <input
            type="password"
            className="input-field"
            name="password"
            id="password"
            onChange={handleinput}
            placeholder="password:"
          ></input>
        </div>
        <div class="forgot">
          <section>
            <input type="checkbox" id="check"></input>
            <label for="check">Remember me</label>
          </section>
          <section>
            <a href="#">Forgot password</a>
          </section>
        </div>
        <div class="input-submit">
          <button
            type="submit"
            className="submit-btn"
            id="submit"
            onClick={handlesubmit}
          ></button>
          <label for="submit">Sign In</label>
        </div>
        <div class="sign-up-link">
          <p>
            Don't have account?
            <Link to="/register" className="link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </body>
  );
}

export default Login;
