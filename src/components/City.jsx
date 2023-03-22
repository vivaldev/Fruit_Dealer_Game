import React from "react";

const City = ({ player, currentDate, city, cities }) => {
  const items = cities
    .find((c) => c.name === city)
    .fruits.map((fruit) => {
      return (
        <div className="sale-container" key={fruit.id}>
          <h3 className="item-quantity">{fruit.quantity} fruits</h3>
          <h3 className="fruit-item">{fruit.fruit}</h3>

          <div className="price-wrapper">
            <h3 className="fruit-price">${fruit.price}</h3>
            <button className="buy-btn">Buy</button>
            <button className="sell-btn">Sell</button>
          </div>
        </div>
      );
    });

  return (
    <div className="city">
      <div className="city-header-console">
        <div className="name-money-wrapper">
          <h3 className="player-name-display">
            Player: <span>{player.name}</span>
          </h3>
          <h3 className="player-money-display">
            Money: <span>${player.money}</span>
          </h3>
        </div>
        <div className="day-title-wrapper">
          <h3 className="current-day">
            Day: <span>{currentDate}</span>
          </h3>
          <h3 className="city-title">
            Location: <span>{city}</span>
          </h3>
        </div>

        <div className="sale-info">
          <h4 className="quantity-info">Quantity</h4>
          <h4 className="item-info">Item</h4>
          <h4 className="price-info">Price</h4>
        </div>

        <div className="sale-display">{items}</div>
      </div>
    </div>
  );
};

export default City;
