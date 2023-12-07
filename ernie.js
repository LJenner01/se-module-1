function ernieWork(){
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze('cats are stupid');
    console.log('result')
    console.log(calFahrenheit(32))
    console.log(area)
}

module.exports = ernieWork;

function calFahrenheit(cel){
return (cel*9/5)+32
}

function rectangleArea(area){

}