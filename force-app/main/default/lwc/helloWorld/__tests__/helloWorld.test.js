import { createElement } from 'lwc';
import HelloWorld from 'c/helloWorld';

/**
 * We actually don't need to this, as sfdx-lwc-jest will automock to a value, but better to be specific
 * and to show how to mock out certain GVPs
 * 
 * How lwc-jest transforms GVPs: 
 * https://github.com/salesforce/lwc-test/blob/master/packages/%40lwc/jest-transformer/src/transforms/utils.js
 */ 
jest.mock('@salesforce/user/Id', () => {
    return { default: '034343434' };
}, { virtual: true });

describe('c-helloWorld', () => {

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays hello user', () => {
        // Create element
        const element = createElement('c-hello-world', {
            is: HelloWorld
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const h1 = element.shadowRoot.querySelector('.c-hello-world__title');
        expect(h1.textContent).toBe(`Hello 034343434!`);
    });

    it('displays bye on click of logout', () => {
        // Create element
        const element = createElement('c-hello-world', {
            is: HelloWorld
        });
        document.body.appendChild(element);

        const button = element.shadowRoot.querySelector('lightning-button');
        button.dispatchEvent(new CustomEvent('click'));

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise rejects.
        return Promise.resolve().then(() => {
            // Verify display changed
            const h1 = element.shadowRoot.querySelector('.c-hello-world__title');
            expect(h1.textContent).toBe(`Bye!`);
        });
    });

    // --- Exercise 2 --- //
    it("displays the name from the input!", () => {
        // TODO:
        // 1. Verify that there is no name for the default
        // 2. Verify that inputing your name into the text box, changes the name of the h1 c-hello-world__name
    });

    // --- Exercise 3 --- //
    it("Changing the name imperatively works also!", () => {
        // TODO: Verify that calling changeName from the component will trigger the name to be updated
    });
});