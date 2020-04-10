// -----------------------------------------------------------------------
// <copyright file="HelloWorld.ts">
//        Copyright (c) Anton Selin.  All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
// first we defining a new class with constructor
var Author = /** @class */ (function () {
    function Author(Name) {
        this.Name = Name;
    }
    return Author;
}());
// then we creating the instance of the class
var author = new Author("Anton Selin");
// New we want to see results in console.
console.log("Hello Readers,");
console.log("Thanks for watching this video course");
console.log("" + author.Name);
