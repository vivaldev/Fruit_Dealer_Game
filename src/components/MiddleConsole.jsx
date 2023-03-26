import React from "react";
import "../styles/MiddleConsole.css";

const MiddleConsole = ({
  triggerNextDay,
  handleTravel,
  selectedCity,
  playerItems,
  buyTarget,
  player,
  isBought,
}) => {
  return (
    <div className="middle-console">
      {isBought && (
        <div className="event-display-container">
          <h2>Event:</h2>
          <p>
            <span className="event-player event">{player}</span>
            <br />
            just bought
            <br />
            <span className="event-quantity event">{buyTarget.quantity} </span>
            <span className="event-item event">{buyTarget.name}</span>
            <br />
            for
            <br />
            <span className="event-price event">{buyTarget.price}</span>{" "}
            <span className="event-dollars">dollars</span>
          </p>
        </div>
      )}

      <div className="btn-wrapper">
        <div className="btn-label-wrapper">
          <p className="btn-label">Travel to another city:</p>
          <button className="travel-btn" onClick={handleTravel}>
            Go to Airport
          </button>
        </div>

        <div className="btn-label-wrapper">
          <p className="btn-label">Rent a room from {selectedCity}:</p>
          <button className="nextday-btn" onClick={triggerNextDay}>
            Stay in Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleConsole;
