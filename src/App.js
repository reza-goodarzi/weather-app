import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";

import WeatherDetails from "./components/WeatherDetails";
import { useContext } from "react";
import { WeatherContext } from "./context/weather-context";

function App() {
  const { data } = useContext(WeatherContext);
  return (
    <>
      <GlobalStyle />
      <BackgroundStyled isDay={Boolean(data?.current?.is_day)}>
        <WeatherDetails />
      </BackgroundStyled>
    </>
  );
}

export default App;

const BackgroundStyled = styled.div`
  background: url(${(props) => (props.isDay ? "assets/day.jpg" : "assets/night.jpg")});
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
