const JamesB = require("./james.js");
const { dylanFunction } = require("./dylan.js");
const Alex = require("./alex.js");
const ernieWork = require("./ernie.js");

function main(){
    console.log('getting started...');
    JamesB();
    lukeWork();
    ernieWork();
    lukeWork();
    AlexanderSeyler();
}

function lukeWork(){
    console.log('lukes function');
};

console.log(main())