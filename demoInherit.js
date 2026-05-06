class Animal
{
    constructor(name)
    {
        this.name = name;
    }

    sound()
    {
        console.log("Parent Sound function")
        console.log(this.name)
    }
}


class Dog extends Animal
{
    constructor(name)
    {
        super(name) // callls parent constr4cutro
    }
}


const d = new Dog("Tuffy")
d.sound();