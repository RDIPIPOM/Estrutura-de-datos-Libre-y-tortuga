import Animal from "./Animal.js";

export default class Hare extends Animal {
    constructor(name, position) {
        super(name, position);
    }

    run(numberResult, maxSteps) {
        /*
        35% += 1 little jump
        20% += 9 big jump
        20% = 0 sleep
        15% -= 2 little slide
        10% -= 12 big slide
        */
        if (numberResult <= 35)
            this._position += 1;
        else if (numberResult <= 55)
            this._position += 9;
        else if (numberResult <= 75)
            this._position += 0;
        else if (numberResult <= 90)
            this._position -= 2;
        else
            this._position -= 12;
        //if exceed the maximum position then correct it
        if (this._position > maxSteps)
            this._position = maxSteps;
    }
}