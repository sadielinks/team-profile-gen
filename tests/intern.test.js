// test for intern class

// find js file to test
const Intern = require('../lib/intern');

test('School Test', () => {
    const testValue = 'Northwestern University';
    const schoolTest = new Intern('Kobe', 24, 'lakers@fakegmail', testValue);
    // getSchool from intern.js
    expect(schoolTest.getSchool()).toBe(testValue);
});

test('Role Test', () => {
    const testValue = 'Intern';
    const roleTest = new Intern('Kobe', 24, 'lakers@fakegmail', 1);
    expect(roleTest.getRole()).toBe(testValue);
});