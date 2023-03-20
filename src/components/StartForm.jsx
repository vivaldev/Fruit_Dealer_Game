import React from "react";

const StartForm = ({ handleUsernameChange, startGame }) => {
  return (
    <form className="start-form" onSubmit={startGame}>
      <input
        type="text"
        placeholder="Username..."
        onChange={handleUsernameChange}
      />
      <button type="submit">Start</button>
    </form>
  );
};

export default StartForm;
