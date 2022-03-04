import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import womane from "./womane.jpg";
// import image_4 from "./image_4.jpg";
import image_5 from "./image_5.jpg";
// import Prodect from "./Prodect";
import Aboutas from "./Aboutas";
export default function Homepage() {
  return (
    <Fragment>
      <div className="main">
        <img src={womane} alt="" />
        <div className="desc_home">
          <span style={{ "font-size": "30px", "font-weight": "500" }}>
            Beauty is in the eyes of the beholder
          </span>
          <p style={{ opacity: "0.9", "font-size": "15px" }}>
            For curly hair, a complete care kit is available.
          </p>
          <div className="Shopnow">
            <Link to="/Login">
              <span
                style={{
                  position: "relative",
                  "z-index": "3",
                  "font-size": "14px",
                  border: "#f18d2b 2px solid",
                  padding: "3px",
                  "border-radius": "3px",
                 
                }}
              >
               Login
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="titel">
        <p className="titel1">
          Products Chosen
          <hr style={{ width: "240px;" }} />
        </p>
      </div>
      <div className="products">
        <div className="card">
          <img
            src={image_5}
            style={{
              width: "100%",
              height: "55%",
              "max-height": "340px",
              display: " block",
              "object-fit": "cover",
            }}
          />
          <div className="box">
            <div style={{ display: "flex", "justify-content": "space-around" }}>
              <h3>WACTH PRODUCT 02</h3>
              <h4>$101</h4>
            </div>
            <p>
              How to and tutorial videos of cool CSS effect, Web Design
              ideas,JavaScript libraries, Node.
            </p>

            <button> <Link to="/Login"> Shop </Link></button>
          </div>
        </div>
        <div className="card">
          <img
            src={image_5}
            style={{
              width: "100%",
              height: "55%",
              "max-height": "340px",
              display: " block",
              "object-fit": "cover",
            }}
          />
          <div className="box">
            <div style={{ display: "flex", "justify-content": "space-around" }}>
              <h3>WACTH PRODUCT 02</h3>
              <h4>$101</h4>
            </div>
            <p>
              How to and tutorial videos of cool CSS effect, Web Design
              ideas,JavaScript libraries, Node.
            </p>

            <button> <Link to="/Login"> Shop </Link></button>
          </div>
        </div>

        <div className="card">
          <img
            src={image_5}
            style={{
              width: "100%",
              height: "55%",
              "max-height": "340px",
              display: " block",
              "object-fit": "cover",
            }}
          />
          <div className="box">
            <div style={{ display: "flex", "justify-content": "space-around" }}>
              <h3>WACTH PRODUCT 02</h3>
              <h4>101$</h4>
            </div>
            <p>
              How to and tutorial videos of cool CSS effect, Web Design
              ideas,JavaScript libraries, Node.
            </p>
            
            <button> <Link to="/Login"> Shop </Link></button>
          </div>
        </div>
      </div>
      {/* <ATP/> */}

      <Aboutas />
    </Fragment>
  );
}
