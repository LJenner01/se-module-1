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

    