import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "playing",
  initialState: {
    song: null,
    isPlaying: false,
  },
  reducers: {
    playingSet: (playing, action) => {
      playing.song = action.payload.playing;
      playing.isPlaying = false;
    },

    songPlayed: (playing, action) => {
      playing.isPlaying = true;
    },

    songPaused: (playing, action) => {
      playing.isPlaying = false;
    },
  },
});

const { playingSet, songPlayed, songPaused } = slice.actions;

// Action creators
export const setPlaying = (playing) => playingSet({ playing });

export const playSong = () => songPlayed();

export const pauseSong = () => songPaused();

// Selectors
export const selectSong = createSelector(
  (state) => state.playing,
  (playing) => playing.song
);

export const selectPlaying = createSelector(
  (state) => state.playing,
  (playing) => playing.isPlaying
);

export default slice.reducer;
