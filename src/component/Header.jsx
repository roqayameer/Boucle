import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DataContext } from "./Datarovider";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { IoIosLogIn } from "react-icons/io";
import Prodect from "./Prodect";
import Aboutas from "./Aboutas";

export default function () {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  // const [cart] = value.cart;
  const [carts] = value.carts;
  const toggleMeenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={toggleMeenu}>
        <AiOutlineMenu />
      </div>
      <div className="logo">
        <h1>
          <Link
            to="/Prodect"
            style={{
              color: "rgb(226, 116, 33)",
              "font-size": "larger",
              "font-family": "Elsie",
            }}
          >
            Bouclé
          </Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">
            <AiOutlineHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/Login">
            {" "}
            <AiOutlineShoppingCart />
            Shop
          </Link>
        </li>
        <li>
          <Link to="/Aboutas"><AiOutlineContacts /> About</Link>
        </li>
       
        <li>
          <Link to="/Login">
            <IoIosLogIn />
            Login
          </Link>
        </li>
        <li onClick={toggleMeenu} className="close" >
          <AiOutlineClose  />
        </li>
      </ul>

      <div className="cart-icon">
        <span>{carts.length}</span>
        <Link to="/Cart"  style={{"font-size": "x-large"}}>
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
}
