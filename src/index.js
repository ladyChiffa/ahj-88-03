import GameField from './components/gamefield/gamefield.js';

const gameField = new GameField('.gamefield');
setInterval(gameField.moveGoblin, 1000);
