/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step 1 : declare a function
 * step 2 : call check whether the function is called properly
 * step 3 : pass/set a parameter
 * step 4 :  pas the parameter(s), check whether parameter is passed in a proper format. 
 */ 


function sumOfNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum = sum + number;
        // return sum;
    }
    return sum;
}
const numbs = [54, 64, 13, 6];
const sum = sumOfNumbers(numbs);
console.log('Sum of numbers is', sum);