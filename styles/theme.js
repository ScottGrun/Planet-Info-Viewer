// Constants
export const BREAKPOINTS = {
	phone: 375,
	tablet: 768,
	laptop: 1110,
};

// Themes
export const theme = {
    FONTS_FAMILY:{
        Antonio: "'Antonio', sans-serif",
        Spartan: "'Spartan', sans-serif",
    },
	FONT_SIZES: {
		h1: `${80 / 16}rem`,
		header2: `${40 / 16}rem`,
		header3: `${12 / 16}rem`,
		header4: `${11 / 16}rem`,
		body: `${14 / 16}rem`,
	},
	WEIGHTS: {
		regular: 400,
        medium: 500,
		bold: 700,
	},
	QUERIES: {
		phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
		tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
		laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
	},
	COLORS: {
		white: 'hsla(0, 0%, 100%, 1)',
        dark: {
            900: 'hsla(240, 67%, 8%, 1)',
            700: 'hsla(240, 17%, 26%, 1)',
            500: 'hsla(240, 6%, 54%, 1)',
        },
		'Mercury': 'hsla(194, 48%, 50%, 1)',
		'Venus': 'hsla(33, 82%, 61%, 1)',
		'Earth': 'hsla(263, 66%, 51%, 1)',
		'Mars':'hsla(10, 63%, 51%, 1)',
		'Jupiter':'hsla(2, 68%, 53%, 1)',
		'Saturn':'hsla(17, 73%, 46%, 1)',
		'Uranus': 'hsla(168, 73%, 44%, 1)',
		'Neptune':'hsla(222, 87%, 56%, 1)'
	},
};
