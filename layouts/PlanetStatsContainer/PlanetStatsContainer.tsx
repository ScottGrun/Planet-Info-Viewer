import React, { FC } from "react";
import styled from "styled-components";

interface PlanetStatsContainerProps {
  className?: string;
}

export const PlanetStatsContainer: FC<PlanetStatsContainerProps> = ({
  children,
  className,
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.dl`
  display: flex;
  flex-flow: column;
  gap: 8px;
  padding: 0 24px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-flow: row;
    gap: 11px;
    padding: 0 39px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    gap: 30px;
    padding: 0;

  }
`;
