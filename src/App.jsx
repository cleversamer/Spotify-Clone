import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { authenticateUser, setToken, selectToken } from "./store/reducers/user";
import { setSpotify } from "./store/reducers/spotify";
import Login from "./pages/login";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const spotify = new SpotifyWebApi();

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch(setSpotify());
      spotify.getMe().then((user) => dispatch(authenticateUser(user)));
      dispatch(setToken(_token));
      console.log("token", _token);
    }
  }, []);

  if (!token) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default App;
