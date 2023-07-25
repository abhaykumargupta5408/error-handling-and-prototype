class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var employee = new Employee("John Doe", "Software Engineer", 60000);
    var salary = employee.getSalary();
    
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = `Employee Name: ${employee.name}\nPosition: ${employee.position}\nSalary: $${salary}`;
  });
  