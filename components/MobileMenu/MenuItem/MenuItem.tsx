import React, { FC } from "react";
import styled, { COLORS } from "styled-components";
import Link from "next/link";
import { mobileMenuTextStyles } from "@/styles/typography";
import { motion } from "framer-motion";

interface MenuItemProps {
  planet: string;
  href: string;
  onClick: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  planet,
  href,
  onClick,
}) => {
  return (
    <Wrapper variants={variants} onClick={onClick}>
      <Link href={href} passHref>
        <Item>
          <Ball $planet={planet} />
          <a>{children}</a>
        </Item>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled(motion.li)`
  ${mobileMenuTextStyles};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-transform: uppercase;
  padding: 20px 0;
  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[200]};
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

const Ball = styled.div<{ $planet: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => {
    // @ts-expect-error - Complaining about using a string as index - we know this is fine and can be ignored
    return p.theme.COLORS[p.$planet]
    }};
`;

// Animations

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
