// CHALLENGE 1: REVERSE A STRING

// Return a string in reverse

// ex. reverseString('hello') === 'olleh'



function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    return newString;// "olleh"


}
let output = reverseString("Hello");
console.log(output);

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false


function isPalindrome(str) {

    if (str === reverseString(str)) {
        return true;
    }
    else {
        return false;
    }


}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125


function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}



let output2 = reverseInt(123);
console.log(output2);


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

var string = "hello world";
string = string.charAt(0).toUpperCase() + string.slice(1);
//alert(string);

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {

    let charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function (char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for (let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log('solution: ', maxCharacter('platypus'));
console.log('===============================================');



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}



// Call Function
const output5 = fizzBuzz();

console.log(output5);