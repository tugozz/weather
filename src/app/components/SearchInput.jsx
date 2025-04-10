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
      <SearchInput />
      <div className="flex-1 bg-[#f2f4f6] relative">
        <div className="flex flex-1 absolute top-10 left-30 rounded-full text-[19px] bg-white">
          <img src="/search.svg" alt="" className="w-12 h-12" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Input your city"
            className="w-142 py-2.5 pl-4 pr-3 outline-none font-bold opacity-20"
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
