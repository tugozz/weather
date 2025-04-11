"use client";

import { useEffect, useState, useRef } from "react";

import { Logo } from "./components/Logo";
import { Moon } from "./components/Moon";
import { Sun } from "./components/Sun";
import { SearchInput } from "./components/SearchInput";

import axios from "axios";

const Home = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({
    dayTemperature: 0,
    nightTemperature: 0,
    textCondition: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCitySelect = (city) => {
    setCityName(city);
  };

  useEffect(() => {
    const getWeather = async () => {
      const weatherApiKey = process.env.WEATHER_API_KEY;
      try {
        setLoading(true);
        const { data } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const dayTemperature = data?.forecast?.forecastday?.[0].day.maxtemp_c;
        const nightTemperature = data?.forecast?.forecastday?.[0].day.mintemp_c;
        const textCondition =
          data?.forecast?.forecastday?.[0].day.condition.text;
        const date = data?.forecast?.forecastday[0].date;

        const location = data?.location?.name;

        setWeather({
          dayTemperature,
          nightTemperature,
          textCondition,
          date,
          location,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [cityName]);

  return (
    <div className="flex h-screen ">
      <SearchInput onCitySelect={handleCitySelect} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Sun weather={weather} />
          <Moon weather={weather} />
        </>
      )}
      <Logo />
    </div>
  );
};

export default Home;
