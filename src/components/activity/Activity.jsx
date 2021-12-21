import React, { useState } from "react";
import classes from "./Activity.module.css";
import ActivityItem from "./activityItem/ActivityItem";
import { AiOutlineArrowRight } from "react-icons/ai";
import follower from "../../assets/IMG/ic-followers@3x.png";
import event from "../../assets/IMG/ic-events@3x.png";
import assignment from "../../assets/IMG/ic-assignments@3x.png";

const Activity = () => {
  const [activeId, setActiveId] = useState(null);

  const onSetActive = (id) => {
    setActiveId(id);
  };

  const caption1 = (
    <p>
      You have new 5 followers including{" "}
      <span className={classes.follower}>Kathryn Crawford</span> and{" "}
      <span className={classes.follower}>Piper Shaw</span>
    </p>
  );

  const caption2 = <p>3 new events were added to your calender</p>;

  const caption3 = <p>You have 3 pending readings to complete 🤓</p>;

  return (
    <div className={classes.activity}>
      <div className={classes.activity__top}>
        <h1 className={classes.activity__title}>Activity</h1>
        <div className={classes.activity__title__line}></div>
        <div className={classes.activity__btn}>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className={classes.activityItem}>
        <ActivityItem
          id={1}
          url={follower}
          caption={caption1}
          click={() => onSetActive(1)}
          active={activeId}
        />
        <ActivityItem
          id={2}
          url={event}
          caption={caption2}
          click={() => onSetActive(2)}
          active={activeId}
        />
        <ActivityItem
          id={3}
          url={assignment}
          caption={caption3}
          click={() => onSetActive(3)}
          active={activeId}
        />
      </div>
    </div>
  );
};

export default Activity;
