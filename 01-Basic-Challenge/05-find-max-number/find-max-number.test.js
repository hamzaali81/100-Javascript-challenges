const findMaxNumber = require("./find-max-number.js");

test('Finding the maximum number in an array', ()=>{
    expect(findMaxNumber([1, 2, 3, 4, 5,10])).toBe(10);
    expect(findMaxNumber([1, 2, 3, 4, 5,10,100])).toBe(100);
    expect(findMaxNumber([1, 2, 3, 4, 5,10,100,1000])).toBe(1000);
})