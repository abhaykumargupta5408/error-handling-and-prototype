class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Error: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var user = new User("john_doe", "Passw0rd");
    
    // Getter Example
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = `Username: ${user.username}, Password: ${user.password}`;
  
    // Setter Example (Change password)
    user.password = "newPass123";
  });
  