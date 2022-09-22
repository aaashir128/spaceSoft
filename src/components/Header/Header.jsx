import { AccountCircle } from "@mui/icons-material";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rocket_League_black_text_logo.svg/1280px-Rocket_League_black_text_logo.svg.png"
          alt=""
        />
      </div>
      <div className="header__right">
        <p>Travel Adventure</p>
        <AccountCircle fontSize="large" color="disabled" />
      </div>
    </div>
  );
}

export default Header;
