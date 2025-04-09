"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { Logo } from "./components/Logo";
import { Moon } from "./components/Moon";
import { Sun } from "./components/Sun";

const Home = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});

  const weatherApiKey = process.env.WEATHER_API_KEY;
  console.log("weatherApiKey", weatherApiKey);

  useEffect(() => {
    const getWeather = async () => {
      const weather = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setWeather(weather.data);
    };

    getWeather();
  }, [cityName]);

  console.log("weather", weather);

  // const dayTemp = ......
  //         https://api.weatherapi.com/v1/forecast.json?key=1d7992f7f8e448bdafb40443250704&q=Ulaanbaatar
  return (
    <div className="flex h-screen ">
      <Sun />
      <Moon />
      <Logo />
    </div>
  );
};

export default Home;
