const Employee = require("./employee");

class Director extends Employee {
  constructor(id, name, lastName, post, department, salary) {
    super(id, name, lastName, post, department);
    this.salary = salary;
  }

  getBonusAmount() {
    return this.salary * (15 / 100); // Assuming 15% bonus for directors
  }
}

module.exports = Director;
