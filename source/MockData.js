export const nobles = [
  {
    id: 1,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 2,
    prestige: 3,
    costs: {
      black: 4,
      red: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 3,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 4,
    prestige: 3,
    costs: {
      black: 4,
      red: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  {
    id: 5,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  }
];

export const levels = [
  {
    id: 1,
    row_cards: [
      {
        id: 1,
        prestige: 0,
        type: "blue",
        costs: {
          red: 1,
          green: 1,
          blue: 1
        }
      },
      {
        id: 2,
        prestige: 0,
        type: "blue",
        costs: {
          red: 1,
          green: 1,
          blue: 1
        }
      },
      {
        id: 3,
        prestige: 0,
        type: "blue",
        costs: {
          red: 1,
          green: 1,
          blue: 1
        }
      }
    ]
  },
  {
    id: 2,
    row_cards: [
      {
        id: 4,
        prestige: 1,
        type: "green",
        costs: {
          red: 2,
          green: 2,
          blue: 2
        }
      },
      {
        id: 5,
        prestige: 1,
        type: "green",
        costs: {
          red: 2,
          green: 2,
          blue: 2
        }
      },
      {
        id: 6,
        prestige: 1,
        type: "green",
        costs: {
          red: 2,
          green: 2,
          blue: 2
        }
      }
    ]
  },
  {
    id: 3,
    row_cards: [
      {
        id: 7,
        prestige: 2,
        type: "red",
        costs: {
          red: 3,
          green: 3,
          blue: 3
        }
      },
      {
        id: 8,
        prestige: 2,
        type: "red",
        costs: {
          red: 3,
          green: 3,
          blue: 3
        }
      },
      {
        id: 9,
        prestige: 2,
        type: "red",
        costs: {
          red: 3,
          green: 3,
          blue: 3
        }
      }
    ]
  }
];

export const coins = {
  green: 7,
  blue: 7,
  red: 7,
  white: 7,
  black: 7,
  green: 7,
  yellow: 5
};

export const players = {
  Alice: {
    id: "Alice",
    prestige: 0,
    coins: {},
    cards: [
      {
        id: 1,
        prestige: 0,
        type: "green",
        costs: {
          red: 1,
          green: 1,
          blue: 1
        }
      }
    ],
    nobles: []
  },
  Bob: {
    id: "Bob",
    prestige: 0,
    coins: {
      green: 7,
      blue: 7,
      red: 7,
      white: 7
    },
    cards: [],
    nobles: []
  },
  Carol: {
    id: "Carol",
    prestige: 0,
    coins: {},
    cards: [],
    nobles: []
  },
  Dan: {
    id: "Dan",
    prestige: 0,
    coins: {},
    cards: [],
    discounts: [],
    nobles: [
      {
        id: 1,
        prestige: 3,
        costs: {
          red: 4,
          green: 4
        },
        img_url:
          "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
      }
    ]
  }
};

export const current_player = "Hello World";

export const round_num = 1;

export const play_order = ["Alice", "Bob", "Carol", "Dan"];

export const play_index = 0;
