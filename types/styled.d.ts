import 'styled-components';

declare module "styled-components" {
  export interface FONTFAMILY {
    antonio: string;
    spartan: string;
  }

  export interface FONTSIZES {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    body: string;
  }

  export interface WEIGHTS {
    regular: number;
    medium: number;
    bold: number;
  }

  export interface QUERIES {
    mobileAndUp: string;
    tabletAndUp: string;
    laptopAndUp: string;
  }

  export interface Dark {
    900: string;
    700: string;
    500: string;
    400: string;
    200: string;

  }

  export interface COLORS {
    uranus: string;
    neptune: string;
    mercury: string;
    earth: string;
    mars: string;
    jupiter: string;
    venus: string;
    saturn: string;
    white: string;
    dark: Dark;

  }

  export interface DefaultTheme {
    FONT_FAMILY: FONTFAMILY;
    FONT_SIZES: FONTSIZES;
    WEIGHTS: WEIGHTS;
    QUERIES: QUERIES;
    COLORS: COLORS;
  }

  export interface RootObject {
    theme: Theme;
  }
}
