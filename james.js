function JamesB() {
    console.log("This function was made by James");
    displayMessage();
    findSquare(8);
    calFahrenheit(100);
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

module.exports = JamesB;