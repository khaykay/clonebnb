import React from "react";
import Card from "./Card";
import worldicon from "../asset/icons8-world-20.png";
import "../styles/Footer.css";
import chevron from "../asset/icons8-chevron-16.png";
function Footer() {
    return (
        <div className="footer">
            <Card className="footer-wrapper">
                <div className="smallscreen-foot">
                    <div className="footer-search layout">
                        <i className="material-icons smallscreen">search</i>
                        <span className="">Explore</span>
                    </div>
                    <div className="wishlist layout">
                    <i className="material-icons smallscreen">favorite_border</i>
                        <span className="">Wishlists</span>
                    </div>
                    <div className="login layout">
                    <i className="material-icons smallscreen">account_circle</i>
                        <span className="">Log in</span>
                    </div>
                </div>
                <div className="left-foot">
                    <div className="copywrite">
                        <span className="copywrite-icon">
                            <span className=""> © 2022 Airbnb, Inc.</span>
                        </span>
                        <span className="ul">
                            <ul >
                                <li className="li">privacy</li>
                                <li className="li">terms</li>
                                <li className="li">sitemap</li>
                                <li className="li">destinations</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="right-foot">
                    <span className="english bold">
                        <span className="region">
                            <img src={worldicon} alt="" />
                            <span className="right-foot-text">English (US)</span>
                        </span>
                        <span className="dollar">
                            <span > $ </span>
                            <span className="right-foot-text">USD</span>
                        </span>
                        <span className="support">
                            <span className="right-foot-text">Support & Resources</span>
                            <img src={chevron} alt="" />
                        </span>
                    </span>
                </div>
            </Card>
        </div>
    );
}

export default Footer;
