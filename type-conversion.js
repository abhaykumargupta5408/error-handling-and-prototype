document.addEventListener("DOMContentLoaded", function() {
    var convertButton = document.getElementById("convert-button");
    convertButton.addEventListener("click", function() {
      var inputElement = document.getElementById("input");
      var inputValue = inputElement.value;
  
      var result = convertToNumber(inputValue);
      displayResult(result);
    });
  
    function convertToNumber(str) {
      var num = Number(str);
      if (isNaN(num)) {
        return "Invalid number";
      }
      return num;
    }
  
    function displayResult(result) {
      var outputDiv = document.getElementById("output");
      outputDiv.textContent = result;
    }
  });
  