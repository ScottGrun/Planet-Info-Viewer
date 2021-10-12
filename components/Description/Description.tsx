import {
  bodyTextSyles,
  h1TextStyles,
  sourceTextStyles,
} from "@/styles/typography";
import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface DescriptionProps {
  name: string;
  body: string;
  srcHref: string;
  srcName: string;
}

export const Description: FC<DescriptionProps> = ({
  name,
  body,
  srcHref,
  srcName,
}) => {
  return (
    <Wrapper variants={stagger} initial="initial" animate="animate">
      <Name variants={fadeInUp}>{name}</Name>
      <Body>{body}</Body>
      <Source  href={srcHref} target="_blank" rel="noopener noreferrer">
        Source:
        <span>
          {srcName}
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </span>
      </Source>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-flow: column;
  text-align: center;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    text-align: left;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    max-width: revert;
  }
`;

const Name = styled(motion.div)`
  ${h1TextStyles};
  text-transform: uppercase;
`;

const Body = styled(motion.p)`
  ${bodyTextSyles};
  margin-top: 16px;
`;

const Source = styled(motion.a)`
  ${sourceTextStyles};
  width: fit-content;
  margin: 0 auto;
  margin-top: 32px;

  color: ${(p) => p.theme.COLORS.dark[500]};
  fill: ${(p) => p.theme.COLORS.dark[500]};

  transition: color 200ms ease;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    margin-right: 0;
    margin-left: 0;
  }

  &:hover {
    color: ${(p) => p.theme.COLORS.white};

    span {
      fill: #fff;
    }
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-weight: ${(p) => p.theme.WEIGHTS.bold};
    text-decoration: underline;
  }
`;

// Animations

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};



const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
