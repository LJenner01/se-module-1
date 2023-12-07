function ernieWork(){
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze('cats are stupid');
    console.log('result');
    console.log(calFahrenheit(32));
    console.log(rectangleArea(10,50));
    console.log(circleValues(10));
    console.log(reverseNum(123));


    // question 7 
    const inputString = "Hello";
    const result7 = countVowels(inputString);
    console.log(`Number of vowels in "${inputString}": ${result7}`);
}

module.exports = ernieWork;

function calFahrenheit(cel){
return (cel*9/5)+32;
}

function rectangleArea(a,b){
    return `Area rectangle ${a * b}`;
}

function circleValues(radius){
    return `perimeter: ${2 * Math.PI* radius}, Area: ${Math.PI* radius *radius}`;
}

function reverseNum(num) {
    var reverse = 0;
    while(num != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + num%10;
      num = Math.trunc(num/10);
    }
    return reverse;
  }

  function countVowels(inputString) {
    const lowercaseString = inputString.toLowerCase(); // converting the string to lowercase
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); //creating a vowel set for the below to count the relevant vowels

    let vowelCount = 0;
    for (let char of lowercaseString) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

  