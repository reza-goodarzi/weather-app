import { useContext, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";
import styled from "styled-components";
import Loading from "../components/Loading";
import Searchbar from "../components/Searchbar";
import { WeatherContext } from "../context/weather-context";
import { errorToast } from "../lib";
import { getForecasts } from "../services";

function FutureWeather() {
  const ctx = useContext(WeatherContext);
  const [forecasts, setForecasts] = useState(null);

  useEffect(() => {
    if (ctx.data) {
      getForecasts(ctx.data.location.name)
        .then((data) => setForecasts(data))
        .catch((error) => errorToast(error));
    }
  }, [ctx.data]);

  console.log(forecasts);

  if (!forecasts) {
    return <Loading />;
  }

  return (
    <>
      <Searchbar />

      <ChartContainer width="95%">
        <BarChart data={forecasts} margin={{ top: 44 }}>
          <Bar
            dataKey="minTemp"
            name="Min Temperature"
            fill="var(--color-primary)"
            opacity={0.75}
          />

          <Bar dataKey="avgTemp" name="Avg Temperature" fill="var(--color-white)" opacity={0.75} />

          <Bar dataKey="maxTemp" name="Max Temperature" fill="var(--color-red)" opacity={0.75} />

          <YAxis stroke="var(--color-white)" />
          <XAxis stroke="var(--color-white)" dataKey="date" />
          <CartesianAxis style={{ background: "red" }} stroke="red" />
          <Legend spacing="20rem" />
          <Tooltip
            labelStyle={{ color: "var(--color-white)" }}
            itemStyle={{ fontWeight: "bold", color: "var(--color-dark)" }}
            contentStyle={{
              background: "var(--color-white)",
              borderRadius: 8,
            }}
            cursor={{ fill: "var(--color-white)", opacity: 0.25 }}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}

export default FutureWeather;

const ChartContainer = styled(ResponsiveContainer)`
  height: 440px !important;

  @media screen and (max-width: 640px) {
    height: 320px !important;
  }

  @media screen and (max-width: 420px) {
    height: 260px !important;
  }
`;
