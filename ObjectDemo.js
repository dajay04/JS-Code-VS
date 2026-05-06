// Creating an object that has 2 properti i.,e firstName & lastName
let person = 
{
    firstName: "Ajay",
    lastName: "QA Lead"
}

// Access properties using dot notation
console.log(person.firstName)
console.log(person.lastName)

// Access properties using bracket notation
console.log(person["firstName"])
console.log(person["lastName"])


// update the property value
person.firstName = "Deepak";
console.log(person.firstName) // Deepak

//Add new property
person.gender = "male";
console.log(person)

//Delete propety
delete person.gender
console.log(person)

// CHeck if peopery exits 
let isExistProp= "gender" in person; // true or false 
console.log(isExistProp) // false

// print all ements using for in loop ->

for(let key in person)
{
    console.log(key +" : "+ person.key )
}