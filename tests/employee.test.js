// creating tests for Employee parent class
// find the js file to test
const Employee = require('../lib/employee');

// name testing
test("Name Test", () => {
    const testValue = "Kobe";
    const nameTest = new Employee(testValue);
    // getName from employee.js
    expect(nameTest.getName()).toBe(testValue);
  });


// id testing
test("Id Test", () => {
    const testValue = "24";
    // add previous (name) value with this new testValue
    const idTest = new Employee("Kobe", testValue);
    // getId from employee.js
    expect(idTest.getId()).toBe(testValue);
  });

// email testing
test("Email Test", () => {
    const testValue = "lakers@fakemail.com";
    // add previous (name + id) values with this new testValue
    const idTest = new Employee('Kobe', '24', testValue);
    // getId from employee.js
    expect(idTest.getEmail()).toBe(testValue);
  });