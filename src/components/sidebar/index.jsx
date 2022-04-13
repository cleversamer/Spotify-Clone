import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPlaylists } from "../../store/reducers/playlists";
import { Home, Search, LibraryMusic } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import "./index.css";

const Sidebar = () => {
  const playlists = useSelector(selectPlaylists);

  return (
    <aside className="sidebar">
      <Link to="/">
        <img className="sidebar__logo" src="img/logo.jpg" alt="Spotify logo" />
      </Link>

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
