import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reducers/user";
import { invertOpenedList } from "../../store/reducers/openedList";
import { Avatar } from "@mui/material";
import { Search, FormatListBulletedOutlined } from "@mui/icons-material";
import "./index.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <FormatListBulletedOutlined
          className="header__left-icon clickable"
          onClick={() => dispatch(invertOpenedList())}
        />

        <div className="header__left-right">
          <Search className="header__icon clickable" />

          <input
            className="header__input"
            type="text"
            placeholder="Search artists, songs, or podcasts..."
          />
        </div>
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
