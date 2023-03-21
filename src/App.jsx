import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Emojis from "./components/Emojis";
import StartForm from "./components/StartForm";
import City from "./components/City";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  const fruitsArray = [
    {
      id: 1,
      fruit: "Pineapple",
      price: 2.3,
      quantity: 2,
    },
    {
      id: 2,
      fruit: "Mango",
      price: 5.5,
      quantity: 5,
    },
    {
      id: 3,
      fruit: "Watermelon",
      price: 4.2,
      quantity: 3,
    },
    {
      id: 4,
      fruit: "Pear",
      price: 1.2,
      quantity: 5,
    },
    {
      id: 5,
      fruit: "Kiwi",
      price: 1.6,
      quantity: 4,
    },
  ];

  function handleUsernameChange(e) {
    // console.log(e.target.value);

    setPlayerName(e.target.value);
  }

  function startGame(e) {
    e.preventDefault();
    console.log(`The player is ${playerName}`);
    setGameStarted(true);
    console.log(`Game is started? ${gameStarted}`);
    setCurrentDay((prevDay) => prevDay + 1);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />

        {gameStarted ? (
          <City
            playerName={playerName}
            city="Pori"
            currentDate={currentDay}
            fruitsArray={fruitsArray}
          />
        ) : (
          <StartForm
            handleUsernameChange={handleUsernameChange}
            startGame={startGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
