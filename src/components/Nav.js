import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import hamburger from "../icons/hamburger.svg";
import close from "../icons/close.svg";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <Logo to="/">
        <img src={logo} alt="my-logo" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </Hamburger>
      <LinksWrapper isOpen={isOpen}>
        <LinkWrapper>
          <NavLink to="/AboutMe" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/MyWork" onClick={() => setIsOpen(false)}>
            Work
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink to="/ContactMe" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </LinkWrapper>
      </LinksWrapper>
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
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
    a {
      font-size: 2rem;
    }
    #logo img {
      width: 100%;
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

const Logo = styled(Link)`
  img {
    width: 50%;
    min-width: 25px;
  }
`;

const Hamburger = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 820px) {
    display: none;
  }
  @media (max-width: 820px) {
    position: absolute;
    top: 1.5rem;
    right: 1.7rem;
    z-index: 2;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    background-color: rgba(244, 162, 97, 0.8);
    
    a {
      color: #264653;
      font-size: 1.9rem;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    z-index: 1;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.3rem;
  color: #e76f51;
  text-decoration: none;
  margin: 1rem;
  transition: color 0.3s linear;
  &:hover {
    color: #e9c46a;
  }
`;

const LinkWrapper = styled.li`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-style: bold;
  padding-left: 1.7rem;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
  }
`;

export default Nav;
