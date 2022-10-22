import React from "react";
import Card from "./Card";
import worldicon from "../asset/icons8-world-20.png";
import "../styles/Footer.css";
import chevron from "../asset/icons8-chevron-16.png";
function Footer() {
  return (
    <div className="footer">
      <Card className="footer-wrapper">
        <div className="left-foot">
          <div className="copywrite">
            <span className="copywrite-icon">
              <img src="" alt="" />

              <span className=""> © 2022 Airbnb, Inc.</span>
            </span>
            <span className="ul">
              <ul>
                <li>privacy</li>
                <li>terms</li>
                <li>sitemap</li>
                <li>destinations</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="right-foot">
          <span className="english bold">
            <span className="region">
              <img src={worldicon} alt="" />
              <span>English (US)</span>
            </span>
            <span className="dollar">
              <span> $ </span>
              <span>USD</span>
            </span>
            <span className="support">
              <span>Support & Resources</span>
              <img src={chevron} alt="" />
            </span>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
