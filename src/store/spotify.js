import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "spotify",
  initialState: null,
  reducers: {
    spotifySet: (spotify, action) => {
      spotify = action.payload.spotify;
    },
  },
});

const { spotifySet } = slice.actions;

// Action creators
export const setSpotify = (spotify) => spotifySet({ spotify });

// Selectors
export const selectSpotify = createSelector(
  (state) => state.spotify,
  (spotify) => spotify
);

export default slice.reducer;
