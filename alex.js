
function Alex(){
    display();
    let answer = findSquare(4);
    let celsius = Fahrenheit(20);
    let Area = measurements(5,6);
    console.log(answer);
    console.log(celsius);
    console.log(Area);
}
function display() {
    console.log("Hello from Alex");
}
function Fahrenheit(cel) {
    return (cel*9/5)+32;
}
function measurements(a,b){
    return (a*b);
}

function findSquare(a){
    return a*a;
}
module.exports = Alex;