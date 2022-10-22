import React from "react";
import Categorybar from "./Categorybar";
import Topbar from "./Topbar";

function Navbar() {
  return (
    <div className="nav-cover">
      <Topbar></Topbar>
      <Categorybar/>
    </div>
  );
}

export default Navbar;
