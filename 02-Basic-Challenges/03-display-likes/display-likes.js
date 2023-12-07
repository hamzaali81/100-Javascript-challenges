function displayLikes(list) {
    const arrayLength = list.length;
    if(arrayLength === 0) {
        console.log(`No one like this`)
    }
    else if(arrayLength === 1) {
        console.log(`${list[0]} like this`)
    } else if(arrayLength === 2) {
        console.log(`${list[0]} ${list[1]} like this`)
    }  else {
        console.log(`${list[0]} ${list[1]} and ${arrayLength - 2} others like this`)
    }
}