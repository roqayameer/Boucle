import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Datarovider";
import pexels from "./pexels.jpg";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { Navigate } from "react-router-dom";
export default function Prodect() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const [products_image] = value.products_image;
  const addCart = value.addCart;
  const [filters, setFilter] = React.useState(products);
  const [search_value, setSearch] = React.useState("");

  console.log("imgg", value);

  function onSearchChange(e) {
    let newValue = e.target.value;
    let name = products;
    if (!newValue) {
      setSearch(newValue);
      setFilter([...products]);
    }
    let filtered = name.filter((item) => {
      return item.title.toLowerCase().includes(newValue.toLowerCase());
    });
    setSearch(newValue);
    setFilter([...filtered]);
  }

  // console.log(products);
  // console.log(useContext(DataContext).products)

  const [isLogin, setisLogin] = useState(null);
  useEffect(() => {
    let loggedstate = JSON.parse(localStorage.getItem("token"));
    console.log("is Logged", loggedstate);
    setisLogin(loggedstate);
  }, []);

  // if (!isLogin) return <Navigate to="/Login" />;
  return (
    <>
      <Box
        className="search"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Find your favorite product"
          variant="standard"
          value={search_value}
          onChange={onSearchChange}
        />
      </Box>
      <div className="products">
        {products.map((product, key) => (
          <div className-="card" key={key}>
            <Link to={`/products/${product.id}`}>
              <img
                src={products_image[`img${key + 1}`]}
                style={{
                  marginTop: "10%",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Link>
            <div className="box">
              <div
                style={{ display: "flex", "justify-content": "space-around" }}
              >
                <h3 title={product.name}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <h4>${product.price}</h4>
              </div>
              <p>{product.description}</p>

              <button onClick={() => addCart(product.id)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
