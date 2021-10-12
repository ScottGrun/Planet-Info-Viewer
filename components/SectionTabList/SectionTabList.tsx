import React, { FC } from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import { TabList } from "@reach/tabs";
import "@reach/tabs/styles.css";

interface TablistProps {
  className?: string;
}

export const SectionTabList: FC<TablistProps> = ({ children, className }) => {
  // Get name of planet to determine what color to use as selected color
  const router = useRouter();
  const { name } = router.query;

  // The weird $ preappended to the prop name is to prevent transient props
  // https://styled-components.com/docs/api#transient-props

  // Type narrowing
  const planetName = typeof name === "string" ? name : null;

  return (
    <Wrapper $planetName={planetName} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(TabList)<{ $planetName: string | null }>`
  display: flex;
  justify-content: space-around;
  height: 52px;
  border-bottom: solid 1px ${(p) => p.theme.COLORS.dark[400]};

  [data-reach-tab][data-selected] {
    color: ${(p) => p.theme.COLORS.white};
    border-color: ${(p) => {
      // @ts-expect-error - Complaining about using a string as index - we know this is fine and can be ignored
      return p.theme.COLORS[p.$planetName ?? "white"];
    }};
  }
`;
