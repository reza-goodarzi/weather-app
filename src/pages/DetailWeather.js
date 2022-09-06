import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import MoonPhase from "../components/MoonPhase";
import Loading from "../components/Loading";

import { WeatherContext } from "../context/weather-context";

import { getAstronomy } from "../services";
import { errorToast } from "../lib";
import { airQuality } from "../constant";

// Icons
import { BsFillSunriseFill, BsFillSunsetFill, BsFlagFill } from "react-icons/bs";
import { WiMoonrise, WiMoonset } from "react-icons/wi";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { GiWindsock } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";

function DetailWeather() {
  const { data } = useContext(WeatherContext);
  const [astronomy, setAstronomy] = useState(null);

  useEffect(() => {
    if (data) {
      getAstronomy(data.location.name)
        .then((astro) => setAstronomy(astro))
        .catch((error) => errorToast(error));
    }
  }, [data]);

  if (!data || !astronomy) {
    return <Loading />;
  }

  return (
    <>
      <Searchbar />
      <DetailWeatherStyle>
        <p className="title">
          Details of ({data.location.name} - {data.location.country})
        </p>
        <Container>
          <Card title="Country" icon={<BsFlagFill />}>
            {data.location.country}
          </Card>

          <Card title="Temperature in celsius" icon={<TbTemperatureCelsius />}>
            {data.current.temp_c}°
          </Card>

          <Card title="Temperature in fahrenheit" icon={<TbTemperatureFahrenheit />}>
            {data.current.temp_f}°
          </Card>

          <Card title="Visibility in KM" icon={<MdVisibility />}>
            {data.current.vis_km} KM
          </Card>

          <Card title="Wind direction" icon={<GiWindsock />}>
            {data.current.wind_dir}
          </Card>
        </Container>
        <p className="title">Astronomy</p>
        <Container>
          <Card title="Sunrise" icon={<BsFillSunriseFill />}>
            {astronomy.sunrise}
          </Card>
          <Card title="Sunset" icon={<BsFillSunsetFill />}>
            {astronomy.sunset}
          </Card>
          <Card title="Moonrise" icon={<WiMoonrise />}>
            {astronomy.moonrise}
          </Card>
          <Card title="Moonset" icon={<WiMoonset />}>
            {astronomy.moonset}
          </Card>
          <Card title="Moon phase" icon={<MoonPhase phase={astronomy.moon_phase} />}>
            {astronomy.moon_phase}
          </Card>
        </Container>
        <p className="title">Air Quality</p>
        <Container>
          <Card title="Air Quality Index" icon="AQI">
            {airQuality[data.current.air_quality["us-epa-index"]]}
          </Card>

          <Card title="Carbon Monoxide" icon="CO">
            {data.current.air_quality.co.toFixed(2)} <sub>μg/m3</sub>
          </Card>

          <Card
            title="Nitrogen dioxide"
            icon={
              <>
                NO<sub>2</sub>
              </>
            }
          >
            {data.current.air_quality.no2.toFixed(2)} <sub>μg/m3</sub>
          </Card>

          <Card
            title="Ozone"
            icon={
              <>
                O<sub>3</sub>
              </>
            }
          >
            {data.current.air_quality.o3.toFixed(2)} <sub>μg/m3</sub>
          </Card>

          <Card
            title="Sulfur trioxide"
            icon={
              <>
                SO<sub>2</sub>
              </>
            }
          >
            {data.current.air_quality.so2.toFixed(2)} <sub>μg/m3</sub>
          </Card>
          <Card title="Atmospheric particulate matter" icon="PM2.5">
            {data.current.air_quality.pm2_5.toFixed(2)} <sub>μg/m3</sub>
          </Card>
          <Card title="Atmospheric particulate matter" icon="PM10">
            {data.current.air_quality.pm10.toFixed(2)} <sub>μg/m3</sub>
          </Card>
        </Container>
      </DetailWeatherStyle>
    </>
  );
}

export default DetailWeather;

const DetailWeatherStyle = styled.div`
  margin-top: 2rem;

  .title {
    color: var(--color-white);
    font-weight: bold;
    text-shadow: 0 0 8px #00000030;

    @media screen and (max-width: 640px) {
      font-size: 2.4rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0 3rem;
`;
