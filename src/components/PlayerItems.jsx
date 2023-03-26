import React, { useState, useEffect } from "react";
import "../styles/PlayerItems.css";

const PlayerItems = ({ playerItems }) => {
  const [selectedCity, setSelectedCity] = useState("pori");

  return (
    <div className="player-items-container">
      <h2 className="player-items-title">Player Items</h2>
      <div className="items-list">
        {Object.keys(playerItems).map((itemName) => (
          <div className="item-row">
            <div className="left-box">
              <h5 className="player-item-name">{itemName}</h5>
            </div>
            <div className="right-box">
              <p className="player-item-quantity">
                {playerItems[itemName].quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerItems;
