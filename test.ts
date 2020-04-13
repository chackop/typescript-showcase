// Declaring a class
class Animal {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

// Declaring a subclass
class Rhino extends Animal {
    constructor(){
        super("Rhino");
    }
}

// Declaring another class
class Employee2 {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: Animal and Employee are not compatible;

