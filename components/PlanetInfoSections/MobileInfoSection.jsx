import styled from 'styled-components';
import { baseSectionNameStyles } from '../../styles/typography';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

export default function PlanetInfoSections({ className, sectionDisplayed, setSectionDisplayed }) {
  return (
    <Wrapper className={className} index={sectionDisplayed} onChange={(index)=> setSectionDisplayed(index)}>
      <StyledTabList>
        <SectionNameContainer><SectionName>Overview</SectionName></SectionNameContainer>
        <SectionNameContainer><SectionName>Structure</SectionName></SectionNameContainer>
        <SectionNameContainer><SectionName>Surface</SectionName></SectionNameContainer>
      </StyledTabList>
    </Wrapper>
  )
}


const Wrapper = styled(Tabs)`
position: fixed;
top: 68px;
width: 100%;

z-index: 5;
background-color: ${p => p.theme.COLORS.dark[900]};
 

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: none;
  }
`;

const StyledTabList = styled(TabList)`
   display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 52px;
  width: 100%;

  border-bottom: solid 1px ${p => p.theme.COLORS.dark[700]};
  border-top: solid 1px ${p => p.theme.COLORS.dark[700]} ;
`;

const SectionNameContainer = styled(Tab)`
  position: relative;
  display: flex;
  gap: 43px;
  border-width: 4px;

  justify-content: space-between;
align-items: center;
height: 100%;


`;

const SectionName = styled.p`
  ${baseSectionNameStyles}
    text-transform: uppercase;
    text-align: center;
    color: ${p => p.theme.COLORS.dark[500]};

    &:active {
        color: ${p => p.theme.COLORS.white}
    }

    &:hover {
        color: ${p => p.theme.COLORS.white}
    }

    &:focused {
        color: ${p => p.theme.COLORS.white}
    }
`;