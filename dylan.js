var Sentiment = require('sentiment');

function dylanFunction(){
    console.log("Dylans Function");
    var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666
    }

module.exports = dylanFunction;


// 3. Write a function to convert Celsius to Fahrenheit

function calFahrenheit(temp) {
console.log(temp * (9/5) + 32);
}
calFahrenheit(34);

// 4. Write a function to find the area of a given Rectangle

function rectangleArea(side1, side2) {
console.log(side1 * side2);
}
rectangleArea(4, 5);

// 5. Write a function to find the area and perimeter of a Circle

function circleArea(diameter) {
console.log(3.14 * Math.pow(2, diameter));
}
circleArea(4)

// 6. Write a function to reverse a number

function reversenum(num) {
    var reverse = 0;
    while(num != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + num%10;
      num = Math.trunc(num/10); 
    }
    return reverse;
}
console.log(reversenum(234));

// 7. Count number of Vowels in String

function countVowels(stringRef) {

    let count = 0; 

    for (let i = 0; i<stringRef.length; i++){
        if (stringRef[i] === "o" || stringRef[i]  === "u" || stringRef[i]  === "i" || stringRef[i]  === "e" ) {
            count ++

}
    } 
    return count 
    }
    console.log(countVowels("ioekeee"))

    // 8. Flatten array of arrays using JavaScript reduce


function flattenList(list) {
    return list.flat();
}
console.log(flattenList([[1, 2, 3], [1, 2, 3], [1, 3]]));



//9. Write a function to check if an input string is a palindrome (same backswards as forwards) V0.0.2

function checkString(string){

    let reversestr = string.split('').reverse().join('') 

if (string === reversestr) {
    return true
} else {
    return false
}}
console.log(checkString('racecar'));

//10. Write a function to calculate simple interest based on the principle amount

function intrest(principal) {
    let years = 7;
    let rate = 0.12;
    intrest = principal * years * rate;
    console.log(intrest);
}
intrest(6000);

// 12. Write a function to generate a random number

function randomNum(){

return Math.floor(Math.random() * 1000);
}

console.log(randomNum())

// 13. Write a function to find Factorial of a number

function getFactorial(n){
    if (n === 0 || n === 1) {
    return 1;
} else {
return n * getFactorial(n - 1);
}
}
console.log(getFactorial(8));

// 16. Write a function to find the count of a letter in a string

function letterCount(str, c) {
    let count = 0;
for (i = 0; i < str.length; i ++) {
    if (str.charAt(i) == c) {
        count ++; 
    } 
} return count 
}
console.log(letterCount('helloeee', 'e'))