import React, { useContext } from "react";
import { DataContext } from "./Datarovider";
import pexels from "./pexels.jpg";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
export default function Prodect() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [filters, setFilter] = React.useState(products);
  const [search_value, setSearch] = React.useState("");

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
        {filters.map((products) => (
          <div className-="card" key={products._id}>
            <Link to={`/products/${products._id}`}>
              <img
                src={products.images[0]}
                style={{
                  width: "100%",
                  display: " block",
                  "object-fit": "cover",
                }}
              />
            </Link>
            <div className="box">
              <div
                style={{ display: "flex", "justify-content": "space-around" }}
              >
                <h3 title={products.titel}>
                  <Link to={`/products/${products._id}`}>{products.title}</Link>
                </h3>
                <h4>${products.price}</h4>
              </div>
              <p>{products.description}</p>

              <button onClick={() => addCart(products._id)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
