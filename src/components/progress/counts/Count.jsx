import React, { useState } from "react";
import classes from "./Count.module.css";

const Count = ({ id, title, count }) => {
  return (
    <div
      key={id}
      className={
        id === 5 ? `${classes.count} ${classes.countActive}` : classes.count
      }
    >
      <p
        className={
          id === 5 ? `${classes.title} ${classes.activeTitle}` : classes.title
        }
      >
        {title}
      </p>
      <p className={classes.num}>{count}</p>
    </div>
  );
};

export default Count;
