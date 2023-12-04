function reverseString(str) {
   const arr = [...str]
   const result = arr.map((el,i) => arr[arr.length - i -1]).join('');
   return result;
};

module.exports = reverseString;
