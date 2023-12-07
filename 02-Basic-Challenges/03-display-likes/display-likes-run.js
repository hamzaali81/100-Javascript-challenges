const displayLikes = require('./display-likes.js');

const result = displayLikes([]); // "no one likes this"
// const result = displayLikes(["Alex"]); // "Alex likes this"
// const result = displayLikes(["Alex, Jacob"]); // "Alex and Jacob like this"
// const result = displayLikes(["Alex, Jacob, Mark"]); // "Alex, Jacob and Mark like this"
// const result = displayLikes(["Alex, Jacob, Mark, Max"]); // "Alex, Jacob and 2 others like this"
// const result = displayLikes(["Alex, Jacob, Mark, Max, John"]); // "Alex, Jacob and 3 others like this"
console.log(result);