import React, { createContext, useEffect, useState } from "react";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import { errorToast } from "../lib";
import { getCurrentWether } from "../services";
import { toast } from "react-toastify";

export const WeatherContext = createContext({
  data: null,
  error: null,
  fetchCurrentWeather: (location, aqi) => {},
  setCity: (name) => {},
});

export function WeatherContextProvider({ children }) {
  const coords = useCurrentLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (city && !data) {
      fetchCurrentWeather(city);
    }
    if (coords && !data && !city) {
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
        setCity("");

        if (data) {
          toast(`Getting ${res.location.name} weather information was successful.`, {
            type: "success",
          });
        }
      })
      .catch((error) => {
        if (city) {
          setCity("");
          fetchCurrentWeather(coords);
          window.history.replaceState(null, "", "/");
        } else {
          setError(error);
        }
      });
  };

  return (
    <WeatherContext.Provider value={{ data, error, fetchCurrentWeather, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
}
