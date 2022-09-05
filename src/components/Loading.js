import React from "react";
import styled from "styled-components";

function Loading() {
  return <LoadingStyle>Loading...</LoadingStyle>;
}

export default Loading;

const LoadingStyle = styled.div`
  font-size: 2rem;
  padding: 5rem 0;
  font-weight: bold;
  color: var(--color-white);
`;
