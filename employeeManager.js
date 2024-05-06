class EmployeeManager {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  editEmployee(id, employee) {
    const index = this.employees.findIndex((employee) => employee.id === id);
    this.employees[index] = employee;
  }

  deleteEmployee(id) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  listEmployees() {
    return this.employees;
  }

  getSalaryBudget() {
    return this.employees.reduce((acc, employee) => {
      if (employee.hasOwnProperty("salary")) {
        acc += employee.salary;
      }
      return acc;
    }, 0);
  }
}

module.exports = EmployeeManager;
