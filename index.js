const EmployeeManager = require("./employeeManager");
const Engineer = require("./engineer");
const HumanResources = require("./humanResources");
const Director = require("./director");

(() => {
  const employeeManager = new EmployeeManager();

  const engineer = new Engineer(
    1,
    "John",
    "Doe",
    "Engineer",
    "Engineering",
    5000
  );
  const hr = new HumanResources(
    2,
    "Jane",
    "Doe",
    "HR",
    "Human Resources",
    7000
  );
  const director = new Director(
    3,
    "Alice",
    "Doe",
    "Director",
    "Management",
    10000
  );

  employeeManager.addEmployee(engineer);
  employeeManager.addEmployee(hr);
  employeeManager.addEmployee(director);

  console.log("All employees: ", employeeManager.listEmployees());
  console.log("All salary budger: ", employeeManager.getSalaryBudget());

  // -------------------

  employeeManager.deleteEmployee(2);
  console.log(
    "All employees (after delete): ",
    employeeManager.listEmployees()
  );
  console.log(
    "All salary budger (after delete): ",
    employeeManager.getSalaryBudget()
  );

  // -------------------

  const newDirector = new Director(
    3,
    "Alice",
    "Doe",
    "Director",
    "Management",
    12000
  );
  employeeManager.editEmployee(3, newDirector);
  console.log(employeeManager.listEmployees());
  console.log(employeeManager.getSalaryBudget());

  console.log("Bonus for engineer: ", engineer.getBonusAmount());
  console.log("Bonus for human resources: ", hr.getBonusAmount());
  console.log("Bonus for director: ", director.getBonusAmount());
})();
