import {Galon} from "./galon";
import {Teaspoon} from "./teaspoon";
import { Tablespoon } from "./tablespoon";

describe('Test Measurement... ', () => {
    test('Two equal measurements are equal', () => {
        expect(new Galon(1).equals(new Galon(1))).toBe(true);
    })
    test('two separate teaspons are equal', () => {
        expect(new Teaspoon(1).equals(new Teaspoon(1))).toBe(true);
    })
    test('a galon and a teasspoon are not equal', () => {
        expect(new Galon(1).equals(new Teaspoon(1))).toBe(false);
    })
    test('Convert volume to teaspons', () => {
        expect(new Galon(1).volumeInTeaspoons().equals(new Teaspoon(768))).toBe(true);
    })
    test('Convert volume of tablespoons to teaspoons', () => {
        expect(new Tablespoon(1).equals(new Teaspoon(3))).toBe(true);
    })
    test('Add volume in teaspoons', () => {
        expect(new Teaspoon(1).add(new Teaspoon(2)).equals(new Teaspoon(3))).toBe(true);
    })
    test('Add teaspoons in tablespoons', () => {
        expect(new Tablespoon(1).add(new Teaspoon(3)).equals(new Tablespoon(2))).toBe(true);
    })


})





