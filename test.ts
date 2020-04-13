// defining a passcode
let passcode = "secret passcode 2";

// declaring a class
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if(passcode && passcode == "secret passcode"){
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName){
    console.log(employee.fullName);
}

