import React from 'react';
import { FaJs, FaCss3, FaHtml5, FaSass, FaReact } from 'react-icons/fa';
import {SiRedux} from 'react-icons/si'

export const work = [
{
  id: '0',
  title: 'countries',
  description:
    "Build with React, Redux and Sass. Project gets data from REST Countries API. It's using react-router with hash history. Layout is using flexbox. It's build with mobile first approach, and has only one breakpoint at 1100px but still behave good on all devices. I decided to make one API call to get all informations (beyond the pictures), and filter through them (informations) to show user what he wants. I also made some kind of infinite scrolling, to make less requests (for images) at the same time, and to make it more performant. You can click through border countries (sadly it only shows land borders). In future I will maybe implement some kind of game to go from one(random) country to the other indicated country. It could be some kind of geographical educational game.",
  technologies: [
    <FaReact className="react" key={0} />,
    <SiRedux className="redux" key={1} />,
    <FaSass className="sass" key={2} />,
  ],
  linkCode: 'https://github.com/Haxikowy/fem-rest-api-countries',
  linkLive: 'https://haxikowy.github.io/fem-rest-api-countries/',
  images: [
    {
    id: 0,
    path: './assets/countries/desktop-dark-home.png',
    alt: 'Calculator app',
  },
  {
    id: 1,
    path: '/assets/countries/desktop-dark-description.png',
    alt: 'Tetris game on desktop - how to play section.',
  },
  {
    id: 2,
    path: './assets/countries/desktop-light-home.png',
    alt: 'Tetris game on mobile - starting screen.',
  },
  {
    id: 3,
    path: './assets/countries/desktop-light-description.png',
    alt: 'Tetris game on mobile - how to play section.',
  },
  {
    id: 4,
    path: './assets/countries/mobile-dark-home.png',
    alt: 'Tetris game on mobile while playing.',
  },
  {
    id: 5,
    path: './assets/countries/mobile-dark-description1.png',
    alt: 'Tetris game on mobile while playing.',
  },
  {
    id: 6,
    path: './assets/countries/mobile-dark-description2.png',
    alt: 'Tetris game on mobile while playing.',
  },
  {
    id: 7,
    path: './assets/countries/mobile-light-home.png',
    alt: 'Tetris game on mobile while playing.',
  },
  {
    id: 8,
    path: './assets/countries/mobile-light-description1.png',
    alt: 'Tetris game on mobile while playing.',
  },
  {
    id: 9,
    path: './assets/countries/mobile-light-description2.png',
    alt: 'Tetris game on mobile while playing.',
  }
]
},
{
  id: '1',
  title: 'tetris',
  description:
    `Tetris game with points system from NES version. Game works also on mobile. Points are stored at local storage. Game isn't using any framework just vanilla JavaScript. Game engine is written in one object. Most challenging was part with collision system and block rotation. I've done some animation on line clear, also game is speeding up after every 10 lines you clear. Before starting game you can change your level, as level progresses you earn more points.`,
  technologies: [
    <FaJs className="js" key={0} />,
    <FaHtml5 className="html" key={1} />,
    <FaCss3 className="css" key={2} />,
  ],
  linkCode: 'https://github.com/Haxikowy/tetris',
  linkLive: 'https://haxikowy.github.io/tetris/',
  images: [{
    id: 0,
    path: './assets/tetris/desktop.png',
    alt: 'Tetris game on desktop while playing.',
  },
  {
    id: 1,
    path: '/assets/tetris/desktop-i.png',
    alt: 'Tetris game on desktop - how to play section.',
  },
  {
    id: 2,
    path: './assets/tetris/mobile.png',
    alt: 'Tetris game on mobile - starting screen.',
  },
  {
    id: 3,
    path: './assets/tetris/mobile-i.png',
    alt: 'Tetris game on mobile - how to play section.',
  },
  {
    id: 4,
    path: './assets/tetris/mobile-p.png',
    alt: 'Tetris game on mobile while playing.',
  }]
},
{
  id: '2',
  title: 'calculator',
  description:
    `Vanilla JavaScript calculator. You can switch between three different themes, and it detects whether dark or light you want to use(by your browser settings). Final solution is slightly different than the design(it's another solution to Frontend Mentor challenge), but I wanted to give this project something "mine". I really like the last theme it's a bit unusual, so it get's me.`,
  technologies: [
    <FaJs className="js" key={0} />,
    <FaHtml5 className="html" key={1} />,
    <FaCss3 className="css" key={2} />,
  ],
  linkCode: 'https://github.com/Haxikowy/fem-calculator-app',
  linkLive: 'https://haxikowy.github.io/fem-calculator-app',
  images: [{
    id: 0,
    path: './assets/calculator/desktop-dark.png',
    alt: 'Calculator app on desktop - dark mode',
  },
  {
    id: 1,
    path: '/assets/calculator/desktop-light.png',
    alt: 'Calculator app on desktop - light mode',
  },
  {
    id: 2,
    path: './assets/calculator/desktop-alt.png',
    alt: 'Calculator app on desktop - alt colors mode',
  },
  {
    id: 3,
    path: './assets/calculator/desktop-alt-i.png',
    alt: 'Calculator app on desktop - alt colors mode with sample input',
  },
  {
    id: 4,
    path: './assets/calculator/mobile-dark.png',
    alt: 'Calculator app on mobile - dark mode with sample input',
  },
  {
    id: 5,
    path: './assets/calculator/mobile-light.png',
    alt: 'Calculator app on mobile - light mode with sample input',
  },
  {
    id: 6,
    path: './assets/calculator/mobile-alt.png',
    alt: 'Calculator app on mobile - alt colors mode with sample input',
  }]
}]