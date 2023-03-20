import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <h1>Fruit Dealer</h1>

        <form className="start-form">
          <input type="text" placeholder="Username..." />
          <button type="submit">Start</button>
        </form>
      </div>
    </div>
  );
}

export default App;
