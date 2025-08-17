// Problem 1: Reverse a String
function reverseText(text) {
    let reversed = " ";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }
    return reversed;
}
console.log(reverseText("hello"));


//Problem 2 : Count Vowel in string
function countVowels(text) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (text[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(countVowels("programming"));


// Problem 3: Check Palindrome
function isPalindrome(text) {
    let start = 0;
    let end = text.length - 1;
    while (start < end) {
        if (text[start] !== text[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


//problem 4 : find the maximum Number
function findMaxNum(a) {
    let max = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}
console.log(findMaxNum([5, 1, 9, 3]));


//problem 5 : Remove duplicates from an array
function removeDuplicates(a) {
    let uniqueArray = [];
    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (a[i] === uniqueArray[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            uniqueArray[uniqueArray.length] = a[i];
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


//problem 6 : Sum of all numbers in array
function sumArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
console.log(sumArray([[1, 2, 2, 3, 4, 4]]));


//problem 7 : FInd Even Number in an array
function findEvenNum(a) {
    let evenNum = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            evenNum[evenNum.length] = a[i];
        }
    }
    return evenNum;
}
console.log(findEvenNum([1, 2, 3, 4, 5, 6]));


// Problem 8: Capitalize First Letter of Each Word



// Problem 9: Find the Factorial of a Number
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Problem 9:", factorial(5)); // 120


// Problem 10: PingPong Challenge
function pingPong() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
console.log("P10:");
pingPong();