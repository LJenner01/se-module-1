
const dylansFunc = require("./dylan.js");

//9. Write a function to check if an input string is a palindrome 


test('Is palindrome', () => {
  var result = dylansFunc.checkString('racecar')  
  expect(result).toBe(true);
  });


  test('Is non-palindrome', () => {
    const result = dylansFunc.checkString('hello');
    expect(result).toBe(false);
  });
  
  test('Is not a word', () => {
    const result = dylansFunc.checkString(2);
    expect(result).toBe(false);
  });


  // 4. Write a function to find the area of a given Rectangle


test('does test area correctly', () => {
  expect(dylansFunc.rectangleArea(4, 5)).toBe(20);
  });


test('incorrect result', () => {
  expect(dylansFunc.rectangleArea(4, 5)).toBe(30);
  });