import styled from 'styled-components';
import React from 'react'
import { baseSectionNameStyles } from '../../styles/typography';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

export default function InfoSection({ className, planetName}) {
  return (
      <Wrapper className={className} planetName={planetName}>
        <Section ><SectionNumber>01 </SectionNumber><SectionName>Overview</SectionName></Section>
        <Section ><SectionNumber>02</SectionNumber><SectionName>Internal Structure</SectionName></Section>
        <Section ><SectionNumber>03</SectionNumber><SectionName>Surface Geology</SectionName></Section>
      </Wrapper>
  )
}




const Wrapper = styled(TabList)`
  display: none;
  align-items: center;
  flex-flow: column;
  gap: 16px;
  width: 100%;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: flex;
  }
  
  [data-reach-tab][data-selected] {
    border-bottom: inherit;
    background-color: ${p=> p.theme.COLORS[p.planetName]};
  }
 
`;

const Section = styled(Tab)`
    display: flex;
    align-items: center;
    padding: 0 20px;

  width: 100%;
  height: 40px;
  margin: 0;

  border: solid 1px ${p => p.theme.COLORS.dark[700]};

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    height: 48px;
  }


 
`;

const SectionNumber = styled.p`
    ${baseSectionNameStyles}
    margin-right: 14px;
    text-transform: uppercase;
    @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${12 / 16}rem;
  }
  opacity: 0.5;

    color: ${p => p.theme.COLORS.white}
`;

const SectionName = styled.p`
 text-transform: uppercase;
  ${baseSectionNameStyles}

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${12 / 16}rem;
  }
  
`;