import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://compute-django.herokuapp.com/api/auth/signin", {
        email: email,
        password: password,
      })
      .than((response) => {
        console.log(response);
      })
      .catsh((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {" "}
      <div id="login">
        <h1 id="logo">Login</h1>

        <div className="textbox">
          <AiOutlineUser />
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            pattern=".+@globex\.com"
            name="uname"
            required
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div className="textbox">
          <RiLockPasswordLine />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            name="psw"
            required
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", "font-size": "small" }}>
          <label style={{ "margin-right": "97px" }}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />{" "}
            Remember me
          </label>
          <span className="psw">Forgot password?</span>
        </div>
        <Link to="/Prodect">
          <input
            className="btn"
            type="button"
            name=""
            value="Login"
            onClick={login}
          />
        </Link>
        <div className="container">
          <span className="psw">
            {" "}
            Donet have an account?
            <Link className="link" to="/Singin">
              Create account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
