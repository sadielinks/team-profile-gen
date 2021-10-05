// third: engineer class to include GitHub + override getRole from employee parent class

// bring in Employee from parent class
const Employee = require("./Employee");

// create engineer constructor method
class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    // use 'super' - thanks BCS LA!
    super(name, id, email);
    this.GitHub = GitHub;
  }

  // per README:
  getGitHub() {
    return this.GitHub;
  }
  getRole() {
    return "Engineer";
  }
}

// print file
module.exports = Engineer;