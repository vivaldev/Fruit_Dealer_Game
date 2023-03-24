import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import StartForm from "./components/StartForm";
import City from "./components/City";
import Map from "./components/Map";
import PlayerItems from "./components/PlayerItems";
import MiddleConsole from "./components/MiddleConsole";
import City2 from "./components/City2";

function App() {
  const [player, setPlayer] = useState({
    name: "",
    money: 15,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [firstScene, setFirstScene] = useState(true);
  const [currentDay, setCurrentDay] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [cityPrices, setCityPrices] = useState([]);
  const [cityQuantities, setCityQuantities] = useState([]);

  const [itemsAlgo, setItemsAlgo] = useState([
    {
      id: 1,
      city: "Pori",
      items: {
        item1: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item2: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item3: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item4: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item5: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
      },
    },
    {
      id: 2,
      city: "Tampere",
      items: {
        item1: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item2: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item3: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item4: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item5: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
      },
    },
    {
      id: 3,
      city: "Helsinki",
      items: {
        item1: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item2: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item3: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item4: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
        item5: {
          price: [{ minPrice: 1, maxPrice: 6 }],
          quantity: [{ minQuantity: 0, maxQuantity: 10 }],
        },
      },
    },
  ]);

  // ALGORITM DEMO

  const [selectedCity, setSelectedCity] = useState("Pori");
  const [generatedValues, setGeneratedValues] = useState({});

  const generateValues = () => {
    // Finding data for the selected city from the 'prices' array
    const selectedCityData = itemsAlgo.find(
      (city) => city.city === selectedCity
    );
    // If the selected city is found in the 'prices' array, the function proceeds
    if (selectedCityData) {
      const cityPrices = {};
      const cityQuantities = {};
      Object.entries(selectedCityData.items).forEach(([key, value]) => {
        const minPrice = value.price[0].minPrice;
        const maxPrice = value.price[0].maxPrice;
        const randomPrice =
          Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
        // Add the random price to the 'cityPrices' object
        cityPrices[key] = randomPrice;

        const minQuantity = value.quantity[0].minQuantity;
        const maxQuantity = value.quantity[0].maxQuantity;
        const randomQuantity =
          Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) +
          minQuantity;
        // Add the random quantity to the 'cityQuantities' object
        cityQuantities[key] = randomQuantity;
      });
      // Set the 'cityPrices' and 'cityQuantities' states to the new objects
      setCityPrices(cityPrices);
      setCityQuantities(cityQuantities);
    }
  };

  useEffect(() => {
    generateValues();
  }, []);

  console.log(`Generated Values: ${generatedValues}`);

  const handleBuyClick = (city, item) => {
    const newGeneratedPricesAndQuantities = { ...generatedValues };
    const selectedItem = newGeneratedPricesAndQuantities[city][item];
    // If the selected item exists, increment its quantity by 1
    if (selectedItem) {
      selectedItem.quantity -= 1;
      setGeneratedValues(newGeneratedPricesAndQuantities);
    }
  };

  /********************************************* */

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
          selectedCity={selectedCity}
          travelToCity={travelToCity}
          cities={cities}
        />
      );
    }

    if (firstScene === false) {
      return (
        // <City
        //   player={player}
        //   currentDate={currentDate}
        //   city={selectedCity}
        //   cities={cities}
        //   priceAndQuantity={generatedValues}
        // />
        <City2
          itemsAlgo={itemsAlgo}
          generatedValues={generatedValues}
          selectedCity={selectedCity}
          player={player}
          currentDay={currentDay}
          cityPrices={cityPrices}
          cityQuantities={cityQuantities}
        />
      );
    }
  };

  function handleUsernameChange(e) {
    // console.log(e.target.value);
    setPlayer({ ...player, name: e.target.value });
  }

  function startGame(e) {
    e.preventDefault();
    setGameStarted(true);
    setCurrentDay((prevDay) => prevDay + 1);
  }

  function travelToCity(cityName) {
    setFirstScene(false);
    setCurrentCity(cityName);
    setSelectedCity(cityName);
    generateValues();
  }

  function handleTravel() {}

  function triggerNextDay() {}

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
          {firstScene ? "" : <PlayerItems itemsAlgo={itemsAlgo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
