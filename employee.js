class Employee {
  constructor(id, name, lastName, post, department, salary) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.post = post;
    this.department = department;
    this.salary = salary;
  }

  getBonusAmount() {
    throw new Error(
      "getBonusAmount is not implemented for base Employee class"
    );
  }
}

module.exports = Employee;
