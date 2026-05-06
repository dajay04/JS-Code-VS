class Person 
{
    age;
    location;

    constructor(age,location)
    {
        this.age = age
        this.location = location
    }

    getLocation()
    {
        return this.location;
    }

    fullName(firstName,lastName)
    {
        return firstName + " " + lastName;
    }
}

let p = new Person(30,"Delhi"); // object of lcass 

console.log(p.age); // 30 
console.log(p.location); // Delhi
console.log(p.getLocation()); // Delhi
console.log(p.fullName("Learn_Testing_BY", "AD"));