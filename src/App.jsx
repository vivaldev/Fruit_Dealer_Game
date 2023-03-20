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
        <Emojis />

        {gameStarted ? (
          <City playerName={playerName} city="Pori" currentDate={currentDay} />
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
