import { API_URL } from "../lib/constant";

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
    console.error(error);
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
    console.error(error);
  }
};
