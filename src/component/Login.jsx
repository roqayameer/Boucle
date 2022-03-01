import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  {
    /*axios
      .post("https://compute-django.herokuapp.com/api/auth/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        let token = response.data.token.access;
        let data = response.data;
        localStorage.setItem("token", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });*/
  }
  const login = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    console.log("hey data!", data);

    var config = {
      method: "post",
      url: "https://compute-django.herokuapp.com/api/auth/signin",
      headers: {
        Accept: "application/json",
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      withCredentials: false,
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response);
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
            required
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            "font-size": "small",
            "justify-content": "space-around",
            "margin-top": "17px",
          }}
        >
          <label>
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
