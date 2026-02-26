// console.log("Hello World!")
// console.log("Apna college")
// let a = 10;
// let b = 5;
// console.log("sum is :",a+b)


let pencilPrice = 10;
let eraserPrice = 5;
console.log("The total price is :", pencilPrice + eraserPrice, "Rupees.");
// let output = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees."
let output = `The total price is : ${pencilPrice + eraserPrice} Rupees.`;
console.log(output)

//Operators

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);

a = 5;
let str = '5';

console.log(a < b);
console.log(a == b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(a == str);
console.log(a === str);

// Conditional Statements

let age = 17;
if (age >= 18) {
    console.log("You can vote");
}
if (age < 18) {
    console.log("You can not vote");
}

let color = "green";

if (color == "red") {
    console.log("Stop");
} else if (color == "yelllow") {
    console.log("Wait");
} else if (color == "green") {
    console.log("Go");
} else {
    console.log("Light is broken.");
}

// Practice Qs

let size = "S";

if (size == "XL") {
    console.log("price is Rs. 250");
} else if (size == "L") {
    console.log("price is Rs. 200");
} else if (size == "M") {
    console.log("price is Rs. 100");
} else {
    console.log("price is Rs. 50");
}

// Nested if-else

let marks = 85;

if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade O");
    } else {
        console.log("Grade A");
    }
} else {
    console.log("Fail");
}

// Logical Operators

// AND - &&
// OR  - ||
// NOT - !

if (marks >= 33 && marks >= 80) {
    console.log("Pass");
    console.log("A+");
}

console.log(!true)

// Practice Qs

// A "good string is a string that starts with the letter 'a' & has a length > 3 
// Write a program to find if a string is goos or not

let string = "snake"

if (string[0] === 'a' && string.length > 3) {
    console.log("Good string");
} else {
    console.log("Not a good string.");
}

// Switch Statement

let colour = "white";

switch(colour) {
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("wait");
        break;
    case "green" :
        console.log("go");
        break;
    default :
        console.log("broken light");
}

// Alerts & Prompts

// alert("this is a simple alert")

console.log("this is a simple log.");
console.error("this is an error msg");
console.warn("This is a warning msg.");

let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");

let msg = `Welcome ${firstName} ${lastName}!`;

alert(msg)