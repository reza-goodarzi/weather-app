export const API_URL = "http://api.weatherapi.com/v1";

export const endpoints = {
  current: `${API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&aqi=no&q=`,
  search: `${API_URL}/search.json?key=${process.env.REACT_APP_API_KEY}&q=`,
};
