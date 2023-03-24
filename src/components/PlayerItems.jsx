import React, { useState, useEffect } from "react";
import "../styles/PlayerItems.css";

const PlayerItems = ({ itemsAlgo }) => {
  console.log(itemsAlgo);

  const [selectedCity, setSelectedCity] = useState("pori");
  const [generatedValues, setGeneratedValues] = useState({});

  console.log(itemsAlgo[0].items.item1);

  const generateRandomPricesAndQuantities = () => {
    // Declaring new empty object
    const newGeneratedPricesAndQuantities = {};
    // Finfing data for the selected city from an array of 'prices' objects
    // using 'find()' method, which have one argument that is 'city' object
    // from the 'prices' array.
    const selectedCityData = itemsAlgo.find(
      (city) => city.city === selectedCity
    );
    // if the selected city is founf in the 'prices' array, the function proceeds
    if (selectedCityData) {
      // and creates a new empty object
      const cityItems = {};
      // It loops throuch each key-value pair in the 'items' of the 'selectedCityData'
      // using the 'Object.entries' method. Each key represents an item name and
      // each value is an object that contains an array of prices and an array of
      // quantitites.
      Object.entries(selectedCityData.items).forEach(([key, value]) => {
        // For each item it extract the min - max price and quantitiy from the arrays
        // using array indexing
        const minPrice = value.price[0].minPrice;
        const maxPrice = value.price[0].maxPrice;
        // it generates random number using given min-max values
        const randomPrice =
          Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        // Same as price above
        const minQuantity = value.quantity[0].minQuantity;
        const maxQuantity = value.quantity[0].maxQuantity;
        const randomQuantity =
          Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) +
          minQuantity;
        // Adds the 'key' (item name) and the random 'price' and 'quantity' values
        // as properties to the 'cityItems' object
        cityItems[key] = { price: randomPrice, quantity: randomQuantity };
      });
      // Once all items is processed, i adds the 'cityItems' object to the
      // 'newGeneratedPricesAndQuantities' object with the 'selectedCity' as
      // the key.
      newGeneratedPricesAndQuantities[selectedCity] = cityItems;
      // set generated values to the state
      setGeneratedValues(newGeneratedPricesAndQuantities);
    }
  };

  useEffect(() => {
    generateRandomPricesAndQuantities();
  }, [selectedCity]);

  console.log(generatedValues);

  const handleBuyClick = (city, item) => {
    const newGeneratedPricesAndQuantities = { ...generatedValues };
    const selectedItem = newGeneratedPricesAndQuantities[city][item];
    // If the selected item exists, increment its quantity by 1
    if (selectedItem) {
      selectedItem.quantity -= 1;
      setGeneratedValues(newGeneratedPricesAndQuantities);
    }
  };

  return (
    <div>
      <label>
        Select a city:
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">--Select--</option>
          {itemsAlgo.map((city) => (
            <option key={city.id} value={city.city}>
              {city.city}
            </option>
          ))}
        </select>
      </label>
      <button onClick={generateRandomPricesAndQuantities}>
        Generate Prices and Quantities
      </button>
      <div>
        {Object.entries(generatedValues).map(([city, items]) => (
          <div key={city}>
            <h2>{city}</h2>
            <ul>
              {Object.entries(items).map(([item, { price, quantity }]) => (
                <li key={item}>
                  {item}: {price} €, {quantity} pcs
                  <button onClick={() => handleBuyClick(city, item)}>
                    Buy
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerItems;
