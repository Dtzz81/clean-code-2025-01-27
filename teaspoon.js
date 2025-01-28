export class Teaspoon{
    constructor(value) {
        this.value = value
    }

    equals(other){
        return this.value == other.value && this.constructor == other.constructor

    }
}
