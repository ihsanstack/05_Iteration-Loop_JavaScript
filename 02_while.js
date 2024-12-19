/*
While loop:
    The while loop repeatedly executes a block of code as long as the specified condition evaluates to true. It is useful when you do not know the number of iterations in advance and need to continue based on a condition.
Syntax:
    while (condition) {
        Code to be executed
    }
    1. Condition: A boolean expression that is evaluated before each iteration. If true, the loop runs; if false, the loop stops.
    2. Code block: Contains the statements to execute repeatedly.
*/

// 1. Basic while loop
let i = 1; // Initialization

while (i <= 5) { // Condition
    // console.log(`Iteration: ${i}`);
    i++; // Increment
}



// 2. factorial using while loop
let num = 5;
let factorial = 1;

while (num > 0) {
    factorial *= num; // Multiply the current number with factorial
    num--; // Decrement the number
}

// console.log(`Factorial: ${factorial}`);




// 3. Simulating a Countdown
let countDown = 10

while(countDown > 0) {
    console.log(countDown)
    countDown--
}
console.log("Blast off!");