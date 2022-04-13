import React from "react";
import Header from "../header";
import "./index.css";

const Body = ({ spotify }) => {
  return (
    <main className="body">
      <Header spotify={spotify} />
    </main>
  );
};

export default Body;
