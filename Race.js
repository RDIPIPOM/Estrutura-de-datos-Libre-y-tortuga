import Dice from "./Dice.js";

export default class Race {
    constructor(steps = 0, players = new Array(), dice = new Dice(6)) {
        this._steps = steps;
        this._players = players;
        this._dice = dice
        this._winners = new Array();
    }

    set steps(steps) {
        this._steps = steps;
    }

    set players(players) {
        this._players = players;
    }

    set dice(dice){
        this._dice = dice;
    }

    start() {
        do {
            this._nextEvent();
            for (let i = 0; i < this._players.length; i++) {
                if (this._players[i].position === this._steps)
                    this._winners.push(this._players[i]);
            }
        } while (this._winners.length === 0);

        this._showFinalResults();
    }

    _nextEvent() {
        for (let i = 0; i < this._players.length; i++) {
            this._players[i].run(this._dice.roll(), this._steps);
        }
        this._showPosition();
    }

    _showPosition() {
        console.log('*******************************');
        for (let i = 0; i < this._players.length; i++) {
            console.log(this._players[i].name + ': ' + this._players[i].position);
        }
        console.log('*******************************');
    }

    _showFinalResults() {
        console.log('///////////////////////////');
        if (this._winners.length === 1)
            console.log('The winner is: ' + this._winners[0].name);
        else {
            console.log('It was a draw between: ');
            for (let i = 0; i < this._winners.length; i++) {
                console.log(this._winners[i].name);
            }
        }
        console.log('///////////////////////////');
    }
}