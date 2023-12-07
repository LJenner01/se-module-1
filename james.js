function JamesB() {
    console.log("This function was made by James");
    displayMessage();
    findSquare(8);
    calFahrenheit(100);
    rectangleArea(6, 12);
    perimeterAndArea(10);
    reverseNum(123);
    countVowel("awesome");
    //flattenArray([1, 2, [3, [4, 5, 6], 7], 8]);
    palindrome("dogyyyy");
    simpleInt(20000,5,2)
}

// Question 1

function displayMessage() {
    console.log("Hello Boys!!");
}

// Question 2

function findSquare(a) {
    return console.log(a*a)
}

// Question 3

function calFahrenheit(cel) {
    return console.log((cel * 9/5) + 32)
}

// Question 4

function rectangleArea(a, b) {
    return console.log(a*b + " is the area of the rectangle")
}

// Question 5

function perimeterAndArea(radius) {
    return console.log("Perimeter is " + (2*Math.PI*radius) + " and the area is " + Math.PI*(radius^2))
}

// Question 6

function reverseNum(x) {
    var num = String(x);
    var splitString = num.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return console.log(joinArray)
}

// Question 7

function countVowel(word) {
    var string = word.split("");
    var resultVowel = string.filter(filterWord);
    return console.log(resultVowel.length)
}

function filterWord(vowel) {
    return vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'
}

// Question 8

// function flattenArray(arr) {
//     return arr.reduce();
//}

// Question 9

function palindrome(word) {
    word = word.toLowerCase();
    var reversedWord = word.split('').reverse().join('')
    if (word === reversedWord) {
        return console.log("Palindrome")
    } else {
        return console.log("Not a palindrome")
    }
}

// Question 10

function simpleInt(principle, rate, time) {
    var finalAmt = principle + principle*time*rate;
    return console.log(finalAmt); 
  }

module.exports = JamesB;