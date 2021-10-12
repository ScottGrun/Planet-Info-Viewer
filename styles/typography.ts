import { css } from "styled-components";

// Base Header Styles
const baseHeaderStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.antonio};
  font-weight: ${(p) => p.theme.WEIGHTS.medium};
`;

// Header Text Styles

export const h1TextStyles = css`
  ${baseHeaderStyles}
  font-size: ${40 / 16}rem;
  line-height: 52px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    font-size: ${48 / 16}rem;
    line-height: 62px;
  }

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    font-size: ${(p) => p.theme.FONT_SIZES.h1};
    line-height: 104px;
  }
`;

export const h2TextStyles = css`
  ${baseHeaderStyles}
  font-size: ${(p) => p.theme.FONT_SIZES.h2};
  line-height: 104px;
`;

export const h3TextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${(p) => p.theme.FONT_SIZES.h3};
  line-height: 25px;
  letter-spacing: 2.5714285373687744px;
`;

export const h4TextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${(p) => p.theme.FONT_SIZES.h4};
  line-height: 25px;
  letter-spacing: 1px;
`;

// Body Text Style
export const bodyTextSyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.regular};
  font-size: 11px;
  line-height: 22px;

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${14 / 16}rem;
    line-height: 25px;
  }
`;

// Tabs
export const tabTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${9 / 16}rem;
  line-height: 10px;
  letter-spacing: 1.9285714626312256px;
`;

export const tabletTabTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${9 / 16}rem;
  line-height: 25px;
  letter-spacing: 1.9285714626312256px;

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${12 / 16}rem;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
  }
`;

// Info Source

export const sourceTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.regular};
  font-size: ${12 / 16}rem;
  line-height: 25px;
`;

// Planet Stats

export const planetStatLabelTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${8 / 16}rem;
  line-height: 16px;
  letter-spacing: 0.73px;

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${11 / 16}rem;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;

export const planetStatValueTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.antonio};
  font-weight: ${(p) => p.theme.WEIGHTS.regular};
  font-size: ${20 / 16}rem;
  line-height: 26px;
  letter-spacing: -0.75px;

  @media ${(p) => p.theme.QUERIES.tabletAndUp} {
    font-size: ${24 / 16}rem;
    line-height: 31px;
    letter-spacing: -0.8999999761581421px;
  }

  @media ${(p) => p.theme.QUERIES.laptopAndUp} {
    font-size: ${40 / 16}rem;
    line-height: 52px;
    letter-spacing: -1.5px;
  }
`;

// Mobile Menu Typography
export const mobileMenuTextStyles = css`
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  font-weight: ${(p) => p.theme.WEIGHTS.bold};
  font-size: ${15 / 16}rem;
  line-height: 25px;
  letter-spacing: 1.3636363744735718px;
`;
