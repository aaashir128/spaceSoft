import { Facebook, Language, Twitter } from "@mui/icons-material";
import React from "react";
import "./FooterMid.css";

function FooterMid() {
  return (
    <div className="footerMid">
      <div className="footerMid__logo">
        <img
          className="footerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rocket_League_black_text_logo.svg/1280px-Rocket_League_black_text_logo.svg.png"
          alt=""
        />
      </div>
      <div className="footerDetails footerMid__dest">
        <h4>Destination & Packages</h4>
        <p>All Destinations</p>
        <p>All Activities</p>
        <p>Packages</p>
        <p>Payments</p>
      </div>
      <div className="footerDetails footerMid__support">
        <h4>Support</h4>
        <p>Our Covid-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation Options</p>
        <p>Contact Us</p>
      </div>

      <div className="footerMid__socials footerDetails">
        <p>Privacy</p>
        <p>Terms</p>
        <div className="footerLanguage">
          <p>English</p>
          <Language />
        </div>

        <div className="footerSocialIcon">
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
}

export default FooterMid;
