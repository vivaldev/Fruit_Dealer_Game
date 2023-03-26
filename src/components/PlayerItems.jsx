import React, { useState, useEffect } from "react";
import "../styles/PlayerItems.css";

const PlayerItems = () => {
  const [selectedCity, setSelectedCity] = useState("pori");

  return (
    <div className="player-items-list">
      <h1>Player Items</h1>
    </div>
  );
};

export default PlayerItems;
