import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/IMG/Group.png";
import downArrow from "../../assets/IMG/Arrow.png";
import { BiSearch } from "react-icons/bi";
import bell from "../../assets/IMG/Notification.png";
import chat from "../../assets/IMG/Chat.png";
import profilePic from "../../assets/IMG/Placeholders/Profile/Picture.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.header__search}>
        <input type="text" placeholder="Search and Find" />
        <BiSearch className={classes.header__search__icon} />
      </div>

      <div className={classes.header__right__side}>
        <ul className={classes.btns}>
          <li>
            <button className={classes.header__add__button}>+&nbsp;ADD</button>
          </li>
          <li>
            <img src={bell} alt="bell-icon" className={classes.bell} />
          </li>
          <li>
            <img src={chat} alt="message-icon" className={classes.message} />
          </li>
          <li>
            <h3>Clarence Russell</h3>
          </li>
        </ul>

        <ul className={classes.profile}>
          <li>
            <img src={profilePic} alt="profile-pic" />
          </li>
          <li>
            <img src={downArrow} alt="down-arrow" className={classes.down} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
