
const Sentiment = require('sentiment');
function lukeWork(a, b){
    const sentiment = new Sentiment();
    const result = sentiment.analyze("cats are hot");
    console.log(result);
    displayMessage();
    let answer = findSquare(8);
    console.log(answer);
    return a + b;   
}

function displayMessage() {
    console.log("Luke says g'day");
}


function findSquare(a){
    return a*a;
}
module.exports = lukeWork;