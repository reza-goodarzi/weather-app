import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";

// ICONS
import { MdWaterDrop, MdCloud } from "react-icons/md";
import { FaWind } from "react-icons/fa";

function WeatherDetails() {
  return (
    <WeatherDetailsStyle>
      <div className="searchbar">
        <Searchbar />
      </div>
      <div className="information">
        <BasicInformationStyle>
          <span className="degree">08°</span>
          <div className="city">
            <span className="name">London</span>
            <span className="date">06:09 - Sunday, 6 Jun 22</span>
            <span className="condition">Sunny</span>
          </div>
          <img
            className="logo"
            src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
            alt="Sunny"
          />
        </BasicInformationStyle>
        <DetailsInformationStyle>
          <div>
            <FaWind className="icon" />
            <span>4.3 KM</span>
          </div>

          <div>
            <MdCloud className="icon" />
            <span>65%</span>
          </div>

          <div>
            <MdWaterDrop className="icon" />
            <span>25%</span>
          </div>

          <div>
            <i className="icon">UV</i>
            <span>5</span>
          </div>
        </DetailsInformationStyle>
      </div>
    </WeatherDetailsStyle>
  );
}

export default WeatherDetails;

const WeatherDetailsStyle = styled.div`
  width: 56%;
  height: 68%;
  margin: 8rem 0;

  padding: 4rem 6rem;
  border-radius: 2rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  flex-direction: column;

  .searchbar {
    background: #ccff34;
    padding: 3rem 2rem;
  }

  .information {
    flex: 1;
    padding: 3rem 2rem;
    color: var(--color-white);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BasicInformationStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2rem;
  width: 75%;

  .degree {
    font-size: 7rem;
  }

  .city {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 1.4rem;
    }

    .name {
      font-size: 2.8rem;
      font-weight: 500;
    }
  }

  .logo {
    padding: 1rem;
    width: 52px;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));
  }
`;

const DetailsInformationStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    width: 10rem;
    height: 12rem;
    border-radius: 1rem;

    background-color: var(--color-white);
    color: var(--color-black);

    .icon {
      font-size: 4.4rem;
      font-weight: bold;
      cursor: default;
    }

    span {
      font-size: 2rem;
      /* font-weight: bold; */
    }
  }
`;
