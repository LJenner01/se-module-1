function JamesB() {
    console.log("This function was made by James");
    displayMessage();
    findSquare(8);
    calFahrenheit(100);
    rectangleArea(6, 12);
    perimeterAndArea(10)
}

function displayMessage() {
    console.log("Hello Boys!!")
}

function findSquare(a) {
    return console.log(a*a)
}

function calFahrenheit(cel) {
    return console.log((cel * 9/5) + 32);
}

function rectangleArea(a, b) {
    return console.log(a*b + " is the area of the rectangle")
}

function perimeterAndArea(radius) {
    return console.log("Perimeter is " + (2*Math.PI*radius) + " and the area is " + Math.PI*(radius^2))
}

module.exports = JamesB;