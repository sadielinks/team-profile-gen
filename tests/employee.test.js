// creating tests for Employee parent class
// find the js file to test
const Employee = require('../lib/employee');

// name testing
test("Name Test", () => {
    const testValue = "Kobe";
    const nameTest = new Employee(testValue);
    expect(nameTest.getName()).toBe(testValue);
  });


// id testing
test('Print Employee Id')

// email testing
test('Print Employee Email')
