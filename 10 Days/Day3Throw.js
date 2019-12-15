'use strict';

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a === 0) {
        throw new Error('Zero Error');
    }
    if (a < 0) {
        throw new Error('Negative Error');
    }
    return 'YES';
}


// console.log(isPositive("3")); // YES
// console.log(isPositive("2")); // YES
// console.log(isPositive("1")); // YES
// console.log(isPositive("0")); // Zero Error
// console.log(isPositive("6")); // YES
// console.log(isPositive("-3")); // Negative Error


// Day 3: Throw

// Sat Dec 14, 2019

// https://www.hackerrank.com/challenges/js10-throw/topics/javascript-errors

// 7 more challenges to get your next star!
// Points: 10/17
// Days of JS
// Problem
// Submissions
// Leaderboard
// Discussions
// Editorial
// Topics
// Objective

// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Input Format

// Locked stub code in the editor reads the following input from stdin and passes each value of  to the function as an argument:
// The first line is an integer, , denoting the number of times the function will be called with some .
// Each line  of the  subsequent lines contains an integer denoting some .

// Constraints

// Output Format

// If the value of  is positive, the function must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Sample Input 0

// 3
// 1
// 2
// 3
// Sample Output 0

// YES
// YES
// YES
// Explanation 0

// Each of the given values is positive, so we return YES each time. The value returned during each function call is printed on a new line by locked stub code in the editor.

// Sample Input 1

// 3
// 2
// 0
// 6
// Sample Output 1

// YES
// Zero Error
// YES
// Explanation 1

// Locked stub code in the editor makes the following three calls to the isPositive function:

// isPositive(2): This returns YES because  is positive.
// isPositive(0): Because , we throw an Error with  Zero Error. This is caught by the locked stub code and the value of its  is printed.
// isPositive(6): This returns YES because  is positive.
// Sample Input 2

// 2
// -1
// 20
// Sample Output 2

// Negative Error
// YES
// Explanation 2

// Locked stub code in the editor makes the following two calls to the isPositive function:

// isPositive(-1): Because , we throw an Error with  Negative Error. This is caught by the locked stub code and the value of its  is printed.
// isPositive(20): This returns YES because  is positive.