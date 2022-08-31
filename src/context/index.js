import { WeatherContextProvider } from "./weather-context";

export const ContextProvider = ({ children }) => (
  <WeatherContextProvider>{children}</WeatherContextProvider>
);
