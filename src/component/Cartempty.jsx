import React from "react";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Cartempty() {
  return (
    <div
      className="cart one"
      style={{
        boxShadow: "none",
        border: "none",
        "align-items": "center",
        height: "auto",
        "flex-direction": "column",
      }}
    >
      <p style={{ "font-size": "170px" }}>
        <BsCartX />
      </p>
      <p style={{ "font-size": "xx-large" }}>Oh no!</p>
      <p style={{ "font-size": "xx-large" }}>your cart is empty</p>
      <p
        style={{
          "font-size": "large",
          "margin-bottom": "7%",
          "margin-top": "4%",
        }}
      >
        {" "}
        <Link to="/Prodect">
        Go to shop
        </Link>
       
      </p>
    </div>
  );
}
