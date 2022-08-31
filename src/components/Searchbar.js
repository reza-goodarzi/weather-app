import { useContext, useRef } from "react";
import styled from "styled-components";
//Context
import { WeatherContext } from "../context/weather-context";
// ICONS
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const inputRef = useRef(null);
  const { fetchCurrentWeather } = useContext(WeatherContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchCurrentWeather(inputRef.current.value);
  };

  return (
    <SearchbarStyle onSubmit={onSubmitHandler}>
      <input ref={inputRef} type="text" placeholder="Search Your location" />
      <button>
        <FaSearch />
      </button>
    </SearchbarStyle>
  );
}

export default Searchbar;

const SearchbarStyle = styled.form`
  display: flex;
  background-color: var(--color-white);
  border-radius: 6px;

  input {
    background-color: transparent;
  }
`;
