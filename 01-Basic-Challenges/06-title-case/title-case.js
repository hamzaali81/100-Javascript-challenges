function titleCase(str) {
    const arrayStr = str.split(' ');
    const result = arrayStr.map((el,i)=> el.charAt(0).toUpperCase() + el.slice(1));
    return result.join(' ');
 };

 module.exports = titleCase;