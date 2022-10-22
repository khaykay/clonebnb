import React from "react";

function Categoryelement() {
  const name = "ashawo";
  const price = "$43";
  return (
    <div className="categoryelement">
      <div className="image"></div>
      <div className="caption">
        <div className="left">
          <span className="location bold">lagos, nigeria</span>
          <span className="host"> {`hosted by ${name}`}</span>
          <span className="date">november</span>
          <span className="price"> {`${price} night`}</span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Categoryelement;
