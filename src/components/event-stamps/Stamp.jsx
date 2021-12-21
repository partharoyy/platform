import React from "react";
import classes from "./Stamp.module.css";

const Stamp = ({ item }) => {
  return (
    <div className={classes.rightSide} key={item.key}>
      <img src={item.url} alt={item.id} />
      <div className={classes.rightSide__bottomRow}>
        <h5>{item.time}</h5>
        <p>{item.caption}</p>
      </div>
    </div>
  );
};

export default Stamp;
