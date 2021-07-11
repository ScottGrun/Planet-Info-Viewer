import React from "react";
import styled from "styled-components";
import Image from "next/image";
import backgroundImgSrc from '../../public/assets/background-stars.svg';
export default function Background() {
  return (
    <BackgroundImg>
      <Image
        src={backgroundImgSrc}
        layout="fill"
        objectFit="cover"
        alt="Image of a starfield"
      />
    </BackgroundImg>
  );
}

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
