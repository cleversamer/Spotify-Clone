import { combineReducers } from "@reduxjs/toolkit";
import entities from "./entities";
import user from "./user";
import playing from "./playing";
import item from "./item";
import spotify from "./spotify";

export default combineReducers({ entities, user, spotify, item, playing });
