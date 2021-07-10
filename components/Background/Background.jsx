import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Background() {
  return (
    <BackgroundImg>
      <Image
        src="/assets/background-stars.svg"
        layout="fill"
        objectFit="cover"
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
