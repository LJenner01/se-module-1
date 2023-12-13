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
    simpleInt(20000,5,2);
    numberRandom(10, 30);
    factorial(5);
    countLetter("dogfood", "o")

}

// Question 1

function displayMessage() {
    console.log("Hello Boys!!");
}

// Question 2

function findSquare(a) {
    return a*a
}

// Question 3

function calFahrenheit(cel) {
    return console.log((cel * 9/5) + 32)
}

// Question 4

function rectangleArea(a, b) {
    return a*b
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
    return resultVowel.length
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

// Question 12

function numberRandom(x, y) {
    return console.log(Math.floor(Math.random() * (y-x))+x)
}

// Question 13

function factorial(num) {
    let result = 1
    for (i=1 ; i <= num ; i++)
        result *= i
    return console.log(result)

}

// Question 16

function countLetter(word, letter) {
    var count = 0
    for (i=0; i < word.length; i++) {
        if (word.charAt(i)==letter) {
            count ++
        }
    }
    return console.log(count)
}

module.exports = {rectangleArea, findSquare, countVowel};