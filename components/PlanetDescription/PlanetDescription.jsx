import styled from "styled-components";
import React, { useState } from "react";
import { baseBodyStyles, h2BaseStyles } from "../../styles/typography";
import InfoSection from "../PlanetInfoSections/InfoSection";
import { Tabs, TabPanels, TabPanel } from "@reach/tabs";

export default function PlanetDescription({
  name,
  sectionDisplayed,
  setSectionDisplayed,
  overview,
  overviewSrc,
  structure,
  structureSrc,
  geology,
  geologySrc,
}) {
  return (
    <Wrapper
      index={sectionDisplayed}
      onChange={(index) => setSectionDisplayed(index)}
    >
      <ContentWrapper>
        <PlanetName>{name}</PlanetName>

        <TabPanels>
          <TabPanel>
            <Description>{overview}</Description>
            <InformationSource>
              <Source
                href={overviewSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: <span>Wikipedia</span>{" "}
              </Source>
              <img src="/assets/icon-source.svg" />
            </InformationSource>
          </TabPanel>

          <TabPanel>
            <Description>{structure}</Description>
            <InformationSource>
              <Source
                href={structureSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: <span>Wikipedia</span>{" "}
              </Source>
              <img src="/assets/icon-source.svg" />
            </InformationSource>
          </TabPanel>

          <TabPanel>
            <Description>{geology}</Description>
            <InformationSource>
              <Source
                href={geologySrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source: <span>Wikipedia</span>{" "}
              </Source>
              <img src="/assets/icon-source.svg" />
            </InformationSource>
          </TabPanel>
        </TabPanels>
      </ContentWrapper>

      <ContentSelector setSectionDisplayed={setSectionDisplayed} planetName={name} />
    </Wrapper>
  );
}

const Wrapper = styled(Tabs)`
  display: flex;
  width: 100%;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    flex-flow: row;
    gap: 69px;
    align-items: center;
    justify-content: space-between;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    flex-flow: column;
    justify-content: center;
    gap: 0;
  }
`;

const ContentSelector = styled(InfoSection)`
  width: 281px;
  
  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin-top: 39px;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    width: 339px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    width: 100%;
  }
`;

const PlanetName = styled.h2`
  ${h2BaseStyles}
  text-align: center;
  text-transform: uppercase;
  color: ${(p) => p.theme.COLORS.white};
  line-height: 52px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    text-align: left;
    font-size: ${48 / 16}rem;
    line-height: 62px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${80 / 16}rem;
    line-height: 104px;
  }
`;

const Description = styled.p`
  ${baseBodyStyles}

  margin-top: 16px;
  text-align: center;
  color: ${(p) => p.theme.COLORS.white};

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    text-align: left;
    margin-top: 24px;
    height: 142px;

  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin-right: 0px;
    font-size: ${14 / 16}rem;
    line-height: 25px;
    height: 176px;
  }
`;

const InformationSource = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  img {
    margin-left: 4px;
  }

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    justify-content: flex-start;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin-top: 24px;
  }
`;

const Source = styled.a`
  ${baseBodyStyles}
  font-size: ${12 / 16}rem;
  color: ${(p) => p.theme.COLORS.dark[500]};

  span {
    font-weight: ${(p) => p.theme.WEIGHTS.bold};
    text-decoration: underline;
  }

  &:hover {
    color: ${(p) => p.theme.COLORS.white};
  }
`;
