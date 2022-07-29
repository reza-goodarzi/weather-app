import { endpoints } from "../lib/api";

export const getCurrentWether = async (local = "london") => {
  try {
    const response = await fetch(`${endpoints.current}${local}`);

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
    const response = await fetch(`${endpoints.search}${local}`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
