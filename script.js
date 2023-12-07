const JamesB = require("./james.js");

function main(){
    console.log('getting started...');
    dylanFunction();
    JamesB();
    ernieWork();
    lukeWork();
    Alex();
};
import {dylanFunction} from './dylan.js';

function lukeWork(){
    console.log('lukes function');
};

function ernieWork(){
    console.log('ernie function')
};
main("alex.js");
console.log(main())