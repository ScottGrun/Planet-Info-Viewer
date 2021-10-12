// Constants
export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  laptop: 1110,
};

// Themes
export const theme = {
  FONT_FAMILY: {
    antonio: "'Antonio', sans-serif",
    spartan: "'Spartan', sans-serif",
  },
  FONT_SIZES: {
    h1: `${80 / 16}rem`,
    h2: `${40 / 16}rem`,
    h3: `${12 / 16}rem`,
    h4: `${11 / 16}rem`,
    body: `${14 / 16}rem`,
  },
  WEIGHTS: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  QUERIES: {
    mobileAndUp: `(min-width: ${BREAKPOINTS.mobile / 16}rem)`,
    tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  },
  COLORS: {
    uranus: "#1EC1A2",
    neptune: "#2D68F0",
    mercury: "#419EBB",
    earth: "#6D2ED5",
    mars: "#D14C32",
    jupiter: "#D83A34",
    venus: "#EDA249",
    saturn: "#CD5120",
    white: "#FFFFFF",
    dark: {
      900: "#070724",
      700: "#38384F",
      500: "#838391",
      400: "#393950",
      200: '#20203A'
    },
  },
};
