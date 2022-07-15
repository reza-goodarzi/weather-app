import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";

function WeatherDetails() {
  return (
    <WeatherDetailsStyle>
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="information">
        <div>city details</div>
        <div>weather details</div>
      </div>
    </WeatherDetailsStyle>
  );
}

export default WeatherDetails;

const WeatherDetailsStyle = styled.div`
  width: 56%;
  height: 68%;
  padding: 4rem 6rem;
  border-radius: 2rem;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  display: flex;
  flex-direction: column;

  .searchbar {
    background: #ccff34;
    padding: 3rem 2rem;
  }

  .information {
    background-color: #ff5899;
    flex: 1;
    padding: 3rem 2rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
