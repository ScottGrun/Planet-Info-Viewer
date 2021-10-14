# Planet Info Viewer - Learn about the planets in AR or 3D

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl).

I built this project intending to strengthen my project structure and component composition. I also was super keen to learn about web components and the many benefits they provide.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [🧰 Built with](#built-with)
  - [💡 What I learned](#what-i-learned)

# Overview

## The challenge

MVP - Users should be able to:

- ✔️ View an image of each planetary body and seamless switch to viewing a cut out of its core
- ✔️ Seamlessly switch between each section in an accessible way
- ✔️ Each planet's image should have different sizes at the same breakpoint ex: mars will be smaller than earth at the same breakpoint
- ✔️ Be fully responsive

Extended Features - Users should be able to:

- ✔️ Animations
- ✔️ Seamlessly load in 3D models and not affect page performance
- ✔️ Add suport for Augemented Reality on iOS
- 🔲 Add support for Augmented Reality on Android

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/ssr-invoice-app-CN8rae-Gb)
- Live Site URL: [Add live site URL here](https://planet-info-viewer-scottgrun.vercel.app)

## My process

I went with a mobile-first approach for building this app which worked nicely. I would build components out completely across all breakpoints before moving on to the next. I also tried to break a bad habit of mine where I try to over-optimize too early on which just drags on the developments process and I believe I achieved that.

### 🧰 Built with

- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styling
- [Framer Motion](https://www.framer.com/docs/animation/) - For animations
- [model-viewer](https://modelviewer.dev) -

## 💡 What I learned

### 3D Doesn't Need to be Hard!

I learned how to effectively load in 3D models while keeping the page snappy. I was able to achieve this through a combination of lazy-loading the models since they are not the first thing viewed.

However, this means that when you clicked to view the model there would be a good 1-2seconds while the model loaded in where you would see a white square. I was able to overcome come this through the use of 'posters' meaning that when you click on the model I first display a .webp image that loads super fast and looks exactly like the model. Once the model loads the .webp image disappears and the model is displayed. This helps with the UX of the whole app as the user doesn't perceive the model loading cause they see an exact copy in image form for a second or two before it loads

### `<dl>` : The Description List element

At the bottom of the page is a set of facts normally I would just render these as a `<div>` or a `<ul>` however I thought there must be a more semantic way to associate this data with the planet, turns out there is!

Introducing the `<dl>` element, it is mainly used for implementing glossaries or to display metadata so I thought it would fit perfectly here.

Checkout this MDN example

```html
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

My implementation is almost the same. Each fact is a div wrapping a `<dt>` for the fact name, and a `<dd>` for the fact-value, with all facts being wrapped in a `<dl>`;

### Improving my Project Structure

Going into this project there were two key things I wanted to keep in mind and practice:

1.  Simpler code is easier to read and more maintainable.
2.  Keeping components that are tightly coupled together.

#### Simpler Code is Easier to Read and More Maintainable.

Over time I have developed a bad habit of trying to optimize my code as much as possible despite not having any problems that required this aggressive level of optimization. This often led to me writing to code that was fast yet hard to read and come back to. So during this project, I tried to just focus on building and worry a bit less about performance. Turns out this improved site performance because the code I wrote was easier for me to read and reason about and therefore easier for me to spot bugs.

#### Keeping Components that are Tightly Coupled Together.

Before this project, I believed that all components should have their file in the components folder. This led to me wasting time rooting around in the components folder looking for components that should only be used with a parent component. After looking at some open-source projects and getting some input from mentors I decided that **if a component should only be used with a parent it should be in that parent's folder too.**. This greatly improved the readability of the project structure and made it easier for me to reason where components live.
