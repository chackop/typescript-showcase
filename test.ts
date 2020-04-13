// Declaring an abstract class
abstract class Department {

    constructor(public name: string) {

    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

// creating a sub class based on abstract class
class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing");// constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The accounting department meets each Monday");
    }

    generateReports(): void {
        console.log("Generating reports...");
    }
}

// observing behaviour of our classes
let department: AccountingDepartment; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports(); // error: method does not exist on declared abstract type

