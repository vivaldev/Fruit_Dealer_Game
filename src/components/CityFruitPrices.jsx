import React from "react";

function CityFruitPrices({ priceAndQuantity }) {
  return (
    <div>
      {priceAndQuantity.map((city) => (
        <div key={city.city}>
          <h3>{city.city}</h3>
          <ul>
            {Object.entries(city.fruits).map(([fruit, { price, quantity }]) => (
              <li key={fruit}>
                {fruit}: price - {price}, quantity - {quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CityFruitPrices;
