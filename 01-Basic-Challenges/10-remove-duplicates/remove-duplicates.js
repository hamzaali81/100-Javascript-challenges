function removeDuplicates(arr) {
   const uniqueArray = [];
    arr.map((el)=> {
   if(!uniqueArray.includes(el)) uniqueArray.push(el);  
})
return uniqueArray;
}

module.exports = removeDuplicates;