export class Teaspoon{
    constructor(value) {
        this.value = value
    }

    equals(other){
        return this.volumeInTeaspoons().value == other.volumeInTeaspoons().value

    }
    add(other)
    {
       this.value = this.volumeInTeaspoons().value + other.volumeInTeaspoons().value
    return this
    }
    volumeInTeaspoons()
    {
     return this
    }
}
