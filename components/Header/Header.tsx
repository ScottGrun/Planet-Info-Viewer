import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { NavItem } from "@/components/Header/NavItem";
import Link from "next/link";

interface HeaderProps {
  toggleMenu: any;
}

export const Header: FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Link href="/planet/mercury" passHref>
          <Logo>The planets</Logo>
        </Link>
        <Nav>
          <InnerNav>
            <NavItem planet="mercury" href="/planet/mercury">
              Mercury
            </NavItem>
            <NavItem planet="venus" href="/planet/venus">
              Venus
            </NavItem>
            <NavItem planet="earth" href="/planet/earth">
              Earth
            </NavItem>
            <NavItem planet="mars" href="/planet/mars">
              Mars
            </NavItem>
            <NavItem planet="jupiter" href="/planet/jupiter">
              Jupiter
            </NavItem>
            <NavItem planet="saturn" href="/planet/saturn">
              Saturn
            </NavItem>
            <NavItem planet="uranus" href="/planet/uranus">
              Uranus
            </NavItem>
            <NavItem planet="neptune" href="/planet/neptune">
              Neptune
            </NavItem>
          </InnerNav>
        </Nav>
        <MenuButton onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </MenuButton>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  z-index: 10 !important;
  width: 100%;
  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[400]};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  padding: 0 24px;
  height: 69px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-flow: column;
    height: 160px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    flex-flow: row;
    height: 86px;
    padding: 0 32px;
    margin: 0 auto;
  }
`;

const Logo = styled.a`
  text-transform: uppercase;
  font-family: ${(p) => p.theme.FONT_FAMILY.antonio};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.0499999523162842px;
  text-align: left;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    margin-top: 32px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin: 0;
  }
`;

const MenuButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  padding: 0;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;
  height: 100%;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: flex;
    align-items: center;
    margin-top: 39px;
    margin-bottom: 27px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin: 0;
  }
`;

const InnerNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 33px;
  height: 100%;
`;
