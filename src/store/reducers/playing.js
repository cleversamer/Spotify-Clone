import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "playing",
  initialState: false,
  reducers: {
    playingSet: (playing, action) => {
      playing = action.payload.playing;
    },
  },
});

const { playingSet } = slice.actions;

// Action creators
export const setPlaying = (user) => playingSet({ user });

// Selectors
export const selectPlaying = createSelector(
  (state) => state.playing,
  (playing) => playing
);

export default slice.reducer;
