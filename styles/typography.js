import styled, { css } from 'styled-components';


export const baseLogoStyle = css`
    font-family: 'Antonio', sans-serif;
    font-size: ${28 / 16}rem;
    line-height: 36px;
    letter-spacing: -1.05px;
    color: ${p => p.theme.COLORS.white}
`;

export const baseBodyStyles = css`
font-family: ${p => p.theme.FONTS_FAMILY.Spartan};
font-weight:${p => p.theme.WEIGHTS.regular};
font-size: ${p => p.theme.FONT_SIZES.header4};
line-height: 22px;
`;

export const baseNavStyles = css`
 font-family: ${p => p.theme.FONTS_FAMILY.Spartan};
font-weight:${p => p.theme.WEIGHTS.bold};
font-size: ${11 / 16}rem;
line-height: 25px;
letter-spacing: 1px;
`;


export const basePlanetStatLabelStyle = css`
font-family: ${p=>p.theme.FONTS_FAMILY.Spartan};
font-weight: ${p=>p.theme.WEIGHTS.bold};
font-size: ${8 /16}rem;
line-height: 16px;
letter-spacing: 0.727273px;
`;

export const basePlanetStatValueStyle = css`
font-family: ${p=>p.theme.FONTS_FAMILY.Antonio};
font-weight: ${p=>p.theme.WEIGHTS.medium};
font-size: ${20 / 16}rem;
line-height: 26px;
letter-spacing: -0.75px;
`;


export const h2BaseStyles = css`
font-family: ${p => p.theme.FONTS_FAMILY.Antonio};
font-weight: ${p => p.theme.WEIGHTS.medium};
font-size: ${p => p.theme.FONT_SIZES.header2};
line-height: 52px;
`;

export const baseSectionNameStyles = css`
  font-weight: ${p => p.theme.WEIGHTS.bold};
    font-size: ${9 / 16}rem;
    line-height: 10px;
    letter-spacing: 1.92857px;
    `;