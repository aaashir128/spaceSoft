import React from "react";
import "./Footer.css";
import FooterMid from "./FooterMid";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <img
          src="https://wallpaperaccess.com/full/2439747.jpg"
          alt=""
          className="routeImage"
        />
      </div>
      <div className="footer__mid">
        <FooterMid />
      </div>
      <div className="footer__bottom">Copyright © Space Spot 2022</div>
    </div>
  );
}

export default Footer;
