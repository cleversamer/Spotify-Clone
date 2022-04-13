import React from "react";
import { Grid, Slider } from "@mui/material";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@mui/icons-material";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img
          className="footer__album-cover clickable"
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
          alt="Album cover"
        />

        <div className="footer__song-info">
          <h4 className="footer__song-title">Yeah!</h4>
          <p className="footer__singer">Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__icon footer__icon--green clickable" />
        <SkipPrevious className="footer__icon clickable" />
        <PlayCircleOutline
          fontSize="large"
          className="footer__icon clickable"
        />
        <SkipNext className="footer__icon clickable" />
        <Repeat className="footer__icon footer__icon--green clickable" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay className="clickable" />
          </Grid>

          <Grid item>
            <VolumeDown className="clickable" />
          </Grid>

          <Grid item xs>
            <Slider
              className="footer__slider clickable"
              defaultValue={80}
              valueLabelDisplay="auto"
              step={5}
            />
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
