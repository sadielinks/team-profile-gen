// test for manager class

// find js file to test
const Manager = require('../lib/manager');

test('Office Number Test', () => {
    const testValue = '1';
    // same as employee test, add in values to tack on testing value (1)
    const officeNumber = new Manager('Kobe', 24, 'lakers@fakegmail', testValue);
    // getOfficeNumber from manager.js
    expect(officeNumber.getOfficeNumber()).toBe(testValue);
});