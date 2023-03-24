import React from "react";
import City from "./City";
import "../styles/City.css";

const City2 = ({
  itemsAlgo,
  generatedValues,
  selectedCity,
  player,
  currentDay,
  cityPrices,
  cityQuantities,
}) => {
  console.log();
  return (
    <div className="city">
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
      <div className="sale-container">
        <div className="quantity-wrapper">
          {Object.entries(cityQuantities).map(([key, value]) => (
            <>
              <h3 key={key} className="item-quantity">
                <span>{value} </span>
                {key}
              </h3>
            </>
          ))}
        </div>

        <div className="price-wrapper">
          {Object.entries(cityPrices).map(([key, value]) => (
            <h3 key={key}>{value}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default City2;
