import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "playlists",
  initialState: [],
  reducers: {
    playlistsSet: (playlists, action) => {
      playlists = action.payload.playlists;
    },
  },
});

const { playlistsSet } = slice.actions;

// Action creators
export const setPlaylists = (playlists) => playlistsSet({ playlists });

// Selectors
export const selectPlaylists = createSelector(
  (state) => state.playlists,
  (playlists) => playlists
);

export default slice.reducer;
