import { 
    helloWorld,
    getData,
    specialMap
} from '../utils';

// Basic Example
describe('Hello World', () => {
    const SALESFORCE = "Salesforce";

    it('Hello World is returned', () => {
        const EXPECTED_RESULT = "Hello World!"
        const res = helloWorld(false);

        // Example asserts
        // Look at: https://jestjs.io/docs/en/expect
        expect(res).toEqual(EXPECTED_RESULT);
        expect(res).toBe(EXPECTED_RESULT);
        expect(res).not.toBe(null);
    });

    it('Salesforce prepended', () => {
        const EXPECTED_RESULT = `${SALESFORCE} Hello World!`
        const res = helloWorld(true);

        // Example asserts
        // Look at: https://jestjs.io/docs/en/expect
        expect(res).toEqual(EXPECTED_RESULT);
        expect(res).toContain(SALESFORCE);
    });
});

// Asynchrounous and mocking example
describe('Get Data Suite', () => {
    it('getData gets data and modifies correctly', () => {
        // Mock data for fetch call
        const mockData = {
            data: {
                salesforce: true
            },
            json: jest.fn().mockImplementation(() => Promise.resolve({ data: mockData.data }))
        };

        // Expected Result
        const expectedResult = { 
            data: {...mockData.data}
        };
        expectedResult.data.salesforce = "Salesforce rocks!";

        const oldFetch = window.fetch;
        window.fetch = jest.fn(() => Promise.resolve(mockData));

        /**
         * const oldFetch = global.fetch;
         * global.fetch = jest.fn(() => Promise.resolve(mockData));
         * 
         * This is the same as above...node uses global instead of window...
         * doesn't really matter what you use as jest has virtual dom, thus has a window object
         * Personally if your testing UI, then use window, if testing node scripts, then use global
         */

        // Return a promise so the test waits...
        return getData().then((res) => {
            expect(res).toBe(JSON.stringify(expectedResult));
            window.fetch = oldFetch;
        });
    });
});


// TODO: Practice simple jest test and spying 
describe('map', () => {
    it("map executes on every element", () => {
        const cb = (v, i) => `value: ${v}, index: ${i}`;
        let a = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

        // TODO: 
        // 1. Verify that the result is correct
        // 2. Verify that callback was called correctly for each element
    });
});