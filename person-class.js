class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var person1 = new Person("John Doe", 30);

    var person2 = new Person();

   
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = `Person 1: ${person1.getDetails()}\nPerson 2: ${person2.getDetails()}`;
  });
  