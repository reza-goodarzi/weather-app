import { useContext } from "react";
import styled from "styled-components";
// contexts
import { WeatherContext } from "../context/weather-context";
// components
import Searchbar from "../components/Searchbar";
// ICONS
import { MdWaterDrop, MdCloud } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import Card from "../components/Card";

function CurrentWeather() {
  const { data } = useContext(WeatherContext);

  return (
    <CurrentWeatherStyle>
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
              <Card icon={<FaWind />}>{data.current.wind_kph} KM</Card>
              <Card icon={<MdCloud />}>{data.current.cloud}%</Card>
              <Card icon={<MdWaterDrop />}>{data.current.humidity}%</Card>
              <Card icon="UV">{data.current.uv}</Card>
            </DetailsInformationStyle>
          </div>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </CurrentWeatherStyle>
  );
}

export default CurrentWeather;

const CurrentWeatherStyle = styled.div`
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
`;

const Loading = styled.div`
  font-size: 2.5rem;
  text-align: center;
  padding: 5rem 0;
  font-weight: bold;
  text-transform: uppercase;

  color: var(--color-white);
`;
