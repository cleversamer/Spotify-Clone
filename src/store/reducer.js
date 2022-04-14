import { combineReducers } from "@reduxjs/toolkit";
import entities from "./reducers/entities";
import user from "./reducers/user";
import playing from "./reducers/playing";
import discoverWeekly from "./reducers/discoverWeekly";
import openedList from "./reducers/openedList";

export default combineReducers({
  entities,
  user,
  playing,
  discoverWeekly,
  openedList,
});
