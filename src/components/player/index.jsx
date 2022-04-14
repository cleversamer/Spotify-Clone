import React from "react";
import { useSelector } from "react-redux";
import { selectOpenedList } from "../../store/reducers/openedList";
import Sidebar from "../sidebar";
import Body from "../body";
import Footer from "../footer";
import "./index.css";

const Player = ({ spotify }) => {
  const openedList = useSelector(selectOpenedList);

  const getClasses = () => {
    return (
      "player__content " +
      (openedList === "songs"
        ? "player__content--body"
        : "player__content--sidebar")
    );
  };

  return (
    <div className="player">
      <div className={getClasses()}>
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
};

export default Player;
