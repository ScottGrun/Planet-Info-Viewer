import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
:root {
  --reach-dialog: 1;
}

body{
  background-color: ${(p) => p.theme.COLORS.dark[900]};
  color: white;
  font-family: ${(p) => p.theme.FONT_FAMILY.spartan};
  background-image: url('/assets/background-stars.svg')
}

a {
  text-decoration: none;
  color: inherit;
}

html, body, #root,#__next {
  font-size: 16px;
  height: 100vh;
}

body::-webkit-scrollbar {
  width: 8px;              /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: transparent !important;    
    /* color of the tracking area */
}

model-viewer#reveal {
    --poster-color: transparent;
  }

`;
