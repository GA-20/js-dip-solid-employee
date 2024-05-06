const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, lastName, post, department, salary) {
    super(id, name, lastName, post, department);
    this.salary = salary;
  }

  getBonusAmount() {
    return this.salary * (5 / 100); // Assuming 5% bonus for engineers
  }
}

module.exports = Engineer;
