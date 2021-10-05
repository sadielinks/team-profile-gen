// fourth: intern class to include school + override getRole from employee parent class

// bring in Employee from parent class
const Employee = require("./Employee");

// create engineer constructor method
class Intern extends Employee {
  constructor(name, id, email, school) {
    // use 'super' - thanks BCS LA!
    super(name, id, email);
    this.school = school;
  }

  // per README:
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// print file
module.exports = Intern;