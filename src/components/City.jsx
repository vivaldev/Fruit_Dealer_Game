import React from "react";

const City = (props) => {
  return (
    <div className="city">
      <div className="city-header-console">
        <h3 className="player-name-display">{props.playerName}</h3>
        <div className="day-title-wrapper">
          <h3 className="current-day">Day: {props.currentDate}</h3>
          <h3 className="city-title">Location: {props.city}</h3>
        </div>
      </div>
    </div>
  );
};

export default City;
