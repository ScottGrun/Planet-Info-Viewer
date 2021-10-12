import { useWindowSize } from "@/hooks/useWindowSize";
import { BREAKPOINTS } from "@/styles/theme";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';

interface PlanetContainerProps {
  possibleSizes: number[];
}

export const PlanetContainer: FC<PlanetContainerProps> = ({
  children,
  possibleSizes,
}) => {
  const { width } = useWindowSize();
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (width && width >= BREAKPOINTS.laptop) {
      setSize(2);
    } else if (width && width >= BREAKPOINTS.tablet) {
      setSize(1);
    } else {
      setSize(0);
    }
  }, [width]);

  return (
    <Wrapper>
      <Container variants={slideIn} initial="initial" animate="animate" exit="closed" planetSize={possibleSizes[size]}>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 305px;
  width: 100%;
  /* flex: 1; */

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    height: 460px;
    padding: 0;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    height: 724px;
  }
`;

const Container = styled(motion.div)<{ planetSize: number }>`
  position: relative;
  height: ${(p) => p.planetSize}px;
  width: ${(p) => p.planetSize}px;
`;

// animation
const easing = [0.6, -0.05, 0.01, 0.99];

const slideIn ={
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: { duration: 0.2, ease: easing },
  },
  
}