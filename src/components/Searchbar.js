import React from "react";
import styled from "styled-components";

// ICONS
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <SearchbarStyle onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Search Your location" />
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
