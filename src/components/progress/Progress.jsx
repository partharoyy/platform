import React, { useState } from "react";
import Count from "./counts/Count";
import classes from "./Progress.module.css";
import oval from "../../assets/IMG/oval.png";

const countData = [
  { id: 1, title: "Total Webinars", count: 9 },
  { id: 2, title: "Pending Assignments", count: 0 },
  { id: 3, title: "Total Units", count: 5 },
  { id: 4, title: "Total Readings", count: 14 },
  { id: 5, title: "Total Videos", count: 5 },
];

const Progress = () => {
  return (
    <div className={classes.progress}>
      <div className={classes.progress__left__side}>
        <h1>Progress overview</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="-10 -10 220 220"
          className={classes.progressBar}
        >
          <text
            x="50%"
            y="30%"
            text-anchor="middle"
            fill="#fff"
            dy=".3em"
            className={classes.svg}
          >
            <tspan x="45%" dy=".6em">
              40%
            </tspan>
          </text>
          <defs>
            <linearGradient
              id="colour"
              gradientUnits="objectBoundingBox"
              x1="0"
              y1="1"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stop-color="orange" />
              <stop offset="100%" stop-color="yellow" />
            </linearGradient>
          </defs>

          <g fill="none" stroke-width="10" transform="translate(100,120)">
            <path d="M 0 -100 a 50 50 0 1 0 0.00001 0" stroke="url(#colour)" />
          </g>
        </svg>
        <>
          <div className={classes.lower}>
            <div className={classes.lower__left}>
              <div className={classes.inner}>
                <div className={classes.yellow}></div>
                <p>Completed</p>
              </div>
              <h2>
                <span className={classes.time}>20</span> hours
              </h2>
            </div>
            <div className={classes.right}>
              <div className={classes.lower__right}>
                <div className={classes.inner}>
                  <div className={classes.orange}></div>
                  <p>Left to go</p>
                </div>
                <h2>
                  <span className={classes.time}>30</span> hours
                </h2>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className={classes.progress__right__side}>
        <div className={classes.top}>
          <h1>PROGRESS</h1>
          <div className={classes.line}></div>
        </div>
        <div className={classes.count__container}>
          {countData.map((item) => (
            <Count
              key={item.id}
              title={item.title}
              count={item.count}
              id={item.id}
            />
          ))}
        </div>

        <div className={classes.bottomBanner}>
          <h2>
            Confirm your account details &nbsp;
            <span className={classes.email}>
              Please confirm your email and phone number.
            </span>
            <span className={classes.emoji}>😰</span>
          </h2>
          <img src={oval} alt="oval" className={classes.oval} />
        </div>
      </div>
    </div>
  );
};

export default Progress;
