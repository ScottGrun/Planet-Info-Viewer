import {
  planetStatLabelTextStyles,
  planetStatValueTextStyles,
} from "@/styles/typography";
import React, { FC } from "react";
import styled from "styled-components";

interface PlanetStatProps {
  label: string;
  value: string;
}

export const PlanetStat: FC<PlanetStatProps> = ({ label, value }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  border: solid 1px ${(p) => p.theme.COLORS.dark[400]};

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-flow: column;
    justify-content: CENTER;
    align-items: flex-start;
    height: 88px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    height: 128px;
    width: 255px;
  }
`;

const Label = styled.dt`
  ${planetStatLabelTextStyles};
  text-transform: uppercase;
  color: ${(p) => p.theme.COLORS.dark[500]};
`;

const Value = styled.dl`
  ${planetStatValueTextStyles};
  text-transform: uppercase;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    margin-top: 6px;
  }
`;
