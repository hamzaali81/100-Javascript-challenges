function countVowels(str, vowels = ['a', 'e', 'i', 'o', 'u']) {

  let count = 0;
  for (let text of str.toLowerCase()) {
  if(vowels.includes(text)){
    count++;
  }
}
return count;
}

module.exports = countVowels;