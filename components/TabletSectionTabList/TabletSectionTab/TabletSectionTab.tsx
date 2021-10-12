import { tabletTabTextStyles } from "@/styles/typography";
import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "@radix-ui/react-radio-group";
import { useRouter } from "next/dist/client/router";

interface TabletSectionTabProps {
  tabNumber: string;
  selectedSection: string;
}

export const TabletSectionTab: FC<TabletSectionTabProps> = ({
  children,
  tabNumber,
  selectedSection,
}) => {
  // Get name of planet to determine what color to use as selected color
  const router = useRouter();
  const { name } = router.query;

  // Type narrowing
  const planetName = typeof name === "string" ? name : null;

  // The weird $ preappended to the prop name is to prevent transient props
  // https://styled-components.com/docs/api#transient-props
  return (
    <Wrapper
      $planetName={planetName}
      value={tabNumber}
      $selectedSection={selectedSection}
    >
      <span>0{parseInt(tabNumber) + 1}</span>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Item)<{
  value: string;
  $planetName: string | null;
  $selectedSection: string;
}>`
  ${tabletTabTextStyles};
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 40px;
  background-color: transparent;
  color: ${(p) => p.theme.COLORS.white};
  border: solid 1px ${(p) => p.theme.COLORS.dark[400]};
  text-transform: uppercase;
  width: 281px;
  transition: background-color 200ms ease;

  background-color: ${(p) => {
    return p.value === p.$selectedSection && p.$planetName
      ?
          // @ts-expect-error - Complaining about using a string as index - we know this is fine and can be ignored

       p.theme.COLORS[p.$planetName]
      : "transparent";
  }};

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.COLORS.dark[400]};
  }

  span {
    opacity: 0.5;
    margin-right: 17px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    width: 350px;
    height: 48px;
  }
`;
