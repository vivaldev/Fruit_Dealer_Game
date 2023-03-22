import React from "react";

const MiddleConsole = ({ triggerNextDay, handleTravel }) => {
  return (
    <>
      <button onClick={handleTravel}>Travel</button>
      <button onClick={triggerNextDay}>Next Day</button>
    </>
  );
};

export default MiddleConsole;
