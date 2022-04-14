import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playSong,
  pauseSong,
  selectSong,
  selectPlaying,
} from "../../store/reducers/playing";
import { Slider } from "@mui/material";
import {
  PlayCircleOutline,
  PauseCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@mui/icons-material";
import "./index.css";

const Footer = () => {
  const dispatch = useDispatch();
  const song = useSelector(selectSong);
  const isPlaying = useSelector(selectPlaying);
  const audioRef = useRef(null);

  const handlePlaySong = () => {
    dispatch(playSong());
    audioRef?.current?.play();
  };

  const handlePauseSong = () => {
    dispatch(pauseSong());
    audioRef?.current?.pause();
  };

  return (
    <footer className="footer">
      <audio src={song?.preview_url} ref={audioRef} />

      <div className="footer__left">
        <img
          className="footer__album-cover clickable"
          src={song?.album?.images[0]?.url || "img/unknown-album.jpg"}
          alt={song?.album?.name || "Album cover"}
        />

        <div className="footer__song-info">
          <h4 className="footer__song-title">{song?.name || "Unknown song"}</h4>

          <p className="footer__singer">
            {song?.artists?.map((artist) => artist.name).join(", ") ||
              "Unknown artist"}
          </p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__icon footer__icon--green clickable" />

        <SkipPrevious className="footer__icon clickable" />

        {isPlaying ? (
          <PauseCircleOutline
            fontSize="large"
            className="footer__icon footer__icon--big clickable"
            onClick={handlePauseSong}
          />
        ) : (
          <PlayCircleOutline
            fontSize="large"
            className="footer__icon footer__icon--big clickable"
            onClick={handlePlaySong}
          />
        )}

        <SkipNext className="footer__icon clickable" />

        <Repeat className="footer__icon footer__icon--green clickable" />
      </div>

      <div className="footer__right">
        <div className="footer__right-icons">
          <PlaylistPlay className="footer__icon clickable" />

          <VolumeDown className="footer__icon footer__right-icon clickable" />
        </div>

        <Slider
          className="footer__slider clickable"
          defaultValue={80}
          valueLabelDisplay="auto"
          step={5}
        />
      </div>
    </footer>
  );
};

export default Footer;
