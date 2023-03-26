import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./database/itemsMinMax.js";

import Header from "./components/Header";
import StartForm from "./components/StartForm";
import City from "./components/City";
import Map from "./components/Map";
import PlayerItems from "./components/PlayerItems";
import MiddleConsole from "./components/MiddleConsole";
import itemsMinMax from "./database/itemsMinMax.js";

function App() {
  const [player, setPlayer] = useState({
    name: "",
    money: 25,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [firstScene, setFirstScene] = useState(true);
  const [currentDay, setCurrentDay] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [cityPrices, setCityPrices] = useState({});
  const [cityQuantities, setCityQuantities] = useState({});

  const [selectedCity, setSelectedCity] = useState("");
  const [generatedValues, setGeneratedValues] = useState({});

  const generateValues = () => {
    // Finding data for the selected city from the 'prices' array
    const selectedCityData = itemsMinMax.find(
      (city) => city.city === selectedCity
    );

    // If the selected city is found in the 'prices' array, the function proceeds
    if (selectedCityData) {
      const cityPrices = {};
      const cityQuantities = {};

      // By using Object.entries method, we iterate and
      // initialize each 'key-value' pair to minPrice and
      // maxPrice variables.
      Object.entries(selectedCityData.items).forEach(([key, value]) => {
        const minPrice = value.price[0].minPrice;
        const maxPrice = value.price[0].maxPrice;

        // Those values are used for creating randomPrice value.
        const randomPrice =
          Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        // Add the random price to the 'cityPrices' object
        cityPrices[key] = randomPrice;

        // Same happend for quantity
        const minQuantity = value.quantity[0].minQuantity;
        const maxQuantity = value.quantity[0].maxQuantity;
        const randomQuantity =
          Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) +
          minQuantity;
        // Add the random quantity to the 'cityQuantities' object
        cityQuantities[key] = randomQuantity;
      });
      // Set the 'cityPrices' and 'cityQuantities' states to the new objects
      setCityPrices(cityPrices);
      setCityQuantities(cityQuantities);
    }
  };

  useEffect(() => {
    generateValues();
  }, [selectedCity]);

  function handleBuyClick(item, value) {
    const newQuantity = { ...cityQuantities };
    const newPlayer = { ...player };

    if (newQuantity[item] > 0 && newPlayer.money >= cityPrices[item]) {
      newQuantity[item] -= 1;
      newPlayer.money -= cityPrices[item];
      setCityQuantities(newQuantity);
      setPlayer(newPlayer);
    }
  }

  /********************************************* */

  const scenes = () => {
    if (gameStarted === false && firstScene === true) {
      return (
        <StartForm
          handleUsernameChange={handleUsernameChange}
          startGame={startGame}
        />
      );
    }

    if (gameStarted === true && firstScene === true) {
      return (
        <Map
          selectedCity={selectedCity}
          travelToCity={travelToCity}
          itemsMinMax={itemsMinMax}
        />
      );
    }

    if (firstScene === false) {
      return (
        <City
          selectedCity={selectedCity}
          player={player}
          currentDay={currentDay}
          cityPrices={cityPrices}
          cityQuantities={cityQuantities}
          handleBuyClick={handleBuyClick}
        />
      );
    }
  };

  function handleUsernameChange(e) {
    setPlayer({ ...player, name: e.target.value });
  }

  function startGame(e) {
    e.preventDefault();
    setGameStarted(true);
    setCurrentDay((prevDay) => prevDay + 1);
  }

  function travelToCity(cityName) {
    setFirstScene(false);
    setCurrentCity(cityName);
    setSelectedCity(cityName);
    generateValues();
  }

  function handleTravel() {}

  function triggerNextDay() {}

  return (
    <div className="App">
      <div className="super-container">
        <div className="left-container">
          <Header />
          {scenes()}
        </div>

        <div className="middle-container">
          {firstScene ? (
            ""
          ) : (
            <MiddleConsole
              triggerNextDay={triggerNextDay}
              handleTravel={handleTravel}
              selectedCity={selectedCity}
            />
          )}
        </div>

        <div className="right-container">
          {firstScene ? "" : <PlayerItems />}
        </div>
      </div>
    </div>
  );
}

export default App;
