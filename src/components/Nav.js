import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to='/'>
          <img src={logo} alt="my-logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to='/AboutMe'>About</Link>
        </li>
        <li>
          <Link className="link" to='/MyWork'>Work</Link>
        </li>
        <li>
          <Link className="link" to='/ContactMe'>Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.7rem;
  a {
    font-size: 1.3rem;
    color: #e76f51;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    font-family: "Montserrat", sans-serif;
    padding-left: 2rem;
    position: relative;
  }
  #logo img {
    width: 50%;
  }
  border-bottom: 4px solid #4c88a7;
`;
export default Nav;