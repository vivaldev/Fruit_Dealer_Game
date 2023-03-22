import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import StartForm from "./components/StartForm";
import City from "./components/City";
import Map from "./components/Map";
import PlayerItems from "./components/PlayerItems";
import MiddleConsole from "./components/MiddleConsole";

function getPriceAndQuantity(cityFruitPrices) {
  const priceAndQuantity = {};
  for (const cityFruit of cityFruitPrices) {
    const city = cityFruit.city;
    priceAndQuantity[city] = {};
    for (const [
      fruit,
      {
        price: [minPrice, maxPrice],
        quantity: [minQuantity, maxQuantity],
      },
    ] of Object.entries(cityFruit.fruits)) {
      const price = Math.round(
        Math.random() * (maxPrice - minPrice) + minPrice
      );
      const quantity = Math.round(
        Math.random() * (maxQuantity - minQuantity) + minQuantity
      );
      priceAndQuantity[city][fruit] = { price, quantity };
    }
  }
  return priceAndQuantity;
}

function App() {
  const [player, setPlayer] = useState({
    name: "",
    money: 15,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [firstScene, setFirstScene] = useState(true);
  const [currentDate, setCurrentDate] = useState(0);
  const [currentCity, setCurrentCity] = useState("");

  const [cityFruitPrices, setCityFruitPrices] = useState([
    {
      city: "Pori",
      fruits: {
        pineapple: {
          price: [2, 5],
          quantity: [0, 10],
        },
        mango: {
          price: [5, 10],
          quantity: [0, 4],
        },
        watermelon: {
          price: [4, 8],
          quantity: [0, 5],
        },
        pear: {
          price: [1, 5],
          quantity: [0, 15],
        },
        kiwi: {
          price: [1, 7],
          quantity: [0, 8],
        },
      },
    },
    {
      city: "Turku",
      fruits: {
        pineapple: {
          price: [3, 6],
          quantity: [0, 8],
        },
        mango: {
          price: [4, 8],
          quantity: [0, 6],
        },
        watermelon: {
          price: [5, 10],
          quantity: [0, 6],
        },
        pear: {
          price: [2, 6],
          quantity: [0, 12],
        },
        kiwi: {
          price: [2, 8],
          quantity: [0, 10],
        },
      },
    },
    {
      city: "Tampere",
      fruits: {
        pineapple: {
          price: [2, 6],
          quantity: [0, 12],
        },
        mango: {
          price: [3, 7],
          quantity: [0, 8],
        },
        watermelon: {
          price: [6, 12],
          quantity: [0, 8],
        },
        pear: {
          price: [1, 4],
          quantity: [0, 20],
        },
        kiwi: {
          price: [2, 6],
          quantity: [0, 12],
        },
      },
    },
    {
      city: "Helsinki",
      fruits: {
        pineapple: {
          price: [4, 8],
          quantity: [0, 15],
        },
        mango: {
          price: [7, 12],
          quantity: [0, 5],
        },
        watermelon: {
          price: [5, 10],
          quantity: [0, 10],
        },
        pear: {
          price: [2, 6],
          quantity: [0, 18],
        },
        kiwi: {
          price: [3, 9],
          quantity: [0, 14],
        },
      },
    },
    {
      city: "Rauma",
      fruits: {
        pineapple: {
          price: [3, 7],
          quantity: [0, 8],
        },
        mango: {
          price: [6, 11],
          quantity: [0, 4],
        },
        watermelon: {
          price: [4, 9],
          quantity: [0, 6],
        },
        pear: {
          price: [1, 4],
          quantity: [0, 16],
        },
        kiwi: {
          price: [2, 7],
          quantity: [0, 10],
        },
      },
    },
  ]);

  const [priceAndQuantity, setPriceAndQuantity] = useState(() =>
    getPriceAndQuantity(cityFruitPrices)
  );

  console.log(priceAndQuantity);

  const cities = [
    {
      name: "Pori",
      fruits: [
        {
          id: 1,
          fruit: "Pineapple",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 2,
        },
        {
          id: 2,
          fruit: "Mango",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 5,
        },
        {
          id: 3,
          fruit: "Watermelon",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 3,
        },
        {
          id: 4,
          fruit: "Pear",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 5,
        },
        {
          id: 5,
          fruit: "Kiwi",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 4,
        },
      ],
    },
    {
      name: "Turku",
      fruits: [
        {
          id: 1,
          fruit: "Pineapple",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 4,
        },
        {
          id: 2,
          fruit: "Mango",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 3,
        },
        {
          id: 3,
          fruit: "Watermelon",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 6,
        },
        {
          id: 4,
          fruit: "Pear",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 2,
        },
        {
          id: 5,
          fruit: "Kiwi",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 1,
        },
      ],
    },
    {
      name: "Helsinki",
      fruits: [
        {
          id: 1,
          fruit: "Pineapple",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 4,
        },
        {
          id: 2,
          fruit: "Mango",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 3,
        },
        {
          id: 3,
          fruit: "Watermelon",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 6,
        },
        {
          id: 4,
          fruit: "Pear",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 2,
        },
        {
          id: 5,
          fruit: "Kiwi",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 1,
        },
      ],
    },
    {
      name: "Tampere",
      fruits: [
        {
          id: 1,
          fruit: "Pineapple",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 4,
        },
        {
          id: 2,
          fruit: "Mango",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 3,
        },
        {
          id: 3,
          fruit: "Watermelon",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 6,
        },
        {
          id: 4,
          fruit: "Pear",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 2,
        },
        {
          id: 5,
          fruit: "Kiwi",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 1,
        },
      ],
    },
    {
      name: "Rauma",
      fruits: [
        {
          id: 1,
          fruit: "Pineapple",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 4,
        },
        {
          id: 2,
          fruit: "Mango",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 3,
        },
        {
          id: 3,
          fruit: "Watermelon",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 6,
        },
        {
          id: 4,
          fruit: "Pear",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 2,
        },
        {
          id: 5,
          fruit: "Kiwi",
          price: Math.floor(Math.random() * 10) + 1,
          quantity: 1,
        },
      ],
    },
    // Add more cities with different fruits and prices
  ];

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
          currentCity={currentCity}
          travelToCity={travelToCity}
          cities={cities}
        />
      );
    }

    if (firstScene === false) {
      return (
        <City
          player={player}
          currentDate={currentDate}
          city={currentCity}
          cities={cities}
        />
      );
    }
  };

  function handleUsernameChange(e) {
    // console.log(e.target.value);
    setPlayer({ ...player, name: e.target.value });
  }

  function startGame(e) {
    e.preventDefault();
    setGameStarted(true);
    setCurrentDate((prevDay) => prevDay + 1);
  }

  function travelToCity(cityName) {
    setFirstScene(false);
    setCurrentCity(cityName);
    console.log(`cityName is: ${cityName}`);
  }

  function handleTravel() {
    console.log("Pressed: Travel");
  }

  function triggerNextDay() {
    console.log("Pressed: Next Day");
  }

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
