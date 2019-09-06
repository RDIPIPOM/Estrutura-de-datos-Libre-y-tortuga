export default class Animal {
    constructor() {
        this._name = "";
        this._position = 0;
    }

    get name() {
        return this._name;
    }

    get position() {
        return this._position;
    }

    set name(name) {
        this._name = name;
    }
}