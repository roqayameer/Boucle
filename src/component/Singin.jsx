import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
// import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
// import { IoIosLogIn } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Singin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, setPhone] = useState("");

  const singin = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "https://compute-django.herokuapp.com/api/auth/signup",
    //     {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     JSON.stringify({
    //       username: username,
    //       password: password,
    //       homeaddress: homeaddress,
    //       email: email,
    //       phone: phone,
    //     })
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     // let token = response.data.token.access;
    //     // let data = response.data;
    //     // localStorage.setItem("token", JSON.stringify(data));
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
    var data = JSON.stringify({
      username:username,
      address1:homeaddress,
      password1: password,
      password2: password,
      phone_number: phone,
      email: email,
    });

    console.log("hey data!", data)

    var config = {
      method: "post",
      url: "https://compute-django.herokuapp.com/api/api/auth/signup",
      headers: {
        Accept: "application/json",
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
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
      <div id="login">
        <h1 id="logo">SingUP</h1>

        <div className="textbox">
          <AiOutlineUser />
          <input
            value={username}
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="textbox">
          <RiLockPasswordLine />
          <input
            value={password}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="textbox">
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="Enter Confirm password"
            name="psw"
            required
          />
        </div>
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
          <AiOutlinePhone />
          <input
            value={phone}
            id="phone"
            type="tel"
            name="phone"
            placeholder="ُEnter PhoneNumber"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="textbox">
          <AiOutlineHome />
          <input
            value={homeaddress}
            type="text"
            placeholder="Enter Home address"
            name="Home address"
            required
            onChange={(e) => setHomeaddress(e.target.value)}
          />
        </div>
        <label style={{ "font-size": "small" }}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> I
          agree with Terms and Privacey
        </label>
        <Link to="/Login">
          <input
            onClick={singin}
            className="btn"
            type="button"
            name=""
            value="Create account"
          />
        </Link>
        <div className="container">
          <span className="psw">
            {" "}
            Already have an account?
            <Link className="link" to="/Login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
