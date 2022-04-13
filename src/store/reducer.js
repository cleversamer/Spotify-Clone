import { combineReducers } from "@reduxjs/toolkit";
import entities from "./reducers/entities";
import user from "./reducers/user";
import playing from "./reducers/playing";
import item from "./reducers/item";
import spotify from "./reducers/spotify";

export default combineReducers({ entities, user, spotify, item, playing });
