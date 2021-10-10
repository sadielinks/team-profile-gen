// test for engineer class

// find js file to test
const Engineer = require('../lib/engineer');

test('GitHub Test', () => {
    const testValue = 'kobelinks';
    // same as employee test, add in values to tack on testing value (1)
    const githubTest = new Engineer('Kobe', 24, 'lakers@fakegmail', testValue);
    // getGitHub from engineer.js
    expect(githubTest.getGitHub()).toBe(testValue);
});

test('Role Test', () => {
    const testValue = 'Engineer';
    const roleTest = new Engineer('Kobe', 24, 'lakers@fakegmail', 1);
    expect(roleTest.getRole()).toBe(testValue);
});