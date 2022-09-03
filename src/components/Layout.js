import { Link } from "react-router-dom";
import styled from "styled-components";

function Layout({ isDay, children }) {
  return (
    <>
      <NavStyle>
        <ul>
          <li>
            <Link to="/">Current</Link>
          </li>
          <li>
            <Link to="/detail">Detail info</Link>
          </li>
          <li>
            <Link to="/future">Future of ten</Link>
          </li>
        </ul>
      </NavStyle>

      <BackgroundStyled isDay={isDay}>
        <MainSection>{children}</MainSection>
      </BackgroundStyled>
    </>
  );
}

export default Layout;

const NavStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.5rem 2rem;
  color: var(--color-white);

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 16px;
    cursor: pointer;
  }
`;

const BackgroundStyled = styled.div`
  background: url(${(props) => (props.isDay ? "assets/day.jpg" : "assets/night.jpg")});
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
  height: 68%;
  margin: 2rem 0;

  padding: 2.5rem 4rem;
  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;
