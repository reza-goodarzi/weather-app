import React, { createContext, useEffect, useState } from "react";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { errorToast } from "../lib";
import { getCurrentWether } from "../services";
import { toast } from "react-toastify";

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
    if (coords && !data) {
      fetchCurrentWeather(coords);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords, data]);

  useEffect(() => {
    if (error) errorToast(error);
  }, [error]);

  const fetchCurrentWeather = (location) => {
    getCurrentWether(location)
      .then((res) => {
        setData(res);
        if (data) {
          toast(`Getting ${res.location.name} weather information was successful.`, {
            type: "success",
          });
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <WeatherContext.Provider value={{ data, error, fetchCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
