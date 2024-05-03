// Develop an employee management system that allows companies to manage their employee information efficiently. The system must provide functionality to add, edit, delete and list employees.

// Requirements:
// RESTful API using Express.js to handle employee CRUD (Create, Read, Update, Delete) operations.

//  Exercise Details:
// Create an Employee class with the following properties:
// ID
// Name
// Last name
// Post
// Department
// Salary
// Implement an employee manager (GestorEmpleados) that allows you to add, edit, delete and list employees.
// Use the Single Responsibility Principle (SRP) to ensure that each class has a single, well-defined responsibility.
// Implement a controller (employeesController) that handles the
// HTTP requests and use the employee manager to perform CRUD operations.
// Use the Dependency Inversion Principle (DIP) to ensure that the controller depends on abstractions rather than concrete implementations.
// It is not necessary to implement authentication or authorization for this exercise.

// Additional notes:
// This exercise is designed to practice applying SOLID principles in designing backend systems.

class Employee {
  constructor(id, name, lastName, post, department, salary) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.post = post;
    this.department = department;
    this.salary = salary;
  }
}

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
}

class EmployeesController {
  constructor(employeeManager) {
    this.employeeManager = employeeManager;
  }

  addEmployee(employee) {
    this.employeeManager.addEmployee(employee);
  }

  editEmployee(id, employee) {
    this.employeeManager.editEmployee(id, employee);
  }

  deleteEmployee(id) {
    this.employeeManager.deleteEmployee(id);
  }

  listEmployees() {
    return this.employeeManager.listEmployees();
  }
}

const employeeManager = new EmployeeManager();

(function () {
  const employee1 = new Employee(
    1,
    "John",
    "Doe",
    "Software Engineer",
    "Engineering",
    50000
  );
  const employee2 = new Employee(
    2,
    "Jane",
    "Smith",
    "Product Manager",
    "Product",
    70000
  );

  employeeManager.addEmployee(employee1);
  employeeManager.addEmployee(employee2);

  const employeesController = new EmployeesController(employeeManager);

  console.log(employeesController.listEmployees());

  const newEmployee = new Employee(
    3,
    "Alice",
    "Johnson",
    "Data Analyst",
    "Data",
    45000
  );
  employeesController.addEmployee(newEmployee);

  console.log(employeesController.listEmployees());

  const updatedEmployee = new Employee(
    2,
    "Jane",
    "Smith",
    "Product Manager",
    "Product",
    75000
  );
  employeesController.editEmployee(2, updatedEmployee);

  console.log(employeesController.listEmployees());

  employeesController.deleteEmployee(1);

  console.log(employeesController.listEmployees());
})();
