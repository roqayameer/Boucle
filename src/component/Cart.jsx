import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Datarovider";
import Colors from "./Colors";
import { Link } from "react-router-dom";
// import Sizes from './Sizes'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Cartempty from "./Cartempty";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState(false);
  // const imgDiv = React.useRef();

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const toggleMeenu = () => {
    setMenu(!menu);
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      // <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
      <Cartempty />
    );

  return (
    <>
    <div  onClick={toggleMeenu}>
        <input type="text" />
      </div>
      {cart.map((products) => (
        <div className="details cart" key={products._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${products.images[0]})` }}
          />

          <div className="box-details">
            <h2 title={products.title}>{products.title}</h2>
            <h3>${products.price}</h3>
            <p>{products.description}</p>
            <div className="amount">
              <button
                className="count"
                onClick={() => reduction(products._id)}
                style={{
                  "font-size": "x-large",
                  color: "#e27421",
                  border: "none",
                }}
              >
                {" "}
                <AiOutlineMinusSquare />{" "}
              </button>
              <p style={{ "font-size": "large" }}>{products.count}</p>
              <button
                className="count"
                onClick={() => increase(products._id)}
                style={{
                  "font-size": "x-large",
                  color: "#e27421",
                  border: "none",
                }}
              >
                {" "}
                <AiOutlinePlusSquare />{" "}
              </button>
            </div>
            <div className="delete" onClick={() => removeProduct(products._id)}>
              <AiOutlineCloseSquare />
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <Link to="/Checkout" onClick={toggleMeenu} >Next</Link>
        <p
          style={{
            color: "#080808",
            padding: "10px 25px",
            background: "none",
            "font-size": "x-large",
          }}
        >
          Total:${total}
        </p>
      </div>

    </>
  );
}
