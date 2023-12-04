function palindrome(str) {
    const arr = [...str]
    const output = arr.map((el,i) => arr[arr.length - i -1]).join('');
    const result = output === str ? true : false;
    return result;
}

module.exports = palindrome;