import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          <img src={logo} alt="my-logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/AboutMe">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/MyWork">
            Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/ContactMe">
            Contact
          </Link>
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
    margin-right: 1.7rem;
  }
  li {
    font-family: "Montserrat", sans-serif;
    font-style: bold;
    padding-left: 1.7rem;
    position: relative;
  }
  #logo img {
    width: 50%;
    min-width: 25px;
  }
  border-bottom: 4px solid #4c88a7;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
    a {
      font-size: 2rem;
    }
    #logo img {
      width: 60%;
    }
    ul {
      padding-left: 2rem;
      margin-right: 2rem;
    }
  }

  @media screen and (min-width: 500px) {
    padding: 1rem 2rem;
    a {
      font-size: 1.7rem;
    }
    #logo img {
      width: 55%;
    }
    ul {
      padding-left: 2rem;
      margin-right: 2rem;
    }
  }
`;
export default Nav;
