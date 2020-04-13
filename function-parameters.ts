function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

console.log(buildName("Bob"));                  // works correctly now, returns "Bob Smith"
console.log(buildName("Bob", undefined));       // still works, also returns "Bob Smith"
console.log(buildName("Bob", "Adams", "Sr."));  // error, too many parameters
console.log(buildName("Bob", "Adams"));         // ah, just right


// function buildName(firstName: string, lastName?: string) {
//     // ...
// }

// function buildName(firstName: string, lastName = "Smith") {
//     // ...
// }

// (firstName: string, lastName?: string) => string.


// function buildName(firstName = "Will", lastName: string) {
//     return firstName + " " + lastName;
// }

// console.log(buildName("Bob"));                  // error, too few parameters
// console.log(buildName("Bob", "Adams", "Sr."));  // error, too many parameters
// console.log(buildName("Bob", "Adams"));         // okay and returns "Bob Adams"
// console.log(buildName(undefined, "Adams"));     // okay and returns "Will Adams"