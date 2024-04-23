import React from "react";
import LeftInfo from "./LeftInfo";
import UrlShortner from "./UrlShortner";
import { Navbar } from "./Navbar";

const Task1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LeftInfo />
        <UrlShortner />
    </div>
  );
};

export default Task1;
