const JamesB = require("./james.js");
const { dylanFunction } = require("./dylan.js");

function main(){
    console.log('getting started...');
    dylanFunction();
    JamesB();
    ernieWork();
    lukeWork();
    AlexanderSeyler();
};

function lukeWork(){
    console.log('lukes function');
};

function ernieWork(){
    console.log('ernie function')
};

console.log(main())