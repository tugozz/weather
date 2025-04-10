import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        );
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    }
    fetchCountries();
  }, []);

  const allCityNames = countries.flatMap((country) =>
    country.cities.map((city) => `${city}, ${country.country}`)
  );
  return allCityNames;
};
