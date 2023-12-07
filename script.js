const JamesB = require("./james.js");
const { dylanFunction } = require("./dylan.js");

const Alex = require("./alex.js");

function main(){
    console.log('getting started...');
    dylanFunction();
    JamesB();
    ernieWork();
    lukeWork();
    Alex();
};

function lukeWork(){
    console.log('lukes function');
};

function ernieWork(){
    console.log('ernie function')
};
console.log(main())