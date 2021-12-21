import React from "react";
import classes from "./Top.module.css";
import flag from "../../assets/IMG/flag.png";
import topBanner from "../../assets/IMG/Headers/header-4@3x.png";
import man from "../../assets/IMG/Group9@3x.png";

const Top = () => {
  return (
    <div className={classes.top}>
      <div className={classes.toprow}>
        <h1>Dashboard</h1>
        <div className={classes.rightSide}>
          <h5>Currently Learning</h5>
          <div className={classes.rightSide__bottomRow}>
            <img src={flag} alt="country-flag" />
            <p>English</p>
          </div>
        </div>
      </div>
      <div className={classes.banner}>
        <img
          src={topBanner}
          alt="top-banner"
          className={classes.banner__wallpaper}
        />
        <div className={classes.container}>
          <img src={man} alt="top-banner-man" className={classes.man} />
          <div className={classes.banner__text}>
            <h1>Welcome back, Clarence</h1>
            <h3>Ta-da! You're up to date. 🎉</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
