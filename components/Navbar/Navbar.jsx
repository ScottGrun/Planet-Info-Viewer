import styled from "styled-components";
import React from "react";
import { baseLogoStyle, baseNavStyles } from "../../styles/typography";
import Image from "next/image";
import logoIcon from "../../public/assets/icon-hamburger.svg";
import NavItem from "./NavItem";
import Menu from "../Menu/Menu";
import {useState} from 'react';
export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Wrapper>
      <Logo>The Planets</Logo>
      <MenuButton onClick={()=> setMenuIsOpen(!menuIsOpen)} >
        {menuIsOpen ? <Image src='/assets/icon-close.svg' alt="Menu Icon" layout="fixed" width={17} height={24} /> : <Image src={logoIcon} alt="Menu Icon" layout="fixed" /> }
      </MenuButton>
      <NavContainer>
        <Nav>
          <NavItem name="Mercury" linkTo={"/planets/Mercury"}>
            Mercury
          </NavItem>
          <NavItem name="Venus" linkTo={"/planets/Venus"}>
            Venus
          </NavItem>
          <NavItem name="Earth" linkTo={"/planets/Earth"}>
            Earth
          </NavItem>
          <NavItem name="Mars" linkTo={"/planets/Mars"}>
            Mars
          </NavItem>
          <NavItem name="Jupiter" linkTo={"/planets/Jupiter"}>
            Jupiter
          </NavItem>
          <NavItem name="Saturn" linkTo={"/planets/Saturn"}>
            Saturn
          </NavItem>
          <NavItem name="Uranus" linkTo={"/planets/Uranus"}>
            Uranus
          </NavItem>
          <NavItem name="Neptune" linkTo={"/planets/Neptune"}>
            Neptune
          </NavItem>
        </Nav>
      </NavContainer>
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${(p) => p.theme.COLORS.dark[900]};

  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    justify-content: center;
    padding-top: 32px;
    padding-bottom: 0;
    border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[700]};
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    justify-content: space-between;
    flex-flow: row;
    padding: 0;
    height: 85px;
    align-items: center;
    padding: 0 40px;
  }
`;

const NavContainer = styled.nav`
  display: none;
  width: 100%;
  height: 100%;

  margin-top: 39px;
  padding-bottom: 27px;
  align-items: baseline;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: revert;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    width: auto;
    margin: 0;
    padding: 0;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  gap: 33px;
  height: 100%;
`;

const Logo = styled.p`
  ${baseLogoStyle};
  text-transform: uppercase;
  text-align: center;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  height: 17px;
  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: none;
  }
`;
