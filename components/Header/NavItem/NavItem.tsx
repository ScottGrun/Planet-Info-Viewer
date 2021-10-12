import { h4TextStyles } from "@/styles/typography";
import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

interface NavItemProps {
  href: string;
  planet: string;
}

export const NavItem: FC<NavItemProps> = ({ children, planet, href }) => {
  return (
    <Wrapper $planet={planet}>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li<{ $planet: string }>`
  ${h4TextStyles}

  height: 100%;

  text-transform: uppercase;
  transition: color 200ms ease;
  color: ${(p) => p.theme.COLORS.dark[500]};
  border-bottom: solid 4px transparent;
  transition: border-color 200ms ease;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.COLORS.white};

    border-color: ${(p) => {
    // @ts-expect-error - Complaining about using a string as index - we know this is fine and can be ignored
    return p.theme.COLORS[p.$planet];
    }};
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
