import { tabTextStyles } from "@/styles/typography";
import { Tab } from "@reach/tabs";
import React, { FC } from "react";
import styled from "styled-components";

export const SectionTab: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled(Tab)`
  ${tabTextStyles};
  text-transform: uppercase;
  color: ${(p) => p.theme.COLORS.dark[500]};
  border-width: 4px;

 
`;
