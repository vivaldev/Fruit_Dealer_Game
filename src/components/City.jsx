import React from "react";
import "../styles/City.css";

const City = ({
  selectedCity,
  player,
  currentDay,
  cityPrices,
  cityQuantities,
  handleBuyClick,
}) => {
  return (
    <div className="city">
      {/* HEADER CONSOLE */}
      <div className="name-money-wrapper">
        <h3 className="player-name-display">
          Player: <span>{player.name}</span>
        </h3>
        <h3 className="player-money-display">
          Money: <span>${player.money}</span>
        </h3>
      </div>
      <div className="city-header-console">
        <div className="day-title-wrapper">
          <h3>
            Location: <span>{selectedCity}</span>
          </h3>
          <h3>
            Day: <span>{currentDay}</span>
          </h3>
        </div>
      </div>

      {/* SALES CONSOLE */}
      <div className="sales-container">
        <div className="inner-sales-container">
          <div className="quantity-wrapper">
            {Object.entries(cityQuantities).map(([key, value]) => (
              <div key={key} className="quantity-name-wrapper">
                <h2 className="item-quantity">
                  {value} <span className="quantity-pieces">pcs.</span>
                </h2>
                <h2 className="item-name">{key}</h2>
              </div>
            ))}
          </div>

          <div className="price-wrapper">
            {Object.entries(cityPrices).map(([key, value]) => (
              <div key={key} className="price-buy-wrapper">
                <h2 className="item-price">${value}</h2>
                <button
                  onClick={() =>
                    handleBuyClick(key, value, cityQuantities[key])
                  }
                  className="buy-btn"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
