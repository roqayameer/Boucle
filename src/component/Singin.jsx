import React,{useState} from "react";
import { useNavigate }  from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Singin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [phone,setPhone] = useState("");
  const history = useNavigate();
  // const [phone,setPhone] = useState("");

  async  function singin(){
    let item= {username,password,homeaddress,phone};
    console.warn(item);
    let resalt = await fetch("http://localhost:3000/api/Singin",{
      method: "POST",
      body:JSON.stringify(item),
      headers:{"Content-Type":"application/json",
    "Accept":"application/json",},

    })
    resalt =await resalt.JSON;
    // console.warn("resalt",resalt)
    localStorage.setItem("user-info", JSON. stringify(resalt))
    history('/add');
  }
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
            onChange={(e)=>setUsername(e.target.value)}
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
            onChange={(e)=> setPassword(e.target.value)}
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
          <AiOutlinePhone />
          <input
           value={phone}
            id="phone"
            type="tel"
            name="phone"
            placeholder="ُEnter PhoneNumber"
            required
            onChange={(e)=> setPhone(e.target.value)}
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
            onChange={(e)=>setHomeaddress(e.target.value)}
          />
        </div>
        <label style={{ "margin-right": "100px", "font-size": "small" }}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> I
          agree with Terms and Privacey
        </label>
        <Link to="/Login">
        <input onClick={singin} className="btn" type="button" name="" value="Create account" />
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