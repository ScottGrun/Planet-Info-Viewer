import { Header } from "@/components/Header";
import { SectionTabList } from "@/components/SectionTabList";
import { SectionTab } from "@/components/SectionTabList/SectionTab";
import { TabPanels, Tabs } from "@reach/tabs";
import Head from "next/head";
import { planets } from "@/data/planets";
import styled from "styled-components";
import { useState } from "react";
import { SectionTabPanel } from "@/components/SectionTabPanel";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PlanetStatsContainer } from "@/layouts/PlanetStatsContainer";
import { PlanetStat } from "@/components/PlanetStat/PlanetStat";
import { MobileMenu } from "@/components/MobileMenu";
import { PlanetType } from "@/types/planet";

interface HomePageProps {
  planet: PlanetType;
}

const Home: NextPage<HomePageProps> = ({ planet }) => {
  const [selectedSection, setSelectedSection] = useState("0");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => setIsMenuOpen((o) => !o);

  return (
    <>
      <Head>
        <title>Planet Info Viewer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleMenu={toggle} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggle} />
      <Wrapper>
        <main>
          <Tabs
            index={parseInt(selectedSection)}
            onChange={(val) => setSelectedSection(val.toString())}
          >
            <StyledSectionTabList>
              <SectionTab>Overview</SectionTab>
              <SectionTab>Structure</SectionTab>
              <SectionTab>Surface</SectionTab>
            </StyledSectionTabList>
            <TabPanels>
              {/* Overview */}
              <SectionTabPanel
                planet={planet}
                section="overview"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />

              {/* Structure */}
              <SectionTabPanel
                planet={planet}
                section="structure"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />

              {/* Surface */}
              <SectionTabPanel
                planet={planet}
                section="surface"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </TabPanels>
          </Tabs>
        </main>

        <footer>
          <StyledPlanetStats>
            <PlanetStat label="Rotation Time" value={planet.rotation} />
            <PlanetStat label="Radius" value={planet.radius} />
            <PlanetStat label="Revolution Time" value={planet.revolution} />
            <PlanetStat label="Average Temp." value={planet.temperature} />
          </StyledPlanetStats>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    max-width: 1110px;
    margin: 0 auto;
  }
`;

const StyledSectionTabList = styled(SectionTabList)`
  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    display: none;
  }
`;

const StyledPlanetStats = styled(PlanetStatsContainer)`
  margin-top: 28px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    margin: 0;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = planets.map((planet) => ({
    params: { name: planet.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // If theres a issue just fall back to first planet
  if (!params) {
    return { props: { planet: planets[0] } };
  }

  const planet = planets.find((p) => p.name === params.name);

  return { props: { planet } };
};

export default Home;