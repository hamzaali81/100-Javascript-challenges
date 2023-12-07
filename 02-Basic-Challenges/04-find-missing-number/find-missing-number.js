function findMissingNumber(arr) {
    const sortedArrays = arr.sort();
    const storeData = [];
    for(let i = 1; i<=arr.length + 1; i++){
    if(!sortedArrays.includes(i))   {
        storeData.push(i);
    } 
    }
    return storeData;
}

module.exports = findMissingNumber;