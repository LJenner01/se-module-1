const JamesB = require('./james.js');

test("The area with a width of 6 and length of 8 should equal 48", () => {
    expect(JamesB.rectangleArea(6, 8)).toBe(48);
  });
  
test("The area with a width of 6 and length of 8 should fail when it is not equal 48", () => {
    expect(JamesB.rectangleArea(6, 8)).toBe(24);
   });

test("The square of 6 should equal 36", () => {
    expect(JamesB.findSquare(6)).toBe(36);
   });

test("There should be 2 vowels in the word vowel", () => {
    expect(JamesB.countVowel("vowel")).toBe(2);
   });