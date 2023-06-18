var assert = require('assert');
function extractNameFromTemplate(value) {
    // throw new Error('Not implemented');
    const tag = value.match(/Hello, (.*?)!/);
    return tag[1];
}

//assert.equal(extractNameFromTemplate('Hello, John Doe!'), 'John Doe');

function extractEmails(str) {
    return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}

console.log(extractEmails("angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com"));
