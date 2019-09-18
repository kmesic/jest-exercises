const HELLO_WORLD = "Hello World!"
const SALESFORCE = "Salesforce";

// Return Hello World! or SALESFORCE Hello World!
export const helloWorld = (salesforce) => {
    return salesforce ? `${SALESFORCE} ${HELLO_WORLD}` : HELLO_WORLD;
};

// Get data from our amazing API and modify it!
export const getData = () => {
    return fetch('http://www.google.com/test.json')
        .then((response) => {
            return response.json();
        }).then((res) => {
            if (res.data) {
                res.data.salesforce = `${SALESFORCE} rocks!`;
            }
            return JSON.stringify(res);
        });
}

// Return new array with new value of every item executed by the callback
export const specialMap = (arr, callback) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i));
    }
    return newArr;
}