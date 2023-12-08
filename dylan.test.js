
const dylansFunc = require("./dylan.js");

test('Is palindrome', () => {
  var result = dylansFunc.checkString('racecar')  
  expect(result).toBe(true);
  });


  test('Is non-palindrome', () => {
    const result = checkString('hello');
    expect(result).toBe(false);
  });
  