const JamesB = require("./james.js");
const dylanFunction = require("./dylan.js");
const Alex = require("./alex.js");
const ernieWork = require("./ernie.js");
const lukeWork = require("./lukes.js");
const { encrypt, decrypt } = require('encryption-toolkit');


function main(){
    console.log('getting started...');
    JamesB();
    lukeWork();
    ernieWork();
    Alex();
    dylanFunction();
 
    const secretKey = 'my_secret_key'; const plainText = 'Hello, World!';

    const encryptedData = encrypt(plainText, secretKey); 
    console.log('Encrypted:', encryptedData);
    
    const decryptedText = decrypt(encryptedData, secretKey); 
    console.log('Decrypted:', decryptedText);

    console.log(decryptedText);
}

console.log(main())