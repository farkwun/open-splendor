import React from 'react';

import GameBoard from './GameBoard';
let nobles = [
  {
    id: 1,
    prestige: 3,
    costs: [
      {
        type: "red",
        val: 4
      },
      {
        type: "green",
        val: 4
      },
    ],
    img_url: "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 2,
    prestige: 3,
    costs: [
      {
        type: "black",
        val: 4
      },
      {
        type: "red",
        val: 4
      },
    ],
    img_url: "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 3,
    prestige: 3,
    costs: [
      {
        type: "red",
        val: 4
      },
      {
        type: "green",
        val: 4
      },
    ],
    img_url: "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 4,
    prestige: 3,
    costs: [
      {
        type: "red",
        val: 4
      },
      {
        type: "green",
        val: 4
      },
    ],
    img_url: "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 5,
    prestige: 3,
    costs: [
      {
        type: "red",
        val: 4
      },
      {
        type: "green",
        val: 4
      },
    ],
    img_url: "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
];

React.render(<GameBoard nobles={nobles}/>, document.getElementById('root'));
