// second: manager class to include officeNumber + override getRole from employee parent class

// bring in Employee from parent class
const Employee = require('./Employee')

// create manager constructor method
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }