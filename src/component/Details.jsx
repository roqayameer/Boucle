import React, { useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Datarovider";
import Colors from "./Colors";
import DetailsThumt from "./DetailsThumt";
import { Link } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pagex - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    // console.log(imgDiv.current);
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };
  console.log(details);

  return (
    <div >
      {details.map((product) => (
        <div className="details" key={product._id}>
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            style={{ backgroundImage: `url(${product.images[index]})` }}
            ref={imgDiv}
            onMouseLeave={() =>
              (imgDiv.current.style.backgroundPosition = `center`)
            }
          />
          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price}</h3>
            {/* <Colors colors={product.colors} /> */}
            {/* <div className="colors">
              {product.colors.map((color, index) => (
                <button key={index} style={{ background: color }}>
                  {color}
                </button>
              ))}
              </div>*/}

            {/*<div className="sizes">
              {product.sizes.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
              </div>*/}

            <p>{product.description}</p>
             {/* <p>{product.content}</p>  */}
              {/* <DetailsThumt images={product.images} setIndex={setIndex} /> */} 
            {/* <Link to="/cart" className="cart" onClick={() => addCart(products._id)}> *
              Add to cart
            </Link> */}
              <button onClick={() => addCart(product._id)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
