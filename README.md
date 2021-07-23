# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Extra Challenges I Gave Myself

- 3D model of all planets
- AR model of all planets (IOS only for now)
- Server side rendering 

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/nextjs-styled-components-framer-motion-pNPMEcmZ5)
- Live Site URL: [Add live site URL here](https://planet-info-viewer-scottgrun.vercel.app)

## My process

1. Review the designs and check to see if a grid and design system are provided. If not I will attempt to create my own CSS design system (making sure to try and make things as reuseable and DRY as possible) and determine the best grid options.

2. Extract out whatever design system or style guide was provided into a styled components theme.

3. I will go through and create a mobile version of the website first and then make my way up the breakpoints untill all required breakpoints are covered.

4. Once the page is complete I will go through and check to see if any margins, padding, font sizes, or the copy is off / different from the designs.

5. After that I will make an accessibility sweep and make sure that that all images have alt text, font colors meet WCAG guidelines, and the appropriate aria labels are added, and that the page tab order makes sense.

6. Add in any micro animations that are part of the design.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library allowing me to create reusable components.
- [Next.js](https://nextjs.org/) - React framework to provide the SSR & SSG rendering capabilties.
- [Styled Components](https://styled-components.com/) - For styling components


### What I learned

This project was fairly deep dive for me. Throughout this project I challenged myself to learn technologies that I feel will become more important in the frontend world and that is Static and Server Side rendered apps, 3D / AR capable webistes, and sites that have fluid animations.

In building this app I overcame a couple of neat challenges outlined below.

1. Static generating pages makes things super fast.

2. Static generating pages makes things super fast but you loose access to the window object which can make things tricky. The model-viwer library that I used to display the 3D models requires access to the window object to make things work. So the soultion was to only start rendering the model on client and sinc pretty much everything else is done on the server this makes things super fast.

3. Really leveraging the themeing capabilties provided by styled-components makes things easy to change and manage from one central location.

### Continued development

1. In the future I plan to continue development by adding AR support for Android devices, currently it only works with IOS.

2. Refactor the data flow through the applications I feel like I could've used useContext in place of prop drilling everything.


## Author

- Website - [Add your name here](https://github.com/ScottGrun)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ScottGrun)
- Twitter - [@yourusername](https://twitter.com/scott_grun)

