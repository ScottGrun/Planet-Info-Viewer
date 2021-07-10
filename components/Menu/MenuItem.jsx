import styled from "styled-components";
import React from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { motion } from "framer-motion";
  
const itemVariant = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    x: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1500 }
    }
  }
};
  

export default function MenuItem({ linkTo, children, planet, setMenuIsOpen }) {
  return (
    <Wrapper onClick={() => setMenuIsOpen(false)} variants={itemVariant}>
      <Link href={linkTo} passHref>
        <a>
          <PlanetIcon planet={planet} />
          <LinkName>{children}</LinkName>
          <div>
            <Image
              src="/assets/icon-chevron.svg"
              layout="fixed"
              width={6}
              height={9}
              alt="Chevron icon"
            />
          </div>
        </a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled(motion.li)`
  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[700]};
  padding: 20px 0;

   a{
     height: 100%;
   }
`;

const LinkName = styled.p`
  margin-right: auto;

  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  text-align: center;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
`;

const PlanetIcon = styled.div`
  display: block;
  width: 20px;
  height: 20px;

  margin-right: 25px;
  margin-bottom: 3px;
  border-radius: 50%;

  background-color: ${(p) => p.theme.COLORS[p.planet]};
`;
