import React from 'react'
import styled from 'styled-components';
import PlanetStat from '../PlanetStat/PlanetStat';
export default function PlanetStatsContainer({rotation, revolution, radius, temperature}) {
    return (
        <Wrapper>
           <PlanetStat label="Rotation Time" value={rotation}/>
           <PlanetStat label="REVOLUTION TIME" value={revolution}/>
           <PlanetStat label="radius" value={radius}/>
           <PlanetStat label="AVERAGE TEMP." value={temperature}/>
        </Wrapper>
    )
}


const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-direction: row;
    gap: 11px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    gap: 30px;
  }
`;