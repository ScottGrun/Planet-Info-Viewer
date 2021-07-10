import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function PlanetModel({ className, sizes, modelSrc, sectionDisplayed }) {
  const [isBrowser, setIsBorwser] = useState(false);
  console.log(modelSrc, sectionDisplayed)
  useEffect(()=> setIsBorwser(true), [sectionDisplayed]);

  console.log(sectionDisplayed)

  return (
    <>
      <Script  type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      <Wrapper className={className} height={sizes[planetSize]} width={sizes[planetSize]} sectionDisplayed={sectionDisplayed}>
        {isBrowser && <model-viewer sectionDisplayed={sectionDisplayed} id="planet-model" src={modelSrc} alt="A 3D model of an astronaut" autorotate ar ar-modes="webxr scene-viewer quick-look" environment-image="neutral" auto-rotate camera-controls></model-viewer>}
      </Wrapper>
    </>

  )
}

const Wrapper = styled.div`
  /* Hack for SSR and making model feel quick */
  /* Everything but the model is rendered on the server so its quick, model loads when client loads but we hide it while its loading :D */
  #planet-model{
    position: ${p=> p.sectionDisplayed === 3 ? 'relative' : 'absolute'};
    visibility: ${p=> p.sectionDisplayed === 3 ? 'visible' : 'hidden'};
    width: ${p => p.width}px;
    height: ${p => p.height}px;
  }

`;

