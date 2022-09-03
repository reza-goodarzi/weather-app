import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//Pages
import CurrentWeather from "./pages/CurrentWeather";
import DetailWeather from "./pages/DetailWeather";
import FutureWeather from "./pages/FutureWeather";
//Components
import GlobalStyle from "./styles/globalStyle";
import Layout from "./components/Layout";
//Contexts
import { WeatherContext } from "./context/weather-context";

function App() {
  const { data } = useContext(WeatherContext);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />

      <Layout isDay={Boolean(data?.current?.is_day)}>
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/detail" element={<DetailWeather />} />
          <Route path="/future" element={<FutureWeather />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
