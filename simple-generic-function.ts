// // delaring a function with a specific type
// function identity(arg: number): number {
//     return arg;
// }

// // declaring a function with any type
// function identity(arg: any): any {
//     return arg;
// }

// declaring a generic fucntion.
function identity<T>(arg: T): T {
    return arg;
}

// let output = identity<string>("myString");  // type of output will be 'string'

let output = identity("myString");  // type of output will be 'string'