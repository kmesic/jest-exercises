import {
    helloWorld,
    getData,
    specialMap
} from '../utils';

// Basic Example
describe('Hello World', () => {
    const SALESFORCE = "Salesforce";

    it('Hello World is returned', () => {
        // Example asserts
        // Look at: https://jestjs.io/docs/en/expect

        // TODO
    });

    it('Salesforce prepended', () => {
        const EXPECTED_RESULT = `${SALESFORCE} Hello World!`
        const res = helloWorld(true);

        // Example asserts
        // Look at: https://jestjs.io/docs/en/expect

        // TODO
    });
});

// Asynchrounous and mocking example
describe('Get Data Suite', () => {
    it('getData gets data and modifies correctly', () => {

        // TODO

    });
});

// --- Exercise 1 --- //
// TODO: Practice simple jest test and spying
describe('map', () => {
    it("map executes on every element", () => {
        const cb = (v, i) => `value: ${v}, index: ${i}`;
        let a = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        // 1. Verify that the result is correct
        // 2. Verify that callback was called correctly for each element

        // TODO:
    });
});
