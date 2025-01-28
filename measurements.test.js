import {Galon} from "./galon";
import {Teaspoon} from "./teaspoon";

describe('Test Measurement... ', () => {
    test('Two equal measurements are equal', () => {
        expect(new Galon(1).equals(new Galon(1))).toBe(true);
    })
    test('Two equal probabilities are equal', () => {
        expect(new Teaspoon(1).equals(new Teaspoon(1))).toBe(true);
    })
    test('Two equal probabilities are equal', () => {
        expect(new Galon(1).equals(new Teaspoon(1))).toBe(false);
    })

})





