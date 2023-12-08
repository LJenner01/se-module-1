
const Sentiment = require('sentiment');
function lukeWork(a, b){
    
    var car;
    let wheel = 'sports';
    let result = wheel.indexOf('z');
    if(result>0){
        // we've found what we're looking for...do something 
    }

    const user = {
        "first_name" : "Sammy",
        "last_name" : "Shark",
        "followers" : 384
    };

    user.first_name;
    user.followers = user.followers + 1;

    if(1==1){
        const x = 2;
        console.log('inside: ' + x);
        let speed = 10;
        let rush = 9;
    }


    //console.log(door);
    // const sentiment = new Sentiment();
    // const result = sentiment.analyze("cats are hot");
    // console.log(result);
    // displayMessage();
    // let answer = findSquare(8);
    // console.log(answer);
    return a + b;   
}

function displayMessage() {
    console.log("Luke says g'day");
}


function findSquare(a){
    return a*a;
}
module.exports = lukeWork;