var Sentiment = require('sentiment');

function dylanFunction(){
    console.log("Dylans Function");
    var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666
    };

module.exports = dylanFunction;


// 3. Write a function to convert Celsius to Fahrenheit

function calFahrenheit(temp) {
console.log(temp * (9/5) + 32);
};
calFahrenheit(34);

// 4. Write a function to find the area of a given Rectangle

function rectangleArea(side1, side2) {
console.log(side1 * side2);
}
rectangleArea(4, 5);