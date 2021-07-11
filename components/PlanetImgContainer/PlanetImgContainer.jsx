import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import useWindowSize from "../../hooks/useWindowSize";

export default function PlanetImgContainer({
  className,
  imgSrc,
  sizes,
  internalSrc,
  modelSrc,
  iosModelSrc,
  sectionDisplayed,
}) {
  const [planetSize, setPlanetSize] = useState(0);
  const [isBrowser, setIsBorwser] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();

  useEffect(() => setIsBorwser(true), []);

  useEffect(() => {
    if (width > 1440) {
      setPlanetSize(2);
    } else if (width > 768) {
      setPlanetSize(1);
    } else {
      setPlanetSize(0);
    }
  }, [width]);

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <Wrapper
        className={className}
        height={sizes[planetSize]}
        width={sizes[planetSize]}
        sectionDisplayed={sectionDisplayed}
      >
        <AnimatePresence>
          <motion.div
            key={router.query.name}
            transition={{ type: "spring", stiffness: 100 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <PlanetVector sectionDisplayed={sectionDisplayed}>
              <Image
                alt="Image of planet."
                src={imgSrc}
                layout="fixed"
                height={sizes[planetSize]}
                width={sizes[planetSize]}
              />
            </PlanetVector>
          </motion.div>
        </AnimatePresence>

        {sectionDisplayed == 1 && (
          <PlanetOverlay sectionDisplayed={sectionDisplayed}>
            <Image
              alt="Image of planet's core"
              src={internalSrc}
              layout="fixed"
              height={sizes[planetSize]}
              width={sizes[planetSize]}
            />
          </PlanetOverlay>
        )}

        {isBrowser && (
          <model-viewer
            sectionDisplayed={sectionDisplayed}
            id="planet-model"
            src={modelSrc}
            ios-src={iosModelSrc}
            alt="A 3D model of a planet"
            autorotate
            ar
            placement="floor"
            ar-modes="webxr scene-viewer quick-look"
            auto-rotate
            camera-controls
          />
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 314px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    height: 100%;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    height: 100%;
  }
  /* Hack for SSR and making model feel quick */
  /* Everything but the model is rendered on the server so its quick, model loads when client loads but we hide it while its loading :D */
  #planet-model {
    position: ${(p) => (p.sectionDisplayed === 2 ? "relative" : "absolute")};
    visibility: ${(p) => (p.sectionDisplayed === 2 ? "visible" : "hidden")};
    width: ${(p) => p.width}px;
    height: ${(p) => p.height}px;
  }
`;

const PlanetVector = styled.div`
  display: ${(p) => (p.sectionDisplayed !== 2 ? "block" : "none")};
`;

const PlanetOverlay = styled.div`
  position: absolute;
`;
