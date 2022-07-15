import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";

import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundStyled>
        <WeatherDetails />
      </BackgroundStyled>
    </>
  );
}

export default App;

const BackgroundStyled = styled.div`
  background-image: url("assets/night.jpg");
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
