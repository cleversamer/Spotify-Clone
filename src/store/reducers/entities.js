import { combineReducers } from "@reduxjs/toolkit";
import playlists from "./playlists";
import topArtists from "./topArtists";
import discoverWeekly from "./discoverWeekly";

export default combineReducers({
  playlists,
  topArtists,
  discoverWeekly,
});
