import React, { useState } from "react";
import classes from "./ActivityItem.module.css";
import arrow from "../../../assets/IMG/Arrow.png";

const ActivityItem = ({ id, url, caption, click, active }) => {
  return (
    <div className={classes.activityItem}>
      <div
        className={
          active === id
            ? `${classes.item__container} ${classes.active__container}`
            : classes.item__container
        }
        key={id}
        onClick={click}
      >
        <div className={classes.left}>
          <img src={url} alt="followers" />
          <p>{caption}</p>
        </div>
        <img src={arrow} alt="arrow" className={classes.arrow} />
      </div>
    </div>
  );
};

export default ActivityItem;
