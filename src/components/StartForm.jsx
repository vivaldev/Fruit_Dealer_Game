import React from "react";
import Emojis from "./Emojis";

const StartForm = ({ handleUsernameChange, startGame }) => {
  return (
    <>
      {" "}
      <Emojis />
      <form className="start-form" onSubmit={startGame}>
        <input
          type="text"
          placeholder="Username..."
          onChange={handleUsernameChange}
        />
        <button type="submit">Start</button>
      </form>
    </>
  );
};

export default StartForm;
