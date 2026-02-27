// Qs 1 

let num1 = 30;

if (num1 % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Qs 2

// let userName = prompt("Enter your name");
// let userAge = prompt("Enter your age");

// alert(`${userName} is ${userAge} years old.`)

// Qs 3

let quarter = 3;

switch (quarter) {
    case 1 :
        console.log("January, February, March");
        break;
    case 2 :
        console.log("April, May, June");
        break;
    case 3 :
        console.log("July, August< September");
        break;
    case 4 :
        console.log("October, November, December");
        break;
}

// Qs 4

let str = "Apples";

if ((str[0] === 'A' || str[0] === 'a') && (str.length > 5)) {

    console.log("golden string");
} else {
    console.log("Not golden string")
}

// Qs 5

let a = 2;
let b = 5;
let c = 7;

if (a > b) {
    if (c > a) {
        console.log(c, " is largest.");
    } else {
        console.log(a, " is largest.");
    }
} else {
    if (b > c) {
        console.log(b, " is largest.");
    } else {
        console.log(c, " is largest.");
    }
}

// Qs 6 (Bonus)

let n1 = 32;
let n2 = 4785;

if (n1 % 10 == n2 % 10) {
    console.log("numbers have same last digit")
} else {
    console.log("numbers don't have same last digit")
}