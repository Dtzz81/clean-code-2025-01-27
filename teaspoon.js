export class Teaspoon{
    constructor(value) {
        this.value = value
    }

    equals(other){
        return this.volumeInTeaspoons().value == other.volumeInTeaspoons().value

    }
    volumeInTeaspoons()
    {
     return this
    }
}
