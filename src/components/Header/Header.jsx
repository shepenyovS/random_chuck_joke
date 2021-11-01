import React from "react";
import classes from "./Header.module.css";

function Header({ logoImg }) {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header}>
        <div className={classes.header_logo}>
          <img src={logoImg} alt="" />
          <span> Chuck Norris</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
