import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

//Context
import { WeatherContext } from "../context/weather-context";
// ICONS
import { FaSearch } from "react-icons/fa";
import { searchCity } from "../services";
import { errorToast } from "../lib";

function Searchbar() {
  const { fetchCurrentWeather } = useContext(WeatherContext);
  const [cities, setCities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const canSearch = useMemo(() => searchText.length >= 3, [searchText]);

  useEffect(() => {
    if (canSearch) {
      searchCity(searchText)
        .then((data) => setCities(data))
        .catch((error) => errorToast(error));
    } else {
      setCities([]);
    }
  }, [searchText, canSearch]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (canSearch) {
      fetchCurrentWeather(searchText);
    } else {
      errorToast("You must enter at least 3 letter.");
    }
  };

  const getWeather = (name) => {
    fetchCurrentWeather(name);
    setCities([]);
    setSearchText("");
  };

  return (
    <SearchbarStyle onSubmit={searchHandler}>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="text"
        placeholder="Search Your location"
      />
      <button>
        <FaSearch />
      </button>

      {canSearch && (
        <SearchResultStyle>
          {cities.length > 0 ? (
            cities.map((city, i) => (
              <button key={city.id} onClick={() => getWeather(city.name)}>
                {i + 1}. {city.name} - {city.region} - {city.country}
              </button>
            ))
          ) : (
            <NotFound>Nothing found!</NotFound>
          )}
        </SearchResultStyle>
      )}
    </SearchbarStyle>
  );
}

export default Searchbar;

const SearchbarStyle = styled.form`
  display: flex;
  background-color: var(--color-white);
  border-radius: 6px;
  position: relative;

  input {
    background-color: transparent;
  }
`;

const SearchResultStyle = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--shadow-darker);
  height: 380px;
  border-radius: 8px;
  position: absolute;
  width: 100%;
  top: 120%;
  left: 0;
  z-index: 10;
  overflow-y: auto;

  button {
    padding: 0 2rem;
    border-radius: 0;
    width: 100%;
    height: 72px;
    background-color: var(--color-white);
    justify-content: start;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-weight: bold;
    color: var(--color-gray);

    &:hover {
      /* transform: scale(1.05); */
      font-size: 120%;
      box-shadow: var(--shadow-darker);
      background: linear-gradient(200deg, rgba(15, 168, 255, 1), rgba(161, 15, 255, 1));
      color: var(--color-white);
      z-index: 2;
    }
  }
`;

const NotFound = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-secondary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;
