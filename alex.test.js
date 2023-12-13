const Alex = require('./alex.js');

test("The square of the 5 to be 25",() => {
    expect(Alex.findSquare(5)).toBe(25);
}
);
test("check if it is a palindrome",()=> {
    expect(Alex.checkPalindrome("test")).toBe(false);
    expect(Alex.checkPalindrome("radar")).toBe(true);
}
);
test("check the count of a specific letter",() => {
    expect(Alex.letterCount("suspects","s")).toBe(3);
}
);