const palindrome = require('./palindrome.js');
// Not complete one case missing
test('Checking for palindrome', ()=>{
    expect(palindrome('madam')).toBe(true);
    expect(palindrome('racecar')).toBe(true);
    expect(palindrome('12321')).toBe(true);
    expect(palindrome('Hello')).toBe(false);
    expect(palindrome('Hello world is good')).toBe(false);
})