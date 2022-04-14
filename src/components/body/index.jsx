import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDiscoverWeekly } from "../../store/reducers/discoverWeekly";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@mui/icons-material";
import Header from "../header";
import SongRow from "../song-row/";
import "./index.css";

const Body = ({ spotify }) => {
  const discoverWeekly = useSelector(selectDiscoverWeekly);
  const [liked, setLiked] = useState(false);

  return (
    <main className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          className="body__info-image clickable"
          src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ=="
          alt="Discover weekly"
        />

        <div className="body__info-text">
          <strong className="body__info-playlist">Playlist</strong>

          <h2 className="body__info-heading">Discover weekly</h2>

          <p className="body__info-title">{discoverWeekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__icon body__icon--big body__icon--shuffle clickable" />

          <Favorite
            fontSize="large"
            className={`body__icon body__icon--medium clickable${
              liked ? " body__icon--red" : ""
            }`}
            onClick={() => setLiked(!liked)}
          />

          <MoreHoriz className="body__icon body__icon--small clickable" />
        </div>

        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </main>
  );
};

export default Body;
