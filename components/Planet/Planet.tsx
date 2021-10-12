import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

interface PlanetProps {
  alt: string;
  src: string;
}

export const Planet: FC<PlanetProps> = ({ alt, src }) => {
  return <Image src={src} alt={alt} layout="fill" loading="eager" />;
};

const Wrapper = styled.div`

`;
