import styled from 'styled-components';
import React from 'react'
import { baseLogoStyle, baseNavStyles } from '../../styles/typography';
import Image from 'next/image'
import logoIcon from '../../public/assets/icon-hamburger.svg'
import Link from 'next/link'

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Logo>The Planets</Logo>
                <MenuButton>
                    <Image src={logoIcon} alt="Menu Icon" layout="fixed" />
                </MenuButton>
                <NavContainer>
                    <Nav>
                        <Link href={'/planets/Mercury'} passHref>
                            <NavItem>mercury</NavItem>
                        </Link>

                        <Link href={'/planets/Venus'} passHref>
                            <NavItem>venus</NavItem>
                        </Link>

                        <Link href={'/planets/Earth'} passHref>
                            <NavItem>earth</NavItem>

                        </Link>
                        <Link href={'/planets/Mars'} passHref>
                            <NavItem>mars</NavItem>
                        </Link>
                        <Link href={'/planets/Jupiter'} passHref>
                            <NavItem>jupiter</NavItem>
                        </Link>
                        <Link href={'/planets/Saturn'} passHref>
                            <NavItem>saturn</NavItem>
                        </Link>
                        <Link href={'/planets/Neptune'} passHref>
                            <NavItem>neptune</NavItem>
                        </Link>
                    </Nav>
                </NavContainer>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  background-color: ${p => p.theme.COLORS.dark[900]}
`;

const Wrapper = styled.header`
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
    border-bottom: solid 1px ${p => p.theme.COLORS.dark[700]};
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
`;

const NavItem = styled.a`
  ${baseNavStyles};
  color: ${p => p.theme.COLORS.dark[500]};
  text-transform: uppercase;
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

