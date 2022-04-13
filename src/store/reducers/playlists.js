import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "playlists",
  initialState: {
    list: [],
  },
  reducers: {
    playlistsSet: (playlists, action) => {
      playlists.list = action.payload.data;
    },
  },
});

const { playlistsSet } = slice.actions;

// Action creators
export const setPlaylists = (playlists) => playlistsSet({ data: playlists });

// Selectors
export const selectPlaylists = createSelector(
  (state) => state.entities.playlists,
  (playlists) => playlists.list
);

export default slice.reducer;
