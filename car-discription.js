class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var car = new Car("Toyota", "Corolla", 2022);
    var description = car.getDescription();
  
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = description;
  });
  