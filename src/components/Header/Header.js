import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Link className="header__link" to={`/search/${input}`}>
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallOutlinedIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsNoneIcon className="header__icon" />
        <Avatar src="https://avatars.githubusercontent.com/u/87502003?v=4" />
      </div>
    </div>
  );
};

export default Header;
