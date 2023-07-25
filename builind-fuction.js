document.addEventListener("DOMContentLoaded", function() {
    var getPersonButton = document.getElementById("get-person-button");
    getPersonButton.addEventListener("click", function() {
      var nameInput = document.getElementById("name-input");
      var ageInput = document.getElementById("age-input");
  
      var name = nameInput.value;
      var age = parseInt(ageInput.value);
  
      try {
        var result = getPerson(name, age);
        displayResult(result);
      } catch (error) {
        displayError(error.message);
      }
    });
  
    function getPerson(name, age) {
      if (!name || typeof name !== "string" || isNaN(age) || age < 0 || age > 150) {
        throw new Error("Invalid parameter type");
      }
  
      return "Name: " + name + ", Age: " + age;
    }
  
    function displayResult(result) {
      var outputDiv = document.getElementById("output");
      outputDiv.textContent = result;
    }
  
    function displayError(errorMessage) {
      var outputDiv = document.getElementById("output");
      outputDiv.textContent = "Error: " + errorMessage;
    }
  });
  