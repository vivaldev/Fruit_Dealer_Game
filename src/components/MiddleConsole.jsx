import React from "react";
import "../styles/MiddleConsole.css";

const MiddleConsole = ({ triggerNextDay, handleTravel, selectedCity }) => {
  return (
    <div className="middle-console">
      <div className="shop-cart-container">
        <h3>Shop cart in {selectedCity}:</h3>
      </div>
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
            Go to Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleConsole;
