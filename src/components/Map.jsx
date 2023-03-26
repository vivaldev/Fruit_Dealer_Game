import React from "react";
import "../styles/Map.css";

const Map = ({
  selectedCity,
  travelToCity,

  itemsMinMax,
}) => {
  const travelBtn = itemsMinMax.map((c) => {
    return (
      <button
        className="travel-to-city-btn"
        disabled={c.city === selectedCity}
        onClick={() => travelToCity(c.city)}
      >
        {c.city}
      </button>
    );
  });
  return (
    <div className="Map">
      <div className="map-header">
        <p className="map-title">Choose your destination:</p>
      </div>
      <div className="map-btn-wrapper">{travelBtn}</div>
    </div>
  );
};

export default Map;
