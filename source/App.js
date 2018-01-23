import React from 'react';

import GameBoard from './GameBoard';

import * as mock from './MockData';

React.render(<GameBoard nobles={mock.nobles} levels={mock.levels} coins={mock.coins}/>, document.getElementById('root'));
