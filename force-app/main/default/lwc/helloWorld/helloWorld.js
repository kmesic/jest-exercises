import { LightningElement, api, track } from 'lwc';
import Id from '@salesforce/user/Id';

export default class HelloWorld extends LightningElement {
    @api customPrefixMessage = "Hello";
    @track loggedIn = true;
    @track name = "";

    get message() {
        return this.loggedIn ? `${this.customPrefixMessage} ${Id}!` : "Bye!";
    }

    get nameMessage() {
        return `Your name is: ${this.name}`;
    }

    @api
    changeName(newName) {
        this.name = newName;
    }

    handleClick() {
        this.loggedIn = false;
    }

    handleChange(event) {
        this.name = event.target.value;
    }
}