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
import Loading from "../components/Loading";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CurrentWeather() {
  const params = useParams();
  const { setCity } = useContext(WeatherContext);
  const { data } = useContext(WeatherContext);

  useEffect(() => {
    if (params.city) {
      setCity(params.city);
    }
  }, [params.city, setCity]);
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
        <Loading />
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

    @media screen and (max-width: 640px) {
      padding: 0;
    }
  }

  .information {
    flex: 1;
    padding: 1.5rem 1rem;
    color: var(--color-white);
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      gap: 5rem;
    }
  }
`;

const BasicInformationStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  width: 75%;

  @media screen and (max-width: 640px) {
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  .degree {
    font-size: 5rem;

    @media screen and (max-width: 640px) {
      font-size: 8rem;
      width: 100%;
      text-align: center;
    }
  }

  .city {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 0.8rem;
      @media screen and (max-width: 640px) {
        font-size: 1.5rem;
      }
    }

    .name {
      font-size: 1.5rem;
      font-weight: 500;

      @media screen and (max-width: 640px) {
        font-size: 3rem;
      }
    }
  }

  .logo {
    padding: 0.5rem;
    width: 64px;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.8));
    @media screen and (max-width: 640px) {
      width: 44px;
      align-self: flex-start;
      padding: 0 0.5rem;
    }
  }
`;

const DetailsInformationStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-end;

  @media screen and (max-width: 640px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;
