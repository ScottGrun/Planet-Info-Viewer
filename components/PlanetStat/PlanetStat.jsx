import styled from 'styled-components';
import React from 'react'
import { basePlanetStatLabelStyle, basePlanetStatValueStyle } from '../../styles/typography';

export default function PlanetStat({label, value}) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Wrapper>
    )
}


const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  height: 48px;
  width: 100%;
  border: solid 1px ${p => p.theme.COLORS.dark[700]};

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-flow: column;
    justify-content: center; 
    align-items: flex-start;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 19px;
    padding-left: 15px;
    height: 88px;
    padding-right: 0;

  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
   height: 128px;
   padding-top: 20px;
    padding-bottom: 27px;
    padding-left: 23px;
  }
`;


const Label = styled.p`
  ${basePlanetStatLabelStyle}
  text-transform: uppercase;
  color: ${p => p.theme.COLORS.dark[500]};

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
      font-size: ${11 / 16}rem;
  }

`;

const Value = styled.p`
    ${basePlanetStatValueStyle}
    text-transform: uppercase;
   
    @media ${(p) => p.theme.QUERIES.tabletAndUp} {
      margin-top: 6px;
      font-size: ${24 / 16}rem;
      line-height: 25px;
    letter-spacing: 1px;
    }

    @media ${(p) => p.theme.QUERIES.laptopAndUp} {
      font-size: ${40 / 16}rem;
      line-height: 52px;
      letter-spacingletter-spacing: -1.5px;
}


`;