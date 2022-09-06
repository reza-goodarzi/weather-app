import React from "react";
import styled from "styled-components";

function Card({ icon, children, title }) {
  return (
    <CardStyle title={title}>
      <i>{icon}</i>
      <span>{children}</span>
    </CardStyle>
  );
}

export default Card;

const CardStyle = styled.div`
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

  @media screen and (max-width: 640px) {
    width: calc(50% - 4rem);
    height: 24rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 32rem;
  }
  i {
    font-size: 2.2rem;
    font-weight: bold;
    cursor: default;
    user-select: none;

    @media screen and (max-width: 640px) {
      font-size: 6rem;
    }

    @media screen and (max-width: 420px) {
      font-size: 8rem;
    }

    svg {
      @media screen and (min-width: 640px) {
        font-size: 3rem;
      }
    }
  }

  span {
    font-size: 1rem;
    /* font-weight: bold; */

    @media screen and (max-width: 640px) {
      font-size: 2.5rem;
    }
  }
`;
