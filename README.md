## Overview

This project demonstrates the application of the Dependency Inversion Principle (DIP) in an employee management system. DIP is a fundamental principle in object-oriented design that promotes loose coupling and improves code maintainability.

This code implements DIP by:

1. **Defining an abstract Employee interface**: This interface outlines the expected behavior of all employee types, including methods like getId(), getName(), and getBonusAmount().

2. **Creating concrete employee classes**: Engineer, Director, and HumanResources classes inherit from the Employee interface and implement its methods with specific logic for each employee type.

3. **EmployeeManager depending on the Employee interface**: The EmployeeManager class manages employees by accepting objects that implement the Employee interface. This allows it to work with any employee type as long as they provide the required functionalities.

This approach ensures that EmployeeManager doesn't depend on specific employee implementations. Instead, it relies on a common contract defined by the Employee interface. This makes the code more adaptable to future changes, as you can easily add new employee types without modifying EmployeeManager.

## How to Run

Clone the repository:

```bash
git clone https://git@github.com:GA-20/js-dip-solid-employee.git
```

Install dependencies (No needed at all):

```bash
cd employee-management-dip
npm install
```

Run the code:

```bash
node index.js
```

The result will apprease in CLI:

```bash
All employees:  [
  Engineer {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    post: 'Engineer',
    department: 'Engineering',
    salary: 5000
  },
  HumanResources {
    id: 2,
    name: 'Jane',
    lastName: 'Doe',
    post: 'HR',
    department: 'Human Resources',
    salary: 7000
  },
  Director {
    id: 3,
    name: 'Alice',
    lastName: 'Doe',
    post: 'Director',
    department: 'Management',
    salary: 10000
  }
]
All salary budger:  22000
All employees (after delete):  [
  Engineer {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    post: 'Engineer',
    department: 'Engineering',
    salary: 5000
  },
  Director {
    id: 3,
    name: 'Alice',
    lastName: 'Doe',
    post: 'Director',
    department: 'Management',
    salary: 10000
  }
]
All salary budger (after delete):  15000
[
  Engineer {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    post: 'Engineer',
    department: 'Engineering',
    salary: 5000
  },
  Director {
    id: 3,
    name: 'Alice',
    lastName: 'Doe',
    post: 'Director',
    department: 'Management',
    salary: 12000
  }
]
17000
Bonus for engineer:  250
Bonus for human resources:  700
Bonus for director:  1500
```
