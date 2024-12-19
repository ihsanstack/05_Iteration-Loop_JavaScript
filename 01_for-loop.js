/*
For Loop:
    A for loop is used to repeatedly execute a block of code as long as a specified condition is true. It is particularly useful when you know the number of iterations beforehand.

Syntax:
    for (initialization; condition; increment/decrement) {
        Code block to be executed
    }

*/


// 1. Basic for loop
for(let i = 1; i <= 5 ; i++) {
    // console.log(`Iteration number: ${i}`)
}



// 2. Iterating Over an Array
let friends = ['Ihsan', 'Usama', 'Zabih']
for(let i = 0; i < friends.length; i++) {
    // console.log(`Friends: ${friends[i]}`)
}



// 3. Nested For Loops
// For loops can be nested to work with multi-dimensional arrays or perform repeated actions.

// Outer loop: Iterates 3 times (i = 1, 2, 3)
for (let i = 1; i <= 3; i++) {
    // Logs the current iteration of the outer loop
    // console.log(`Outer loop iteration: ${i}`);
    
    // Inner loop: Iterates 2 times (j = 1, 2) for each outer loop iteration
    for (let j = 1; j <= 2; j++) {
        // Logs the current iteration of the inner loop
        // console.log(`  Inner loop iteration: ${j}`);
    }
}





// 4. Breaking Out of a For Loop
// You can use break to exit a loop early.

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        // console.log("Breaking the loop")
        break;
    }
    // console.log(i)
}




// 5. Skipping Iterations
// You can use continue to skip the rest of the current iteration.

for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        console.log(`Skipping iteration: ${i}`)
        continue;
    }
    console.log(i)
}