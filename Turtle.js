import Animal from "./Animal.js";

export default class Turtle extends Animal {
    constructor(name, position, dice) {
        super(name, position, dice);
    }

    run(numberResult, maxSteps) {
        /*
        50% += 3
        30% += 1
        20% -= 6
        */
        if (numberResult <= 50)
            this._position += 3
        else if (numberResult <= 80)
            this._position += 1
        else
            this._position -= 6

        //if exceed the maximum position then correct it
        if (this._position > maxSteps)
            this._position = maxSteps;
    }
}