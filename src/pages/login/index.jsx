import React from "react";
import { accessUrl } from "../../spotify";
import "./index.css";

const Login = () => {
  return (
    <div className="login">
      <img className="login__logo" src="img/logo.jpg" alt="Spotify logo" />
      <a href={accessUrl} className="login__link">
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
