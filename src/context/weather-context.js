import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { getCurrentWether } from "../services";

export const WeatherContext = createContext({
  data: null,
  error: null,
  fetchCurrentWeather: (location, aqi) => {},
});

export function WeatherContextProvider({ children }) {
  const coords = useCurrentLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (coords) {
      fetchCurrentWeather(coords);
    }
  }, [coords]);

  const fetchCurrentWeather = (location, aqi = "no") => {
    getCurrentWether(location, aqi)
      .then((res) => setData(res))
      .catch((error) => setError(error));
  };

  return (
    <WeatherContext.Provider value={{ data, error, fetchCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
