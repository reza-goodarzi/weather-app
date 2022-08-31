import { useContext } from "react";
import styled from "styled-components";
// contexts
import { WeatherContext } from "../context/weather-context";
// components
import Searchbar from "./Searchbar";
// ICONS
import { MdWaterDrop, MdCloud } from "react-icons/md";
import { FaWind } from "react-icons/fa";

function WeatherDetails() {
  const { data } = useContext(WeatherContext);

  return (
    <WeatherDetailsStyle>
      {data ? (
        <>
          <div className="searchbar">
            <Searchbar />
          </div>
          <div className="information">
            <BasicInformationStyle>
              <span className="degree">{Math.round(data.current.temp_c)}°</span>
              <div className="city">
                <span className="name">{data.location.name}</span>
                <span className="date">{new Date(data.location.localtime).toLocaleString()}</span>
                <span className="condition">{data.current.condition.text}</span>
              </div>
              <img
                className="logo"
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
            </BasicInformationStyle>
            <DetailsInformationStyle>
              <div>
                <FaWind className="icon" />
                <span>{data.current.wind_kph} KM</span>
              </div>

              <div>
                <MdCloud className="icon" />
                <span>{data.current.cloud}%</span>
              </div>

              <div>
                <MdWaterDrop className="icon" />
                <span>{data.current.humidity}%</span>
              </div>

              <div>
                <i className="icon">UV</i>
                <span>{data.current.uv}</span>
              </div>
            </DetailsInformationStyle>
          </div>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </WeatherDetailsStyle>
  );
}

export default WeatherDetails;

const WeatherDetailsStyle = styled.div`
  width: 56%;
  height: 68%;
  margin: 2rem 0;

  padding: 2.5rem 4rem;
  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  flex-direction: column;

  .searchbar {
    padding: 1.5rem 1rem;
  }

  .information {
    flex: 1;
    padding: 1.5rem 1rem;
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
  padding: 0.5rem;
  width: 75%;

  .degree {
    font-size: 5rem;
  }

  .city {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 0.8rem;
    }

    .name {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  .logo {
    padding: 0.5rem;
    width: 52px;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));
  }
`;

const DetailsInformationStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    width: 6rem;
    height: 7rem;
    border-radius: 0.5rem;

    background-color: var(--color-white);
    color: var(--color-black);

    .icon {
      font-size: 3rem;
      font-weight: bold;
      cursor: default;
    }

    span {
      font-size: 1rem;
      /* font-weight: bold; */
    }
  }
`;

const Loading = styled.div`
  font-size: 2.5rem;
  text-align: center;
  padding: 5rem 0;
  font-weight: bold;
  text-transform: uppercase;

  color: var(--color-white);
`;
