import styled from "styled-components";
import { useState } from "react";
import Script from "next/script";
import Head from "next/head";
import PlanetImgContainer from "../components/PlanetImgContainer/PlanetImgContainer";
import PlanetDescription from "../components/PlanetDescription/PlanetDescription";
import PlanetStatsContainer from "../components/PlanetStatsContainer/PlanetStatsContainer";
import MobileInfoSection from "../components/PlanetInfoSections/MobileInfoSection";
import { planets } from "../data/data.js";
import Navbar from "../components/Navbar/Navbar";

export default function Planet({ planet }) {
	const [sectionDisplayed, setSectionDisplayed] = useState(0);
	return (
		<>
			<Head>
				<title>Planet Info | {planet.name} </title>
				<link rel="shortcut icon" href={`/favicon.png`} />
			</Head>
			<Navbar />

			<MobileInfoSection
				sectionDisplayed={sectionDisplayed}
				setSectionDisplayed={setSectionDisplayed}
				planet={planet.name}
			/>
			<Wrapper>

				<ImgContainer>
					<PlanetImgContainer
						sectionDisplayed={sectionDisplayed}
						planetname={planet.name}
						modelSrc={planet.model}
						iosModelSrc={planet.iosModel}
						imgSrc={planet.images.planet}
						internalSrc={planet.images.internal}
						sizes={planet.sizes}
						planetName={planet.name}
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
						orbit={planet.orbit.content}
						orbitSrc={planet.orbit.source}
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
			<Script
				type="module"
				src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
			/>
		</>
	);
}

const Wrapper = styled.main`
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

export async function getStaticProps() {
	const planet = planets[0];
	return {
		props: { planet }, // will be passed to the page component as props
	};
}
