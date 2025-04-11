import React, { useState } from "react";
import { useCountries } from "../hooks/useCountries";

export const SearchInput = ({ onCitySelect }) => {
  const allCityNames = useCountries();

  const [input, setInput] = useState("");

  const filteredCityNames = allCityNames
    .filter((city) => city.toLowerCase().startsWith(input.toLowerCase()))
    .slice(0, 4);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCitySelect = (city) => {
    setInput(city);
    onCitySelect(city);
  };

  return (
    <div className="absolute">
      <div
        className="relative
       top-10 left-36 z-20"
      >
        <div className="flex items-center bg-white rounded-full text-[19px] shadow-md px-2">
          <img src="/search.svg" alt="" className="w-12 h-12" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Input your city"
            className="w-96 py-2.5 pl-4 pr-3 outline-none font-bold opacity-100"
          />
        </div>

        {input && (
          <div className="absolute top-20 left-30 w-full bg-white border rounded-lg shadow-lg">
            {filteredCityNames.map((city, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
