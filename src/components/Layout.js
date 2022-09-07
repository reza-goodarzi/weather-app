import { Link } from "react-router-dom";
import styled from "styled-components";

function Layout({ isDay, children }) {
  console.log({ isDay });
  return (
    <BackgroundStyled isDay={isDay}>
      <NavStyle>
        <ul>
          <li>
            <Link to="/">Current</Link>
          </li>
          <li>
            <Link to="/detail">Detail info</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
        </ul>
      </NavStyle>

      <MainSection>{children}</MainSection>
    </BackgroundStyled>
  );
}

export default Layout;

const NavStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  color: var(--color-white);
  z-index: 5;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 16px;
    cursor: pointer;

    li a {
      @media screen and (max-width: 640px) {
        font-size: 1.6rem;
        text-shadow: 0 0 2px rgba(0, 0, 0);
      }
    }
  }
`;

const BackgroundStyled = styled.div`
  background: url(${(props) => (props.isDay ? "/assets/day.jpg" : "/assets/night.jpg")});
  background-attachment: fixed;

  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled.main`
  width: 56%;
  margin: 6rem 0 2rem;

  padding: 2.5rem 4rem;
  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  @media screen and (max-width: 1200px) {
    width: 65%;
  }

  @media screen and (max-width: 780px) {
    width: 85%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: calc(100vh - 8rem);
    margin: 0;
    padding: 6rem 2rem 2rem;
    border-radius: 0;
    overflow: auto;
  }
`;
