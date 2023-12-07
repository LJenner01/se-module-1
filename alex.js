
function Alex(){
    display();
    let answer = findSquare(4);
    let celsius = Fahrenheit(20);
    console.log(answer);
    console.log(celsius);
}
function display() {
    console.log("Hello from Alex");
}
function Fahrenheit(cel) {
    return (cel*9/5)+32;
}

function findSquare(a){
    return a*a;
}
module.exports = Alex;