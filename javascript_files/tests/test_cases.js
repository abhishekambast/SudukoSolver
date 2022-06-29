var testCases = [
    {
        "level": "Breeze",
        "in": [
            [ , 6, 2,   , 7,  ,  9, 1,  ],
            [4,  , 9,  1,  , 6,  7,  , 5],
            [7, 5, 1,  9,  , 8,  2, 3, 6],

            [3,  ,  ,   , 9,  ,   ,  , 8],
            [ , 9, 7,  8,  , 4,  1, 2,  ],
            [ , 4, 8,  3,  , 1,  5, 7,  ],

            [9, 2, 6,  4,  , 7,  3, 5, 1],
            [1,  , 4,  6,  , 5,  8,  , 2],
            [ , 8, 3,   , 1,  ,  4, 6,  ]
        ],
        "out": [
            [8, 6, 2,  5, 7, 3,  9, 1, 4],
            [4, 3, 9,  1, 2, 6,  7, 8, 5],
            [7, 5, 1,  9, 4, 8,  2, 3, 6],

            [3, 1, 5,  7, 9, 2,  6, 4, 8],
            [6, 9, 7,  8, 5, 4,  1, 2, 3],
            [2, 4, 8,  3, 6, 1,  5, 7, 9],

            [9, 2, 6,  4, 8, 7,  3, 5, 1],
            [1, 7, 4,  6, 3, 5,  8, 9, 2],
            [5, 8, 3,  2, 1, 9,  4, 6, 7]
        ]
    },
    {
        "level": "Easy",
        "in": [
            [ ,  ,  ,  8, 7, 9,   ,  ,  ],
            [ ,  , 8,   ,  ,  ,  9,  ,  ],
            [ , 7, 4,   ,  ,  ,  3, 2,  ],

            [1,  ,  ,  2, 6, 8,   ,  , 9],
            [2,  ,  ,  7,  , 1,   ,  , 4],
            [6,  ,  ,  9, 4, 3,   ,  , 1],

            [ , 1, 6,   ,  ,  ,  4, 9,  ],
            [ ,  , 5,   ,  ,  ,  1,  ,  ],
            [ ,  ,  ,  1, 3, 6,   ,  ,  ]
        ],
        "out": [
            [3, 2, 1,  8, 7, 9,  5, 4, 6],
            [5, 6, 8,  3, 2, 4,  9, 1, 7],
            [9, 7, 4,  6, 1, 5,  3, 2, 8],

            [1, 4, 3,  2, 6, 8,  7, 5, 9],
            [2, 8, 9,  7, 5, 1,  6, 3, 4],
            [6, 5, 7,  9, 4, 3,  2, 8, 1],

            [7, 1, 6,  5, 8, 2,  4, 9, 3],
            [8, 3, 5,  4, 9, 7,  1, 6, 2],
            [4, 9, 2,  1, 3, 6,  8, 7, 5]
        ]
    },
    {
        "level": "Medium",
        "in": [
            [ ,  ,  ,   , 3,  ,  2, 4,  ],
            [ ,  , 8,   , 2,  ,  3, 7, 9],
            [ , 2,  ,  7,  ,  ,   , 5, 6],

            [ , 6, 7,   , 8,  ,   ,  ,  ],
            [ , 8, 3,   ,  , 1,   , 6, 7],
            [5,  , 1,   ,  ,  ,  8,  ,  ],

            [ ,  ,  ,  6, 4, 9,   , 2,  ],
            [ ,  ,  ,   , 7, 2,  9,  ,  ],
            [ ,  ,  ,  8,  ,  ,   ,  ,  ]
        ],
        "out": [
            [1, 7, 9,  5, 3, 6,  2, 4, 8],
            [6, 5, 8,  1, 2, 4,  3, 7, 9],
            [3, 2, 4,  7, 9, 8,  1, 5, 6],

            [9, 6, 7,  4, 8, 3,  5, 1, 2],
            [2, 8, 3,  9, 5, 1,  4, 6, 7],
            [5, 4, 1,  2, 6, 7,  8, 9, 3],

            [8, 3, 5,  6, 4, 9,  7, 2, 1],
            [4, 1, 6,  3, 7, 2,  9, 8, 5],
            [7, 9, 2,  8, 1, 5,  6, 3, 4]
        ]
    },
    {
        "level": "Hard",
        "in": [
            [ , 3,  ,  7,  ,  ,  9, 5,  ],
            [2,  , 9,  1,  ,  ,   ,  ,  ],
            [ , 7,  ,   ,  ,  ,   ,  ,  ],

            [6, 5,  ,   ,  ,  ,  8, 1,  ],
            [ ,  ,  ,   ,  , 1,   ,  , 9],
            [ ,  ,  ,   , 5,  ,   , 3,  ],

            [8,  ,  ,  5,  ,  ,   , 9, 2],
            [1,  ,  ,  3,  , 2,  6, 8,  ],
            [ ,  ,  ,   , 9,  ,  1,  , 7]
        ],
        "out": [
            [4, 3, 6,  7, 2, 8,  9, 5, 1],
            [2, 8, 9,  1, 6, 5,  4, 7, 3],
            [5, 7, 1,  4, 3, 9,  2, 6, 8],

            [6, 5, 2,  9, 7, 3,  8, 1, 4],
            [7, 4, 3,  6, 8, 1,  5, 2, 9],
            [9, 1, 8,  2, 5, 4,  7, 3, 6],

            [8, 6, 4,  5, 1, 7,  3, 9, 2],
            [1, 9, 7,  3, 4, 2,  6, 8, 5],
            [3, 2, 5,  8, 9, 6,  1, 4, 7]
        ]
    },
    {
        "level": "Extreme",
        "in": [
            [3,  ,  ,  8,  ,  ,   , 7,  ],
            [ ,  , 6,   , 5,  ,   ,  , 9],
            [ , 2,  ,   ,  ,  ,   ,  ,  ],

            [7,  ,  ,  2,  ,  ,   ,  , 8],
            [ ,  , 5,   , 9,  ,  3,  ,  ],
            [ , 1,  ,   ,  , 6,   ,  ,  ],

            [8,  ,  ,   , 4,  ,   ,  ,  ],
            [ , 9,  ,  3,  ,  ,  2,  ,  ],
            [ ,  ,  ,   ,  , 7,   ,  , 1]
        ],
        "out": [
            [3, 4, 9,  8, 2, 1,  6, 7, 5],
            [1, 7, 6,  4, 5, 3,  8, 2, 9],
            [5, 2, 8,  6, 7, 9,  4, 1, 3],

            [7, 6, 4,  2, 3, 5,  1, 9, 8],
            [2, 8, 5,  1, 9, 4,  3, 6, 7],
            [9, 1, 3,  7, 8, 6,  5, 4, 2],

            [8, 5, 1,  9, 4, 2,  7, 3, 6],
            [6, 9, 7,  3, 1, 8,  2, 5, 4],
            [4, 3, 2,  5, 6, 7,  9, 8, 1]
        ]
    }
]
