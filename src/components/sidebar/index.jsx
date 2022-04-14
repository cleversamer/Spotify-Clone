import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaylists } from "../../store/reducers/playlists";
import { invertOpenedList } from "../../store/reducers/openedList";
import { Close, Home, Search, LibraryMusic } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import "./index.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectPlaylists);

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <Link to="/">
          <img
            className="sidebar__logo"
            src="img/logo.jpg"
            alt="Spotify logo"
          />
        </Link>

        <Close
          fontSize="large"
          className="sidebar__top-icon clickable"
          onClick={() => dispatch(invertOpenedList())}
        />
      </div>

      <SidebarOption Icon={Home} title="Home" />

      <SidebarOption Icon={Search} title="Search" />

      <SidebarOption Icon={LibraryMusic} title="Your Library" />

      <strong className="sidebar__title opacity-9">Playlists</strong>

      <hr className="opacity-9" />

      <section className="sidebar__playlists">
        {playlists?.map((playlist) => (
          <SidebarOption key={playlist.id} title={playlist.name} />
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
