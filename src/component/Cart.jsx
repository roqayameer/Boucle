import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./Datarovider";
// import Colors from "./Colors";
import { Link } from "react-router-dom";
import axios from "axios";
// import Sizes from './Sizes'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Cartempty from "./Cartempty";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = useState(0);
  const [carts] = value.carts;
  // const [, setCarts] = useState(value.carts);
  // const [total, setTotal] = useState(0);
  const [menu, setMenu] = useState(false);
  const fetchData = value.fetchData;

  console.log("welcome", carts);
  // const imgDiv = React.useRef();

  // useEffect(() => {
  //   const getTotal = () => {
  //     const res = cart.reduce((prev, item) => {
  //       return prev + item.price * item.count;
  //     }, 0);
  //     setTotal(res);
  //   };
  //   getTotal();
  // }, [cart]);

  useEffect(() => {
    // fetchProducts();
  }, []);

  // const fetchProducts = () => {
  //   let loggedstate = JSON.parse(localStorage.getItem("token"));
  //   console.log("is Logged", loggedstate);
  // };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const toggleMeenu = () => {
    setMenu(!menu);
  };

  // const styleMenu = {
  //   left: menu ? 0 : "-100%",
  // };
  let loggedstate = JSON.parse(localStorage.getItem("token"));
  const removeProduct = (id) => {
    var config = {
      method: "delete",
      url: `https://compute-django.herokuapp.com/api/orders/item/${id}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${loggedstate}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    if (window.confirm("Do you want to delete this product?")) {
      // window.location.reload(false);

      fetchData();
      // cart.forEach((item, index) => {
      //   if (item.id === id) {
      //     cart.splice(index, 1);
      //   }
      // });
      // setCart([...cart]);
    }
  };

  // if (carts.length === 0)
  //   return (
  //     // <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
  //     <Cartempty />
  //   );

  return (
    <>
      {!!carts ? (
        !carts?.length > 0 ? (
          // <p>empty</p>
          <Cartempty/>
        ) : (
          carts.map((products) => (
            <div className="details cart" key={products.id}>
              <div className="img-container">
                <img
                  // src={products_image[`img${key + 1}`]}
                  src={
                    products.product.images.length > 0
                      ? `https://compute-django.herokuapp.com${products.product.images[0].image}`
                      : "https://106kqa307e6v2oixfq35mqbj-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/ingredients-1024x1024.jpg"
                  }
                  style={{
                    marginTop: "10%",
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="box-details">
                <h2 title={products.product.name}>{products.product.name}</h2>
                <h3>${products.product.price}</h3>
                <p>{products.product.description}</p>
                <div className="amount">
                  <button
                    className="count"
                    onClick={() => reduction(products.id)}
                    style={{
                      "font-size": "x-large",
                      color: "#e27421",
                      border: "none",
                    }}
                  >
                    {" "}
                    <AiOutlineMinusSquare />{" "}
                  </button>
                  <p style={{ "font-size": "large" }}>{products.item_qty}</p>
                  <button
                    className="count"
                    onClick={() => increase(products.id)}
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
                <div
                  className="delete"
                  onClick={() => removeProduct(products.id)}
                >
                  <AiOutlineCloseSquare />
                </div>
              </div>
            </div>
          ))
        )
      ) : (
        <div>tessst</div>
      )}

      <div className="total">
        <Link to="/Checkout" onClick={toggleMeenu}>
          Next
        </Link>
        <p
          style={{
            color: "#080808",
            padding: "10px 25px",
            background: "none",
            "font-size": "x-large",
          }}
        >
          {/* Total:${total} */}
        </p>
      </div>
    </>
  );
}
