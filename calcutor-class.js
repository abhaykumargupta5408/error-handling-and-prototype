class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var result = Calculator.add(5, 10);
  
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = `Sum: ${result}`;
  });
  