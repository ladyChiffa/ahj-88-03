import goblin from './goblin.png';
import './gamefield.css';

export default class GameField {
    constructor(element){
        if(typeof element === 'string') {
            element = document.querySelector(element);
        }
        this._element = element;
        this._dimension = 4;
        this._cells = [];
        this._currentCell = {x: undefined, y: undefined};
        this._goblin = null;

        this.moveGoblin = this.moveGoblin.bind(this);

        this.renderGameField();
        this.renderGoblin();
    }

    renderGameField() {
        for(let i = 0; i < this._dimension; i++) {
            // render row
            this._cells[i] = [];
            
            const row = document.createElement('div');
            row.classList = 'gamerow';
            this._element.append(row);

            for (let j = 0; j < this._dimension; j++) {
                // render cell
                const cell = document.createElement('div');
                cell.classList = 'gamecell';
                row.append(cell);
                this._cells[i][j] = cell;
            }
        }
    }

    renderGoblin() {
        this._goblin = document.createElement('img');
        this._goblin.src = goblin;
        this._goblin.classList = 'goblin';
        this.alt = 'Im here!';
    }

    moveGoblin() {
        let x;
        let y;
        do {
            x = Math.floor(Math.random() * this._dimension);;
            y = Math.floor(Math.random() * this._dimension);;
        } while (this._currentCell.x == x && this._currentCell.y == y);
        this._currentCell.x = x;
        this._currentCell.y = y;

        this._goblin.remove();
        this._cells[this._currentCell.x][this._currentCell.y].append(this._goblin);
    }

}
