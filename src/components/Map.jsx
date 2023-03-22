import React from "react";

const Map = ({ currentCity, travelToCity, cities }) => {
  return (
    <div className="Map">
      <div className="map-header">
        <p className="map-title">Choose your destination:</p>
      </div>
      <div className="map-btn-wrapper">
        {cities.map((city) => {
          return (
            <button
              key={city.name}
              disabled={city.name === currentCity}
              onClick={() => {
                travelToCity(city.name);
                console.log(city.name);
              }}
              className="travel-btn"
            >
              {city.name.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Map;
