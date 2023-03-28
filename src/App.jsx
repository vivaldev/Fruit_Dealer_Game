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
  const [mapScene, setMapScene] = useState(true);
  const [currentDay, setCurrentDay] = useState(0);
  const [cityPrices, setCityPrices] = useState({});
  const [cityQuantities, setCityQuantities] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const [playerItems, setPlayerItems] = useState({
    Kiwi: {
      quantity: 0,
    },
    Pineapple: {
      quantity: 0,
    },
    Watermelon: {
      quantity: 0,
    },
    Strawberry: {
      quantity: 0,
    },
    Mango: {
      quantity: 0,
    },
  });
  const [buyTarget, setBuyTarget] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const [isBought, setIsBought] = useState(false);

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

  function handleBuyClick(key, value, quantity) {
    const newQuantity = { ...cityQuantities };
    const newPlayer = { ...player };
    const newPlayerItems = { ...playerItems };
    let newBuyTarget = { ...buyTarget };

    console.log(key, value, quantity);

    if (newQuantity[key] > 0 && newPlayer.money >= cityPrices[key]) {
      newQuantity[key] -= 1;
      newPlayer.money -= cityPrices[key];
      newPlayerItems[key].quantity += 1;
      newBuyTarget = {
        name: key,
        price: value,
        quantity: quantity - (quantity - 1),
      };
      setIsBought(true);
      setCityQuantities(newQuantity);
      setPlayer(newPlayer);
      setBuyTarget(newBuyTarget);
    }
  }

  /********************************************* */

  const scenes = () => {
    if (gameStarted === false && mapScene === true) {
      return (
        <StartForm
          handleUsernameChange={handleUsernameChange}
          startGame={startGame}
        />
      );
    }

    if (gameStarted === true && mapScene === true) {
      return (
        <Map
          selectedCity={selectedCity}
          travelToCity={travelToCity}
          itemsMinMax={itemsMinMax}
          player={player}
          isBought={isBought}
        />
      );
    }

    if (mapScene === false) {
      return (
        <City
          selectedCity={selectedCity}
          player={player}
          cityPrices={cityPrices}
          cityQuantities={cityQuantities}
          handleBuyClick={handleBuyClick}
          currentDay={currentDay}
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
    setMapScene(false);

    setSelectedCity(cityName);
    setCurrentDay((prevDay) => prevDay + 1);
  }

  function handleTravel() {
    setMapScene(true);
    setIsBought(false);
  }

  function triggerNextDay() {}

  return (
    <div className="App">
      <div className="super-container">
        <div className="left-container">
          <Header />
          {scenes()}
        </div>

        <div className="middle-container">
          {mapScene ? (
            ""
          ) : (
            <MiddleConsole
              triggerNextDay={triggerNextDay}
              handleTravel={handleTravel}
              selectedCity={selectedCity}
              playerItems={playerItems}
              buyTarget={buyTarget}
              player={player.name}
              isBought={isBought}
            />
          )}
        </div>

        <div className="right-container">
          {mapScene ? "" : <PlayerItems playerItems={playerItems} />}
        </div>
      </div>
    </div>
  );
}

export default App;
