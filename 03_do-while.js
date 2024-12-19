/*
Do-While Loop
    The do-while loop executes a block of code at least once and then repeatedly executes the block as long as the specified condition evaluates to true. Unlike the while loop, the condition is checked after the code block executes.

Syntax:
    do {
        Code to be executed
    } while (condition);

    1. Code block: The code inside the do block executes at least once, regardless of the condition.
    2. Condition: A boolean expression that is evaluated after each iteration. If true, the loop runs again; if false, the loop stops.
*/

// 1. Basic do-while loop

let i = 1

do {
    // console.log(`Iteration: ${i}`)
    i++
} while(i <= 5)