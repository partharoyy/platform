import React from "react";
import classes from "./Body.module.css";
import Top from "../top/Top";
import Events from "../events/Events";
import Activity from "../activity/Activity";
import Progress from "../progress/Progress";
import dots from "../../assets/IMG/menu/4dots.png";
import chart from "../../assets/IMG/menu/chart.png";
import home from "../../assets/IMG/menu/Home.png";
import message from "../../assets/IMG/menu/message.png";
import cross from "../../assets/IMG/menu/x.png";
import { FiMenu } from "react-icons/fi";

const Body = () => {
  return (
    <div className={classes.body}>
      <div className={classes.sidebar}>
        <FiMenu className={classes.menu} />
        <img src={home} alt="home-icon" />
        <img src={dots} alt="dots-icon" />
        <img src={cross} alt="cross-icon" />
        <img src={chart} alt="chart-icon" />
        <img src={message} alt="message-icon" />
      </div>
      <div className={classes.container}>
        <Top />
        <Events />
        <Activity />
        <Progress />
      </div>
    </div>
  );
};

export default Body;
