import React from "react";
import airbnblogo from "../asset/Airbnb-Logo.wine.svg";
import searchicon from "../asset/icons8-search-30.png";
import worldicon from "../asset/icons8-world-20.png";
import menu from "../asset/icons8-menu-20.png";
import user from "../asset/icons8-male-user-48.png";
import "../styles/Topbar.css";
function Topbar() {
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-container">
          <div className="bnblogo">
            <span className="logo">
              <img src={airbnblogo} alt="airbnb logo" />
            </span>
          </div>
          <div className="search">
            <div className="search-span bold">Anywhere</div>
            <div className="search-span bold">Any week</div>
            <div className="search-span">Add guests</div>
            <img src={searchicon} alt="search icon" />

            <div className="search-smallscreen">
              <div className="ss-left">
              <div className="ss-search"><i className="material-icons">search</i></div>
              <div className="ss-locate">
              <div className="ss-locate-top bold">Where to?</div>
              <div className="ss-locate-bottom">
                <ul>
                  <li>Anywhere</li>
                  <li>Any week</li>
                  <li>Add guests</li>
                </ul>
              </div>
              </div>
              </div>
              <div className="ss-filter"><i className="material-icons">tune</i></div>
            </div>
          </div>
          <div className="profile-div">
            <span className="bold bhost">Become a Host</span>
            <span className="world">
              <img src={worldicon} alt="world icon" />
            </span>
            <div className="profile">
              <div className="menu-icon">
                <img src={menu} alt="menu icon" />
              </div>
              <div className="user-icon">
                <img src={user} alt="user icon " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
