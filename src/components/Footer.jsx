import React from "react";
import Card from "./Card";
import "../styles/Footer.css";
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
          <span className="english">
            <img src="" alt="" />
            <span>English (US)</span>
            <span className="dollar">
              <img src="" alt="" />
              <span>USD</span>
            </span>
            <span className="support">
              <span>Support & Resources</span>
              <img src="" alt="" />
            </span>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
