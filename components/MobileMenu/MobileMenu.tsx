import React, { FC } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <Overlay isOpen={isOpen}>
      <Wrapper
        variants={sidebar}
        initial="closed"
        exit="closed"
        animate={isOpen ? "open" : "closed"}
        aria-label="Navigation Menu"
      >
        <Nav>
          <InnerNav variants={nav}>
            <MenuItem onClick={toggleMenu} planet="mercury" href="/planet/mercury">
              Mercury
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="venus" href="/planet/venus">
              Venus
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="earth" href="/planet/earth">
              Earth
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="mars" href="/planet/mars">
              Mars
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="jupiter" href="/planet/jupiter">
              Jupiter
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="saturn" href="/planet/saturn">
              Saturn
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="uranus" href="/planet/uranus">
              Uranus
            </MenuItem>
            <MenuItem onClick={toggleMenu} planet="neptune" href="/planet/neptune">
              Neptune
            </MenuItem>
          </InnerNav>
        </Nav>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  top: 70px;
  background: none;
`;

const Wrapper = styled(motion(DialogContent))`
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.COLORS.dark[900]};
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0 24px;

  margin-top: 22px;
`;

const InnerNav = styled(motion.ul)`
  width: 100%;
`;

// Animations
const nav = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const sidebar = {
  open: {
    height: "100%",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    height: "0%",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
