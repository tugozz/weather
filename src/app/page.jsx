"use client";
import { Search } from "@/app/components/Search";
import { useEffect, useState } from "react";

import { Logo } from "./components/Logo";
import { Moon } from "./components/Moon";
import { Sun } from "./components/Sun";
import { Container } from "./components/Container";

const Home = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;
    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${cityName}`
      );
    };
    response();
  }, []);

  return (
    <div className="flex h-screen relative">
      <Sun />
      <Moon />
      <Logo />

      {/* <Container /> */}
    </div>
  );
};

export default Home;
