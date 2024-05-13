const Employee = require("./employee");

class HumanResources extends Employee {
  constructor(id, name, lastName, post, department, salary) {
    super(id, name, lastName, post, department, salary);
  }

  getBonusAmount() {
    return  this.salary * (10 / 100); // Assuming 10% bonus for HR
  }
}

module.exports = HumanResources;
