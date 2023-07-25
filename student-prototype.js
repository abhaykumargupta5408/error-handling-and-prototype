function Student(name) {
    this.name = name;
  }
  
  Student.prototype.printDetails = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  var student =new Student("Mithun");
  student.printDetails();
  