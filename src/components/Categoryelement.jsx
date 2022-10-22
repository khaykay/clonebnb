import React from "react";
import "../styles/Categoryelement.css";

function Categoryelement() {
  const name = "ashawo";
  const price = "$43";
  return (
    <div className="categoryelement">
      <div className="categoryelement-wrapper">
        <div className="image"></div>
        <div className="caption">
          <div className="left">
            <span className="location bold capitalize">lagos, nigeria</span>
            <span className="host capitalize"> {`Hosted by ${name}`}</span>
            <span className="date capitalize">november</span>
            <span className="price"> {`${price} night`}</span>
          </div>
          <div className="right">hello</div>
        </div>
      </div>
    </div>
  );
}

export default Categoryelement;
