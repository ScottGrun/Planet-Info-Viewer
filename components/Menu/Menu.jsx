import styled from "styled-components";
import React, { useRef } from "react";
import MenuItem from "./MenuItem";
import { motion, useCycle } from "framer-motion";

export default function Menu({ menuIsOpen, setMenuIsOpen }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = "100%";

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const sidebar = {
    open: {
      height: "100%",
      transition: {
        type: "spring",
        stiffness: 60,
      },
    },
    closed: {
      height: 0,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 500,
        damping: 40,
      },
    },
  };

  const menuItems = {
    open: {
      display: "block",
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      display: "none",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  return (
    <Wrapper
      variants={sidebar}
      menuIsOpen={menuIsOpen}
      initial={false}
      animate={menuIsOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <MenuWrapper variants={menuItems}>
        {planets.map((planet) => (
          <MenuItem
            key={planet}
            setMenuIsOpen={setMenuIsOpen}
            linkTo={`/planets/${planet}`}
            planet={planet}
          >
            {planet}
          </MenuItem>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(motion.nav)`
  position: fixed;
  top: 68px;
  left: 0;
  z-index: 110;
  height: 100%;

  width: 100%;
  background: ${(p) => p.theme.COLORS.dark[900]};

  a {
    display: flex;
    align-items: center;
  }

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: none;
  }
`;

const MenuWrapper = styled(motion.ul)`
  display: flex;
  flex-flow: column;
  padding: 0px 24px;
  height: 100%;
  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[700]};
`;
