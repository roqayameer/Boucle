import React, { useContext } from "react";
import { DataContext } from "./Datarovider";
import pexels from "./pexels.jpg";
import { Link } from "react-router-dom";
export default function Prodect() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  // console.log(products);
  // console.log(useContext(DataContext).products)
  return (
    <div className="products">
      {products.map((products) => (
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
            <div style={{ display: "flex", "justify-content": "space-around" }}>
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
  );
}
