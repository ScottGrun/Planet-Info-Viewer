import styled from "styled-components";
import PlanetImgContainer from "../../components/PlanetImgContainer/PlanetImgContainer";
import PlanetInfoSection from "../../components/PlanetInfoSections/MobileInfoSection";
import PlanetDescription from "../../components/PlanetDescription/PlanetDescription";
import PlanetStatsContainer from "../../components/PlanetStatsContainer/PlanetStatsContainer";
import { useEffect, useState } from "react";
import MobileInfoSection from "../../components/PlanetInfoSections/MobileInfoSection";

export default function Planet({ planet }) {
  const [sectionDisplayed, setSectionDisplayed] = useState(0);

  return (
    <>
      <MobileInfoSection
        sectionDisplayed={sectionDisplayed}
        setSectionDisplayed={setSectionDisplayed}
      />
      <Wrapper>
        <MobileSectionToggler></MobileSectionToggler>

        <ImgContainer>
          <PlanetImgContainer
            imgSrc={planet.images.planet}
            sizes={planet.sizes}
          />
        </ImgContainer>

        <DescriptionContainer>
          <PlanetDescription
            sectionDisplayed={sectionDisplayed}
            setSectionDisplayed={setSectionDisplayed}
            name={planet.name}
            overview={planet.overview.content}
            overviewSrc={planet.overview.source}
            structure={planet.structure.content}
            structureSrc={planet.structure.source}
            geology={planet.geology.content}
            geologySrc={planet.geology.source}
          />
        </DescriptionContainer>

        <StatsContainer>
          <PlanetStatsContainer
            rotation={planet.rotation}
            revolution={planet.revolution}
            radius={planet.radius}
            temperature={planet.temperature}
          />
        </StatsContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr min-content min-content;

  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "planet-img planet-img planet-img planet-img"
    "planet-desc planet-desc planet-desc planet-desc"
    "planet-stats planet-stats planet-stats planet-stats";
  padding: 0 24px;
  padding-top: 119px;
  padding-bottom: 47px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    grid-template-columns: repeat(12, 48px);
    gap: 0 10px;
    justify-content: center;
    grid-template-rows: 1fr min-content min-content;
    grid-template-areas:
      "planet-img planet-img planet-img planet-img planet-img planet-img planet-img planet-img planet-img planet-img planet-img planet-img"
      "planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc planet-desc"
      "planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats";
    padding-top: 159px;
    padding-bottom: 36px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    grid-template-columns: repeat(12, 65px);
    gap: 0 30px;
    justify-content: center;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      "planet-img planet-img planet-img planet-img planet-img planet-img planet-img . planet-desc planet-desc planet-desc planet-desc"
      "planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats planet-stats";

    padding-top: 85px;
    padding-bottom: 56px;
  }
`;

const ImgContainer = styled.div`
  grid-area: planet-img;
`;

const DescriptionContainer = styled.div`
  grid-area: planet-desc;
  display: flex;
`;
const StatsContainer = styled.div`
  margin-top: 28px;
  grid-area: planet-stats;

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    margin-top: 0px;
  }
`;

const MobileSectionToggler = styled.div`
  grid-area: mobile-section-toggler;
`;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/planets");
  const planets = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = planets.map((planet) => ({
    params: { name: planet.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:3000/api/planets/${params.name}`);
  const planet = await res.json();

  // Pass post data to the page via props
  return { props: { planet } };
}
