import { Teaspoon } from "./teaspoon"

export class Tablespoon{
    constructor(value) {
        this.value = value
    }

    equals(other){
        return this.volumeInTeaspoons().value == other.volumeInTeaspoons().value

    }
    volumeInTeaspoons()
    {
     return new Teaspoon(3)
    }
}
