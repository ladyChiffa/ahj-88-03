import GameField from './components/gamefield/gamefield.js';
import GameWidget from './components/gamewidget/gamewidget.js';

const gameField = new GameField('.gamefield');
const game = new GameWidget('.game', gameField);
