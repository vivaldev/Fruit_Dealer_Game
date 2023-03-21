import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Emojis from "./components/Emojis";
import StartForm from "./components/StartForm";
import City from "./components/City";
import Map from "./components/Map";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [firstScene, setFirstScene] = useState(true);
  const [currentDate, setCurrentDate] = useState(0);
  const [currentCity, setCurrentCity] = useState("");

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
    // Add more cities with different fruits and prices
  ];

  function handleUsernameChange(e) {
    // console.log(e.target.value);
    setPlayerName(e.target.value);
  }

  function startGame(e) {
    e.preventDefault();
    setGameStarted(true);
    setCurrentDate((prevDay) => prevDay + 1);
  }

  function travelToCity(cityName) {
    setFirstScene(false);
    setCurrentCity(cityName);
  }

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

    if (currentCity === "Pori" && firstScene === false) {
      return (
        <City
          playerName={playerName}
          currentDate={currentDate}
          city={currentCity}
          cities={cities}
        />
      );
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        {scenes()}
      </div>
    </div>
  );
}

export default App;
