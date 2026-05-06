let employee = 
{
    firstName: "Learn Testing",
    lastName: "BY AD",
    age: 31,
    fullName : function(){return this.firstName + " "+ this.lastName}
}

// call method
console.log(employee.fullName());

// print full object
console.log(employee);