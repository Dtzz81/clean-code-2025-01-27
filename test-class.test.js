import {TestClass} from "./test-class";

describe('TestClass...', () => {
    test('', () => {
        expect(new TestClass().aMethod()).toBe(true);
    })
})

describe('Test probability', () => {
    test('determine the equality of 2 probabilities', () => {
        const probabilityA = new Probability(0.5);
        const probabilityB = new Probability(0.1);
        const result = probabilityA.equals(probabilityB)
        expect(result.toBe())
    })
}

)

