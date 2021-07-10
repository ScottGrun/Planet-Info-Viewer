import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { baseNavStyles } from "../../styles/typography";
import { useRouter } from "next/router";
import {motion} from 'framer-motion';

export default function NavItem({ linkTo, children, name }) {
  const router = useRouter();
  const route = router.query.name;
  return (
    <Wrapper name={name} route={route}>
      <Link href={linkTo} passHref>
        <a>{children}</a>
      </Link>
      <motion.hr key={route}  initial={{height: 0}} animate={{height: 4}}/>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  ${baseNavStyles};
  position: relative;
  display: flex;
  align-items: center;

  color: ${(p) =>
    p.name === p.route ? p.theme.COLORS.white : p.theme.COLORS.dark[500]};
  text-transform: uppercase;
  transition: color 150ms ease;

  hr {
    display: ${(p) => (p.name === p.route ? "block" : "none")};
    position: absolute;
    bottom: 0;
    height: 4px;
    margin: 0;
    border: none;
    width: 100%;

    background-color: ${(p) => p.theme.COLORS[p.name]};
  }

  &:hover {
    color: ${(p) => p.theme.COLORS.white};
  }
`;
