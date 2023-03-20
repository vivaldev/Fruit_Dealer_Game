import React from "react";

const City = ({ playerName, currentDate, city, fruitsArray }) => {
  const items = fruitsArray.map((item) => {
    return (
      <div className="sale-container" key={item.id}>
        <h3 className="fruit-item">{item.fruit}</h3>
        <div className="price-wrapper">
          <h3 className="fruit-price">${item.price}</h3>
          <button className="buy-btn">Buy</button>
        </div>
      </div>
    );
  });

  return (
    <div className="city">
      <div className="city-header-console">
        <h3 className="player-name-display">
          Player: <span className="player-name">{playerName}</span>
        </h3>
        <div className="day-title-wrapper">
          <h3 className="current-day">Day: {currentDate}</h3>
          <h3 className="city-title">Location: {city}</h3>
        </div>
        <div className="sale-display">{items}</div>
      </div>
    </div>
  );
};

export default City;
