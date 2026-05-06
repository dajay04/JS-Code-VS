const Parent = require('./Parent')

class Child extends Parent
{

    printChildMessage()
    {
        console.log("Hello from Child Class")
    }
}


const obj = new Child();
obj.printMessage();
obj.printChildMessage();