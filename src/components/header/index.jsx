import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/user";
import { Avatar } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./index.css";

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <Search className="header__icon clickable" />

        <input
          className="header__input"
          type="text"
          placeholder="Search artists, songs, or podcasts..."
        />
      </div>

      <div className="header__right">
        <h4 className="header__username clickable">
          {user?.display_name || "Unknown user"}
        </h4>

        <Avatar
          className="header__avatar clickable"
          src={
            user?.images[0]?.url ||
            "https://avatars.githubusercontent.com/u/73291969?v=4"
          }
          alt={user?.display_name || "Avatar"}
        />
      </div>
    </div>
  );
};

export default Header;
