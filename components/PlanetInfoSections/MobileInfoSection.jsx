import styled from "styled-components";
import { Tabs, TabList, Tab} from "@reach/tabs";
import { useEffect, useState } from "react";
import { baseSectionNameStyles } from "../../styles/typography";

export default function MobileInfoSection({
  className,
  sectionDisplayed,
  setSectionDisplayed,
  planet
}) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(sectionDisplayed);
  }, [sectionDisplayed])

  return (
    <Wrapper
      className={className}
      index={selected}
      onChange={(index) => setSectionDisplayed(index)}
    >
      <StyledTabList planet={planet}>
        <SectionNameContainer>
          <SectionName>Overview</SectionName>
        </SectionNameContainer>
        <SectionNameContainer>
          <SectionName>Structure</SectionName>
        </SectionNameContainer>
        <SectionNameContainer>
          <SectionName>Surface</SectionName>
        </SectionNameContainer>
      </StyledTabList>
    </Wrapper>
  );
}

const Wrapper = styled(Tabs)`
  position: fixed;
  top: 68px;
  width: 100%;

  z-index: 1;
  background-color: ${(p) => p.theme.COLORS.dark[900]};

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

  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[700]};
  border-top: solid 1px ${(p) => p.theme.COLORS.dark[700]};

  [data-reach-tab][data-selected] {
    border-color: ${(p) => p.theme.COLORS[p.planet]};
  }

`;

const SectionNameContainer = styled(Tab)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;

  height: 100%;
  border-width: 4px;



`;

const SectionName = styled.p`
  ${baseSectionNameStyles}
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => p.theme.COLORS.dark[500]};

  &:active {
    color: ${(p) => p.theme.COLORS.white};
  }

  &:hover {
    color: ${(p) => p.theme.COLORS.white};
  }

  &:focused {
    color: ${(p) => p.theme.COLORS.white};
  }
`;
