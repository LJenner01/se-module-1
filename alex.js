
function Alex(){
    display();
    let answer = findSquare(4);
    let celsius = Fahrenheit(20);
    let Area = measurements(5,6);
    let Circircum = radius1(5);
    let Cirarea = radius2(5);
    console.log(answer);
    console.log(celsius);
    console.log(Area);
    console.log(Circircum);
    console.log(Cirarea);
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
function radius1(a){
return (2*Math.PI*a);
}
function radius2(a){
    return (a*Math.PI*a);
}
function findSquare(a){
    return a*a;
}
module.exports = Alex;