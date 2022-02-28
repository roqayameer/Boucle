import React, { Fragment } from "react";
import pexels from "./pexels.jpg";
import waist from "./waist.jpg";
export default function Aboutas() {
  return (
    <Fragment>
      <div className="titel">
        <p className="titel1">
          About As
          <hr style={{ width: "240px;" }} />
        </p>
      </div>
      <div className="card2">
        <div className="card2_ima1">
          <img src={waist} alt="" />
        </div>
        <div className="des_prodect">
          <h3 className="des_titel">
            How to take care of curly hair in the best way possible
          </h3>
          <p
            style={{
              "padding-left": "40px",
              "padding-right": "40px",
              "text-align": "left",
              "font-size": "medium",
            }}
          >
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store.
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store.. Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store. Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store..
          </p>
        </div>
      </div>
    </Fragment>
    /*<div className="card2">
        <div className="card2_ima1">
          <img src={pexels} />
        </div>
        <div className="card2_text1">
          <h3 className="des_titel">
            How to take care of curly hair in the best way possible
          </h3>
          <p className="des_prodect">
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store.
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store.. Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store
            Seamlessly sync your online store inventory no matter where you sell
            it. Build your online store. Seamlessly sync your online store
            inventory no matter where you sell it. Build your online store..
          </p>
          <div className="lernmore">
            <a href="">
              <span style={{ position: "relative", "z-index": "3" }}>
                LEARN MORE
              </span>
            </a>
          </div>
        </div>
      </div>*/
  );
}
