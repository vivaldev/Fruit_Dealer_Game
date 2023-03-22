import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StartForm from "./components/StartForm";
import City from "./components/City";
import Map from "./components/Map";
import PlayerItems from "./components/PlayerItems";
import MiddleConsole from "./components/MiddleConsole";

function App() {
  const [player, setPlayer] = useState({
    name: "",
    money: 15,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [firstScene, setFirstScene] = useState(true);
  const [currentDate, setCurrentDate] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [prices, setPrices] = useState([
    {
      Pori: {
        Pineapple: null,
        Mango: null,
        Watermelon: null,
        Pear: null,
        Kiwi: null,
      },
    },
    {
      Turku: {
        Pineapple: null,
        Mango: null,
        Watermelon: null,
        Pear: null,
        Kiwi: null,
      },
    },
    {
      Helsinki: {
        Pineapple: null,
        Mango: null,
        Watermelon: null,
        Pear: null,
        Kiwi: null,
      },
    },
    {
      Tampere: {
        Pineapple: null,
        Mango: null,
        Watermelon: null,
        Pear: null,
        Kiwi: null,
      },
    },
    {
      Rauma: {
        Pineapple: null,
        Mango: null,
        Watermelon: null,
        Pear: null,
        Kiwi: null,
      },
    },
  ]);

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

  function getPrices() {}

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
