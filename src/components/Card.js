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

  i {
    font-size: 2.2rem;
    font-weight: bold;
    cursor: default;
    user-select: none;
    svg {
      font-size: 3rem;
    }
  }

  span {
    font-size: 1rem;
    /* font-weight: bold; */
  }
`;
