// second: manager class to include officeNumber + override getRole from employee parent class

// bring in Employee from parent class
const Employee = require("./Employee");

// create manager constructor method
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // use 'super' - thanks BCS LA!
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // per README:
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

// print file
module.exports = Manager;
