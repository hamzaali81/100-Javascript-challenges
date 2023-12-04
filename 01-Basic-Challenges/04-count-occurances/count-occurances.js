function countOccurrences(str, char) {
    const array = [...str]
    const data = array.filter((el)=> el === char).length;
    return data;
};

module.exports = countOccurrences;
