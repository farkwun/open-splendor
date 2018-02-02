export const nobles = [
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

export const levels = [
  {
    id: 1,
    row_cards: [
      {
        id: 1,
        prestige: 0,
        type: "blue",
        costs: [
          {
            type: "red",
            val: 1
          },
          {
            type: "green",
            val: 1
          },
          {
            type: "blue",
            val: 1
          }
        ]
      },
      {
        id: 2,
        prestige: 0,
        type: "blue",
        costs: [
          {
            type: "red",
            val: 1
          },
          {
            type: "green",
            val: 1
          },
          {
            type: "blue",
            val: 1
          }
        ]
      },
      {
        id: 3,
        prestige: 0,
        type: "blue",
        costs: [
          {
            type: "red",
            val: 1
          },
          {
            type: "green",
            val: 1
          },
          {
            type: "blue",
            val: 1
          }
        ]
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
        costs: [
          {
            type: "red",
            val: 2 
          },
          {
            type: "green",
            val: 2
          },
          {
            type: "blue",
            val: 2
          }
        ]
      },
      {
        id: 5,
        prestige: 1,
        type: "green",
        costs: [
          {
            type: "red",
            val: 2
          },
          {
            type: "green",
            val: 2
          },
          {
            type: "blue",
            val: 2
          }
        ]
      },
      {
        id: 6,
        prestige: 1,
        type: "green",
        costs: [
          {
            type: "red",
            val: 2
          },
          {
            type: "green",
            val: 2
          },
          {
            type: "blue",
            val: 2
          }
        ]
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
        costs: [
          {
            type: "red",
            val: 3
          },
          {
            type: "green",
            val: 3
          },
          {
            type: "blue",
            val: 3
          }
        ]
      },
      {
        id: 8,
        prestige: 2,
        type: "red",
        costs: [
          {
            type: "red",
            val: 3
          },
          {
            type: "green",
            val: 3
          },
          {
            type: "blue",
            val: 3
          }
        ]
      },
      {
        id: 9,
        prestige: 2,
        type: "red",
        costs: [
          {
            type: "red",
            val: 3
          },
          {
            type: "green",
            val: 3
          },
          {
            type: "blue",
            val: 3
          }
        ]
      }
    ]
  }
];

export const coins = [
  {
    type: "green",
    amount: 7
  },
  {
    type: "blue",
    amount: 7
  },
  {
    type: "red",
    amount: 7
  },
  {
    type: "white",
    amount: 7
  },
  {
    type: "black",
    amount: 7
  },
  {
    type: "yellow",
    amount: 5
  },
];

export const players = [
  {
    id: "Alice",
    prestige: 0,
    coins: [
    ],
    cards: [
      {
        id: 1,
        prestige: 0,
        type: "green",
        costs: [
          {
            type: "red",
            val: 1
          },
          {
            type: "green",
            val: 1
          },
          {
            type: "blue",
            val: 1
          }
        ]
      }
    ],
    nobles: [
    ]
  },
  {
    id: "Bob",
    prestige: 0,
    coins: [
      {
        type: "green",
        amount: 7
      },
      {
        type: "blue",
        amount: 7
      },
      {
        type: "red",
        amount: 7
      },
      {
        type: "white",
        amount: 7
      }
    ],
    cards: [
    ],
    nobles: [
    ]
  },
  {
    id: "Carol",
    prestige: 0,
    coins: [
    ],
    cards: [
    ],
    nobles: [
    ]
  },
  {
    id: "Dan",
    prestige: 0,
    coins: [
    ],
    cards: [
    ],
    discounts: [
    ],
    nobles: [
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
      }
    ]
  }
];

export const current_player = "Hello World";

export const round_num = 1;

export const play_order = ["Alice", "Bob", "Carol", "Dan"];

export const play_index = 0;
