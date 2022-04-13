import { combineReducers } from "@reduxjs/toolkit";
import playlists from "./playlists";
import topArtists from "./topArtists";

export default combineReducers({
  playlists,
  topArtists,
});
