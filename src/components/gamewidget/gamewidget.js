import './gamewidget.css';

export default class GameWidget {
    constructor (element, gameField) {
        if(typeof element === 'string') {
            element = document.querySelector(element);
        }
        this._element = element;
        this._score = 0;
        this._errorScore = 0;

        this._gameField = gameField;

        this.startGame = this.startGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.blowHandler = this.blowHandler.bind(this);

        this.renderGameWidget();
    }

    renderGameWidget() {
        const label = document.createElement('div');
        label.classList = 'label';
        label.innerText = 'Счет:';
        this._element.append(label);

        this._scoreElement = document.createElement('div');
        this._scoreElement.classList = 'score';
        this._scoreElement.innerText = this._score;
        this._element.append(this._scoreElement);

        const errorLabel = document.createElement('div');
        errorLabel.classList = 'label';
        errorLabel.innerText = 'Ошибок:';
        this._element.append(errorLabel);

        this._errorElement = document.createElement('div');
        this._errorElement.classList = 'score';
        this._errorElement.innerText = this._errorScore;
        this._element.append(this._errorElement);

        const startButton = document.createElement('div');
        startButton.classList = 'button';
        startButton.innerText = 'Начать игру';
        this._element.append(startButton);

        const stopButton = document.createElement('div');
        stopButton.classList = 'button';
        stopButton.innerText = 'Стоп';
        this._element.append(stopButton);

        startButton.addEventListener('click', this.startGame);
        stopButton.addEventListener('click', this.stopGame);
    }

    startGame() {
        this._score = 0;
        this._errorScore = 0;
        this._scoreElement.innerText = this._score;
        this._errorElement.innerText = this._errorScore;
        this._gameField.startMove(this.blowHandler);
    }
    stopGame() {
        this._gameField.stopMove();
    }

    blowHandler(success) {
        if (success) {
            this._scoreElement.innerText = ++this._score
        }
        else {
            this._errorElement.innerText = ++this._errorScore;
            if (this._errorScore >= 5) this.stopGame();
        }
    }
}