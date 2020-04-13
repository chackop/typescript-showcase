// Declaring a class with static members
class Test {
    static message = "Hello";
    displayMessage(name: string){
        console.log(Test.message + ' ' + name);
    }
}

let test = new Test();

test.displayMessage('Anton');