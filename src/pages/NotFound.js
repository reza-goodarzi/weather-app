import React from "react";
import styled from "styled-components";

function NotFound() {
  return (
    <NotFoundStyle>
      <span className="number">404</span>
      <span>Not Found!</span>
    </NotFoundStyle>
  );
}

export default NotFound;

const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0;

  span {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: var(--shadow-darker);
    text-align: center;

    background: -webkit-linear-gradient(180deg, var(--color-primary), var(--color-white));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .number {
    font-size: 6rem;
  }
`;
