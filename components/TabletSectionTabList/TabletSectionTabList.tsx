import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { Root } from "@radix-ui/react-radio-group";

interface TabletSectionTablistProps {
  onValueChange: Dispatch<SetStateAction<string>>;
  defaultValue?: string;
  value?: string;
  className?: string;
}

export const TabletSectionTabList: FC<TabletSectionTablistProps> = ({
  children,
  className,
  onValueChange,
  defaultValue,
  value,
}) => {
  return (
    <Wrapper
      className={className}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(e) => onValueChange(e)}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Root)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 16px;
  width: 281px;
  max-width: 281px;
  @media ${p => p.theme.QUERIES.laptopAndUp} {
    width: 350px;
  }
`;
