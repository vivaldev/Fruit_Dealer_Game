import React from "react";
import "../styles/Map.css";

const Map = ({
  selectedCity,
  travelToCity,

  itemsAlgo,
}) => {
  const travelBtn = itemsAlgo.map((c) => {
    return (
      <button
        className="travel-btn"
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
      <div className="map-btn-wrapper">
        {travelBtn}
        {/* {cities.map((city) => {
          return (
            <button
              key={city.name}
              disabled={city.name === selectedCity}
              onClick={() => {
                travelToCity(city.name);
                console.log(city.name);
              }}
              className="travel-btn"
            >
              {city.name.toUpperCase()}
            </button>
          );
        })} */}
      </div>
    </div>
  );
};

export default Map;
