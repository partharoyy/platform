import React, { useState } from "react";
import classes from "./Events.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import sliderBackground1 from "../../assets/IMG/3000434@3x.png";
import sliderBackground2 from "../../assets/IMG/Group9.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stamp from "../../components/event-stamps/Stamp";
import thumbnail1 from "../../assets/IMG/thumb-notification@3x.png";
import thumbnail2 from "../../assets/IMG/thumbnail@3x.png";

const data = [
  {
    id: 1,
    url: sliderBackground1,
    caption: "Youth Talent & Education",
    date: "May, 20",
    tag: "SCIENCE",
  },
  {
    id: 2,
    url: sliderBackground1,
    caption: "Something",
    date: "June, 20",
    tag: "MATHS",
  },
];

const stampData = [
  {
    id: 1,
    url: thumbnail1,
    caption: "Webinar: the basics of...",
    time: "10:30AM",
  },
  {
    id: 2,
    url: thumbnail2,
    caption: "Team Building Activity 🔥",
    time: "2:15PM",
  },
];

const Events = () => {
  const [dotIndex, setDotIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${classes.arrow} ${classes.next}`} onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${classes.arrow} ${classes.prev}`} onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  };

  return (
    <div className={classes.events}>
      <div className={classes.left__side}>
        <h1 className={classes.events__title}>Events</h1>
        <Slider
          dots
          infinite
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          customPaging={(item) => (
            <div
              className={
                item === dotIndex
                  ? `${classes.dots} ${classes.activeDots}`
                  : classes.dots
              }
            >
              {" "}
            </div>
          )}
          beforeChange={(current, next) => setDotIndex(next)}
        >
          {data.map((item, index) => (
            <div className={classes.textMain}>
              <img src={item.url} />
              <div className={classes.textItem}>
                <p className={classes.tag}>{item.tag}</p>
                <h1 className={classes.caption}>{item.caption}</h1>
                <h1 className={classes.date}>{item.date}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={classes.right__side}>
        <div className={classes.title}>
          <h3 className={classes.titleHeadline}>EVENTS TODAY</h3>
          <div className={classes.titleLine}></div>
        </div>
        {stampData.map((item) => (
          <Stamp item={item} />
        ))}
      </div>
    </div>
  );
};

export default Events;
