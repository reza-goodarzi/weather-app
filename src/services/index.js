import { API_URL } from "../constant";

export const getCurrentWether = async (local = "london", aqi = "no") => {
  try {
    const response = await fetch(
      `${API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&aqi=${aqi}&q=${local}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const searchCity = async (local) => {
  try {
    const response = await fetch(
      `${API_URL}/search.json?key=${process.env.REACT_APP_API_KEY}&q=${local}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const getForecasts = async (local) => {
  try {
    const response = await fetch(
      `${API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${local}&days=10&aqi=no&alerts=no`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    const transformData = data.forecast.forecastday.map((forecast) => ({
      date: new Date(forecast.date).toDateString(),
      avgTemp: forecast.day.avgtemp_c,
      maxTemp: forecast.day.maxtemp_c,
      minTemp: forecast.day.mintemp_c,
    }));

    return transformData;
  } catch (error) {
    throw error;
  }
};
