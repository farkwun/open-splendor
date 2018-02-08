export const noble_list = [1, 2, 3, 4, 5];

export const levels = [
  {
    id: 1,
    row_cards: [1, 2, 3]
  },
  {
    id: 2,
    row_cards: [4, 5, 6]
  },
  {
    id: 3,
    row_cards: [7, 8, 9]
  }
];

export const coins = {
  green: 7,
  blue: 7,
  red: 7,
  white: 7,
  black: 7,
  yellow: 5
};

export const players = {
  Alice: {
    id: "Alice",
    prestige: 0,
    coins: {},
    cards: [10],
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
    nobles: [6]
  }
};

export const cards = {
  1: {
    id: 1,
    prestige: 0,
    type: "blue",
    costs: {
      red: 1,
      green: 1,
      blue: 1
    }
  },
  2: {
    id: 2,
    prestige: 0,
    type: "blue",
    costs: {
      red: 1,
      green: 1,
      blue: 1
    }
  },
  3: {
    id: 3,
    prestige: 0,
    type: "blue",
    costs: {
      red: 1,
      green: 1,
      blue: 1
    }
  },
  4: {
    id: 4,
    prestige: 1,
    type: "green",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  5: {
    id: 5,
    prestige: 1,
    type: "green",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  6: {
    id: 6,
    prestige: 1,
    type: "green",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  7: {
    id: 7,
    prestige: 2,
    type: "red",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  8: {
    id: 8,
    prestige: 2,
    type: "red",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  9: {
    id: 9,
    prestige: 2,
    type: "red",
    costs: {
      red: 2,
      green: 2,
      blue: 2
    }
  },
  10: {
    id: 1,
    prestige: 0,
    type: "green",
    costs: {
      red: 1,
      green: 1,
      blue: 1
    }
  }
};

export const nobles = {
  1: {
    id: 1,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  2: {
    id: 2,
    prestige: 3,
    costs: {
      black: 4,
      red: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  3: {
    id: 3,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  4: {
    id: 4,
    prestige: 3,
    costs: {
      black: 4,
      red: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  5: {
    id: 5,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  },
  6: {
    id: 6,
    prestige: 3,
    costs: {
      red: 4,
      green: 4
    },
    img_url:
      "https://cf.geekdo-images.com/A_GXbAh-oYSAOGOVYFXPAHvfezU=/fit-in/1200x630/pic2803135.jpg"
  }
};

export const current_player = "Hello World";

export const round_num = 1;

export const play_order = ["Alice", "Bob", "Carol", "Dan"];

export const play_index = 0;
