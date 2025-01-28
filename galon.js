import {Teaspoon} from "./teaspoon";
export class Galon{
    constructor(value) {
        this.value = value
    }

    equals(other){
        return this.value == other.value && this.constructor == other.constructor
    }
    sameVolume(other)
    {
        return this.value.volumeInTeaspoons().equals(other.value.volumeInTeaspoons())
    }
volumeInTeaspoons()
{
    return new Teaspoon (this.value * 768)
}

}

















