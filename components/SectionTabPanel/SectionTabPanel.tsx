import { PlanetContainer } from "@/layouts/PlanetContainer";
import { TabPanel } from "@reach/tabs";
import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { Description } from "@/components/Description";
import { Planet } from "@/components/Planet";
import { TabletSectionTabList } from "@/components/TabletSectionTabList";
import { TabletSectionTab } from "@/components/TabletSectionTabList/TabletSectionTab";
import Script from "next/script";
import { PlanetType } from "@/types/planet";

interface SectionTabPanelProps {
  section: "overview" | "structure" | "surface";
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
  planet: PlanetType;
}

export const SectionTabPanel: FC<SectionTabPanelProps> = ({
  planet,
  section,
  setSelectedSection,
  selectedSection,
}) => {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <TabPanel>
        <InnerWrapper>
          <PlanetContainer possibleSizes={planet.sizes}>
            {section !== "surface" ? (
              <Planet
                src={planet.images[section]}
                alt={`Planet ${planet.name}`}
              />
            ) : (
              // @ts-expect-error - complaining about model-viewer when it doesnt need to
              <model-viewer
                style={{ width: "100%", height: "100%" }}
                src={planet.model}
                alt={`A 3D model of the planet ${planet.name}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                environment-image="neutral"
                auto-rotate
                camera-controls
              />
            )}
          </PlanetContainer>
          <PlanetInformation>
            <Description
              name={planet.name}
              body={planet[section].content}
              srcHref={planet[section].source}
              srcName="Wikipedia"
            />

            <StyledTabletTabList
              defaultValue={selectedSection}
              value={selectedSection}
              onValueChange={setSelectedSection}
            >
              <TabletSectionTab selectedSection={selectedSection} tabNumber="0">
                Overview
              </TabletSectionTab>
              <TabletSectionTab selectedSection={selectedSection} tabNumber="1">
                Structure
              </TabletSectionTab>
              <TabletSectionTab selectedSection={selectedSection} tabNumber="2">
                Surface
              </TabletSectionTab>
            </StyledTabletTabList>
          </PlanetInformation>
        </InnerWrapper>
      </TabPanel>
    </>
  );
};

const InnerWrapper = styled.div`
  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
  }
`;

const PlanetInformation = styled.div`
  padding: 0 24px;
  width: 100%;
  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: flex;
    align-items: center;
    gap: 69px;
    padding: 0 39px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    flex-flow: column;
    align-items: flex-start;
    gap: 39px;
    padding: 0;
    max-width: 350px;
  }
`;

const StyledTabletTabList = styled(TabletSectionTabList)`
  display: none;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: flex;
  }
`;
