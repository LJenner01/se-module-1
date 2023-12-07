function ernieWork(){
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze('cats are stupid');
    console.log('result')
    console.log(calFahrenheit(32))
    console.log(rectangleArea(10,50))
}

module.exports = ernieWork;

function calFahrenheit(cel){
return (cel*9/5)+32
}

function rectangleArea(a,b){
    return `Area rectangle ${a * b}`;
}